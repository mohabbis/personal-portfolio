export type Point = [number, number, number];

// Orthogonal site flow only: straight runs and 90-degree turns. No diagonal shortcuts.
// Customer path: enter from the rear gate (north), pass straight through the wash tunnel
// heading south, then run east past the vacuum bays to exit by the tower/sign.
export const approachRoute: Point[] = [
  [-22, 0.16, -8],
  [-22, 0.16, 0]
];

export const tunnelRoute: Point[] = [
  [-22, 0.18, 0],
  [-22, 0.18, 7]
];

export const washRoute: Point[] = [
  [-22, 0.2, 7],
  [16, 0.2, 7]
];

export const vacuumRoute: Point[] = [
  [16, 0.18, 7],
  [16, 0.18, -12],
  [-7, 0.18, -12]
];

export const exitRoute: Point[] = [
  [16, 0.16, 7],
  [16, 0.16, 22],
  [30, 0.16, 22]
];

export const quickExitRoute: Point[] = [...approachRoute, ...tunnelRoute.slice(1), ...washRoute.slice(1), ...exitRoute.slice(1)];
export const fullServiceRoute: Point[] = [...approachRoute, ...tunnelRoute.slice(1), ...washRoute.slice(1), ...vacuumRoute.slice(1)];

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
