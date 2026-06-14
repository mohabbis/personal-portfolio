export type Point = [number, number, number];

// Orthogonal site flow only: straight runs and 90-degree turns. No diagonal shortcuts.
// Customer path: enter from the far-back gate, queue/pay before the tunnel, wash through, then exit at the sign side.
export const approachRoute: Point[] = [
  [30, 0.16, 22],
  [16, 0.16, 22]
];

export const queueRoute: Point[] = [
  [16, 0.18, 22],
  [16, 0.18, 7]
];

export const washRoute: Point[] = [
  [16, 0.2, 7],
  [16, 0.2, -8]
];

export const vacuumRoute: Point[] = [
  [16, 0.18, -8],
  [8, 0.18, -12],
  [-7, 0.18, -12]
];

export const exitRoute: Point[] = [
  [16, 0.16, -8],
  [30, 0.16, -8]
];

export const quickExitRoute: Point[] = [...approachRoute, ...queueRoute.slice(1), ...washRoute.slice(1), ...exitRoute.slice(1)];
export const fullServiceRoute: Point[] = [...approachRoute, ...queueRoute.slice(1), ...washRoute.slice(1), ...vacuumRoute.slice(1)];

export function isOrthogonalSegment(start: Point, end: Point) {
  const [sx, , sz] = start;
  const [ex, , ez] = end;
  const xChanges = sx !== ex;
  const zChanges = sz !== ez;

  return xChanges !== zChanges;
}

export function isOrthogonalRoute(route: Point[]) {
  return route.slice(0, -1).every((point, index) => isOrthogonalSegment(point, route[index + 1]));
}
