import styled from "styled-components/native";
import { Label } from "../../atoms/Typography";
import { Icon } from "../../atoms/Icon";
import colors from "../../../theme/colors";

interface NotificationIconProps {
  notifications: number;
}

export const Container = styled.View`
  width: 80px;
  height: 80px;
`;
export const StyledIcon = styled(Icon)`
  ${(notificationIconProps: NotificationIconProps) =>
    notificationIconProps.notifications > 0 &&
    `
        transform: rotate(-20deg);
  `}
`;

export const Counter = styled(Label)`
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 25px;
  min-height: 25px;
  font-size: 14px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  background-color: ${colors.notification};
`;
