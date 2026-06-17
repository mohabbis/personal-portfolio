export type Point = [number, number, number];

// Orthogonal site flow only: straight runs and 90-degree turns. No diagonal shortcuts.
// Coordinate space (shared with the model): +x runs east toward the tower/sign, +z runs
// south toward the street. The wash building runs west-to-east; the gold entrance arches
// sit at the west end (x ~ -26) and the tower/sign exit at the east end (x ~ +16).
// Customer path: approach from the west, drive east through the wash building, then exit
// by the tower toward the street (with a branch to the vacuum bays).
//
// z = -4.5 (not -6): the imported GLB's tunnel has a solid full-height wall spanning
// roughly z -12.9 to -7.3, with the open drive lane running from about z -7.3 to -1.6.
// -6 sat only ~1.3 units off that wall, which read as cars clipping/grazing it as they
// drove through. -4.5 centers the lane in the open span instead.
export const approachRoute: Point[] = [
  [-40, 0.16, -4.5],
  [-26, 0.16, -4.5]
];

export const tunnelRoute: Point[] = [
  [-26, 0.18, -4.5],
  [10, 0.18, -4.5]
];

export const washRoute: Point[] = [
  [10, 0.2, -4.5],
  [16, 0.2, -4.5]
];

export const exitRoute: Point[] = [
  [16, 0.16, -4.5],
  [32, 0.16, -4.5]
];

export const vacuumRoute: Point[] = [
  [16, 0.18, -4.5],
  [16, 0.18, 7],
  [-12, 0.18, 7]
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
