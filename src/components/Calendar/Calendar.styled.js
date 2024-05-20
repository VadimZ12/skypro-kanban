import styled from "styled-components";
import { SubTitle } from "../../styled/common/Common.styled";
import { DayPicker } from "react-day-picker";

export const CalendarStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-content: flex-start;
`;

export const TitleDate = styled(SubTitle)`
  padding-left: 17px;
`;

export const CalendarText = styled.span`
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  color: #94a6be;
`;

export const CalendarTextDate = styled(CalendarText)`
  color: #000000;
`;

export const CalendarDateStyled = styled(DayPicker)`
  width: 100%;
  font-family: "Roboto";
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.14em;
  color: #94a6be;
  --rdp-cell-size: 30px;
  .rdp-caption_label {
    text-transform: capitalize;
  }
`;
