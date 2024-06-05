import styled from "styled-components";
import { theme } from "./styles/Theme";

export const NotificationDot = styled.span`
  position: absolute;
  display: inline-block;
  width: 9px;
  height: 9px;
  background-color: ${theme.colors.notifications};
  border-radius: 50%;
`