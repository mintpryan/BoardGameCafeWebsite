import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetcher } from '../helpers/axios';
import { RRule, RRuleSet } from 'rrule';
import moment from 'moment-timezone';


export const fetchEvents = createAsyncThunk('items/fetchEvents', async () => {
    const response = await fetcher('event/');
    return response.data;
});


export const fetchEvent = createAsyncThunk('items/fetchEvent', async (_, { getState }) => {
    const state = getState();
    const selectedItem = state.event.selectedItem;
    const response = await fetcher(`event/${selectedItem.public_id}/`);
    return response.data;
});


const eventSlice = createSlice({
    name: 'event',
    initialState: {
        items: [],
        selectedItem: null,
        status: 'idle',
        error: null
    },
    reducers: {
        selectItem: (state, action) => {
            state.selectedItem = state.items.find((item) => item.public_id === action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'succeeded';
                const result = action.payload
                state.items = []
                const transformedEvents = []
                result.forEach(event => {
                    const start = moment(event.start);
                    const end = moment(event.end);
                    const duration = moment.duration(end.diff(start));
                    console.log(duration)
                    if (event.is_recurring && event.recurring_days) {
                        const rruleSet = new RRuleSet();
                        event.recurring_days.forEach(day => {
                            rruleSet.rrule(new RRule({
                                freq: RRule.WEEKLY,
                                interval: event.recurrence_frequency || 1,
                                byweekday: RRule[day],
                                dtstart: new Date(`${event.start}`),
                                until: event.recurrence_end_date ? new Date(event.recurrence_end_date) : null

                            }));
                        });
                        transformedEvents.push({
                            duration: `${duration.hours().toString().padStart(2, '0')}:${duration.minutes().toString().padStart(2, '0')}`,
                            title: event.title,
                            rrule: rruleSet.toString(),
                            description: event.description,
                            file_name: event.file_name,
                            public_id: event.public_id
                        });
                    } else
                        transformedEvents.push({
                            ...event,
                            start: `${event.start}`,
                            end: event.end ? `${event.end}` : null,
                        });
                })
                state.items = transformedEvents
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { selectItem } = eventSlice.actions;
export const eventsSelector = (state) => state.event.items;
export const eventSelector = (state) => state.event.selectedItem;
export const eventStatus = (state) => state.event.status;
export const eventError = (state) => state.event.error;

export default eventSlice.reducer;
