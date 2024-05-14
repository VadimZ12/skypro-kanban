import { format } from 'date-fns';

import ru from 'date-fns/locale/ru'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


export function Calendar({ selected, setSelected, disabled }) {


  let footer = <p>Пожалуйста, выберите дату</p>;
  if (selected) {
    footer = <p>Вы выбрали {format(selected, 'PP', { locale: ru })}.</p>;
  }
  return (
    
    <DayPicker
      disabled={disabled}
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}