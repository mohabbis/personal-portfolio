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

describe("Car Wash Guys flow routes", () => {
  it("keeps every route orthogonal with no diagonal shortcuts", () => {
    allRoutes.forEach((route) => {
      expect(isOrthogonalRoute(route)).toBe(true);
    });
  });

  it("starts cars at the tunnel-entry side, not the tower exit side", () => {
    const entryStart = approachRoute[0];
    const tunnelEntry = washRoute[0];
    const tunnelExit = washRoute[washRoute.length - 1];

    expect(entryStart[0]).toBeLessThan(tunnelEntry[0]);
    expect(tunnelEntry[0]).toBeLessThan(tunnelExit[0]);
    expect(entryStart).not.toEqual(tunnelExit);
  });

  it("runs the main wash path from entry side through to tower exit side", () => {
    const tunnelEntry = washRoute[0];
    const tunnelExit = washRoute[washRoute.length - 1];
    const finalExit = exitRoute[exitRoute.length - 1];

    expect(tunnelEntry).toEqual([-22, 0.2, 7]);
    expect(tunnelExit).toEqual([16, 0.2, 7]);
    expect(finalExit[0]).toBeGreaterThan(tunnelExit[0]);
  });

  it("keeps the pay and queue step before the wash tunnel", () => {
    expect(quickExitRoute[0]).toEqual(approachRoute[0]);
    expect(quickExitRoute).toContainEqual(queueRoute[queueRoute.length - 1]);
    expect(quickExitRoute).toContainEqual(washRoute[0]);
    expect(quickExitRoute).toContainEqual(washRoute[washRoute.length - 1]);
  });
});
