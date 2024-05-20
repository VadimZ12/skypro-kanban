import "react-day-picker/dist/style.css";
import {
  CalendarDateStyled,
  CalendarText,
  CalendarTextDate,
} from "./Calendar.styled";
import dateFormat from "../../lib/dateFormat";
import { ru } from "date-fns/locale";

export default function Calendar({
  selectedDate,
  setSelectedDate,
  selectedDateBrowse,
}) {
  let footer = <CalendarText>Выберите срок исполнения</CalendarText>;
  if (selectedDate) {
    footer = (
      <>
        <CalendarText>Срок исполнения: </CalendarText>
        <CalendarTextDate>{dateFormat(selectedDate)}.</CalendarTextDate>
      </>
    );
  }

  if (selectedDateBrowse) {
    footer = (
      <>
        <CalendarText>Срок исполнения: </CalendarText>
        <CalendarTextDate>{dateFormat(selectedDateBrowse)}.</CalendarTextDate>
      </>
    );
  }
  return (
    <CalendarDateStyled
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      footer={footer}
      locale={ru}
    />
  );
}
