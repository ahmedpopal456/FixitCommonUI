export interface NotificationBellProps {
  /** Callback function to be called when pressed */
  onPress(): void;
  /** Number of notifications to display in the red bubble */
  notifications: number;
  testID?: string;
}
