import { format } from "date-fns";
import { ru } from "date-fns/locale";

export default function dateFormat(date) {
  return format(new Date(date), "dd.MM.yyyy", ru);
}
