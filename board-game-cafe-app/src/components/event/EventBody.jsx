import { useSelector } from "react-redux";
import { BodyModal, EventInfoImg } from "../../styles/events";
import { eventSelector } from "../../feautures/eventSlice";
import { Button } from "antd";

export default function EventBody() {
  const selectedItem = useSelector(eventSelector);
  return (
    <>
      <BodyModal>
        <EventInfoImg
          alt={`board game event ${selectedItem.title}`}
          src={`${process.env.REACT_APP_API_BASE_URL}/file/download/${selectedItem.file_name}`}
        ></EventInfoImg>

        <p>{selectedItem.description}</p>
      </BodyModal>
      <Button size="large" type="primary">
        Reserve!
      </Button>
    </>
  );
}
