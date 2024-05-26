export interface RouteRead {
  id?: string;
  startTerminalId?: string;
  startTerminalCity?: string;
  startTerminalAddress?: string;

  endTerminalId?: string;
  endTerminalCity?: string;
  endTerminalAddress?: string;

  driverId?: string;
  driverPhone?: string;
  seats?: number;
  start?: string;
  duration?: number;
  price?: number;
}
