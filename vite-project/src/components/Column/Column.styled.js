import { styled } from "styled-components";
import { breakpoints } from "../../lib/breakpoints";

export const CardsColumn = styled.div`
 width: 100%;
  display: block;
  position: relative;
`;

export const ColumnTitle = styled.div`
 padding: 0 10px;
  margin: 15px 0;`;

export const ColumnP = styled.p`
padding: 0 10px;
  margin: 15px 0;
color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;`;

  export const MainColumn = styled.div`
   width: 20%;
  margin: 0 auto;
  display: block;
  @media(max-width:${breakpoints.xl}px) { 
    width: 100%;
    margin: 0 auto;
    display: block;
  }`