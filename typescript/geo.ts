interface Coords {
  latitude: number;
  longitude: number;
}

interface Position {
  coords: Coords;
}

interface Error {
  code: number;
  msg: string;
}

interface SuccessFn {
  (position: Position): void;
}

interface ErrorFn {
  (error: Error): void;
}

interface Options {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

interface IgetCurrentPosition {
  (success: SuccessFn, error?: ErrorFn, options?: Options): void;
}

interface IwatchPosition {
  (success: SuccessFn, error?: ErrorFn, options?: Options): number;
}

interface IGeoLocation {
  getCurrentPosition: IgetCurrentPosition;
  watchPosition: IwatchPosition;
  clearWatch: (watchId: number) => void;
}

class GeoLocation implements IGeoLocation {
  getCurrentPosition(success: SuccessFn, error?: ErrorFn, options?: Options) {}

  watchPosition(success: SuccessFn, error?: ErrorFn, options?: Options) {
    return 1;
  }

  clearWatch(watchId: number) {}
}
