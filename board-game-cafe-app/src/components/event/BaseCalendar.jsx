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
  selectItem,
} from "../../feautures/eventSlice";
import { useEffect, useState } from "react";
import { CalendarEvent } from "../../styles/events";
import EventModal from "./EventModal";
import EventDrawer from "./EventDrawer";

const BaseCalendar = ({ isMobile }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(eventSelector);

  const events = useSelector(eventsSelector);
  const status = useSelector(eventStatus);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEvents());
    }
  }, [status]);

  const handleEventClick = (clickInfo) => {
    dispatch(selectItem(clickInfo.event.extendedProps.public_id));
    setModalVisible(true);
   
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <CalendarEvent>
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
      {selectedItem&&!isMobile?<EventModal visible={modalVisible} onClose={handleCloseModal} />:""}
      {selectedItem&&isMobile?<EventDrawer visible={modalVisible} onClose={handleCloseModal} />:""}

    </CalendarEvent>
  );
};

export default BaseCalendar;
