export type Point = [number, number, number];

// Orthogonal site flow only: straight runs and 90-degree turns. No diagonal shortcuts.
// Coordinate space (shared with the model): +x runs east toward the tower/sign, +z runs
// south toward the street. The wash building runs west-to-east; the gold entrance arches
// sit at the west end (x ~ -26) and the tower/sign exit at the east end (x ~ +16).
// Customer path: approach from the west, drive east through the wash building, then exit
// by the tower toward the street (with a branch to the vacuum bays).
export const approachRoute: Point[] = [
  [-40, 0.16, -6],
  [-26, 0.16, -6]
];

export const tunnelRoute: Point[] = [
  [-26, 0.18, -6],
  [10, 0.18, -6]
];

export const washRoute: Point[] = [
  [10, 0.2, -6],
  [16, 0.2, -6]
];

export const exitRoute: Point[] = [
  [16, 0.16, -6],
  [16, 0.16, 20],
  [32, 0.16, 20]
];

export const vacuumRoute: Point[] = [
  [16, 0.18, -6],
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
