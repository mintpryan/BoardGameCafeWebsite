import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import rrulePlugin from "@fullcalendar/rrule";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  eventSelector,
  eventStatus,
  eventsSelector,
  fetchEvents,
} from "../../feautures/eventSlice";
import { useEffect } from "react";

const testEvents = [
  {
    id: "1",
    title: "Meeting with John",
    start: "2024-07-12T10:00:00",
    end: "2024-07-12T11:00:00",
  },
  {
    id: "2",
    title: "Lunch with Sarah",
    start: "2024-07-13T12:00:00",
    end: "2024-07-13T13:00:00",
  },
  {
    id: "3",
    title: "Project Deadline",
    start: "2024-07-15T23:59:59",
  },
  {
    id: "4",
    title: "Conference",
    start: "2024-07-20T09:00:00",
    end: "2024-07-20T17:00:00",
  },
  {
    id: "5",
    title: "Doctor Appointment",
    start: "2024-07-22T14:00:00",
    end: "2024-07-22T15:00:00",
  },
  {
    id: "6",
    title: "Vacation",
    start: "2024-07-25",
    end: "2024-07-30",
    allDay: true,
  },
];
const BaseCalendar = ({ isMobile }) => {
  const plgs = isMobile
    ? [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        rrulePlugin,
        listPlugin,
      ]
    : [dayGridPlugin, timeGridPlugin, interactionPlugin, rrulePlugin];

  const dispatch = useDispatch();

  const events = useSelector(eventsSelector);
  const selectedItem = useSelector(eventSelector);
  const status = useSelector(eventStatus);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEvents());
    }
    console.log(events);
  }, [status, dispatch]);

  const handleEventClick = (clickInfo) => {
    Modal.info({
      title: "Event Details",
      content: (
        <div>
          <p>Title: {clickInfo.event.title}</p>
        </div>
      ),
      onOk() {},
    });
  };
  return (
    <FullCalendar
      timeZone="local"
      plugins={[
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        rrulePlugin,
        listPlugin,
      ]}
      initialView="listWeek"
      events={events}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      height="auto" 
      eventClick={handleEventClick}
    />
  );
};

export default BaseCalendar;
