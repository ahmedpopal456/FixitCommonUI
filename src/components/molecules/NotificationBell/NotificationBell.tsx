import React from "react";
import { Button } from "../../atoms/Button";
import { StyledIcon, Counter, Container } from "./style";
import { NotificationBellProps } from "./NotificationBellModel";

/**
 * The NotificationBell displays the notification count as a badge. It performs
 * a user defined action when pressed. The `notifications` and `onPress` props
 * are required.
 *
 * @param props - The NotificationBell's props
 * @returns A react native custom NotificationBell component
 */
export const NotificationBell: React.FC<NotificationBellProps> = (
  notificationbellProps: NotificationBellProps
): JSX.Element => {
  const notificationCount = notificationbellProps.notifications.toString();

  return (
    <Container {...notificationbellProps}>
      {notificationbellProps.notifications > 0 && (
        <Counter>{notificationCount}</Counter>
      )}
      <Button
        onPress={notificationbellProps.onPress}
        color="transparent"
        padding={0}
      >
        <StyledIcon
          notifications={notificationbellProps.notifications}
          library="FontAwesome5"
          name="bell"
          size={45}
        />
      </Button>
    </Container>
  );
};
