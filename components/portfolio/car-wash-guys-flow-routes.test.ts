import { describe, expect, it } from "vitest";

import {
  approachRoute,
  exitRoute,
  fullServiceRoute,
  isOrthogonalRoute,
  queueRoute,
  quickExitRoute,
  vacuumRoute,
  washRoute
} from "./car-wash-guys-flow-routes";

const allRoutes = [approachRoute, queueRoute, washRoute, vacuumRoute, exitRoute, quickExitRoute, fullServiceRoute];

const horizontalPosition = ([x, , z]: [number, number, number]) => [x, z];

describe("Car Wash Guys flow routes", () => {
  it("keeps every route orthogonal with no diagonal shortcuts", () => {
    allRoutes.forEach((route) => {
      expect(isOrthogonalRoute(route)).toBe(true);
    });
  });

  it("starts cars at the left tunnel-entrance side, not the tower exit side", () => {
    const entryStart = approachRoute[0];
    const tunnelEntry = washRoute[0];
    const tunnelExit = washRoute[washRoute.length - 1];

    expect(entryStart).toEqual([-30, 0.16, 22]);
    expect(tunnelEntry).toEqual([-22, 0.2, 7]);
    expect(entryStart[0]).toBeLessThan(tunnelExit[0]);
    expect(entryStart).not.toEqual(tunnelExit);
  });

  it("runs the main wash path from left entrance through to the tower exit side", () => {
    const tunnelEntry = washRoute[0];
    const tunnelExit = washRoute[washRoute.length - 1];
    const finalExit = exitRoute[exitRoute.length - 1];

    expect(tunnelEntry).toEqual([-22, 0.2, 7]);
    expect(tunnelExit).toEqual([16, 0.2, 7]);
    expect(finalExit).toEqual([30, 0.16, 22]);
    expect(finalExit[0]).toBeGreaterThan(tunnelExit[0]);
  });

  it("keeps the pay and queue step horizontally aligned before the wash tunnel", () => {
    const queueEnd = queueRoute[queueRoute.length - 1];
    const tunnelEntry = washRoute[0];
    const tunnelExit = washRoute[washRoute.length - 1];

    expect(quickExitRoute[0]).toEqual(approachRoute[0]);
    expect(quickExitRoute).toContainEqual(queueEnd);
    expect(horizontalPosition(queueEnd)).toEqual(horizontalPosition(tunnelEntry));
    expect(quickExitRoute).toContainEqual(tunnelExit);
  });
});
