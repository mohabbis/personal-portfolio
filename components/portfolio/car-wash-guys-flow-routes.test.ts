import { describe, expect, it } from "vitest";

import {
  approachRoute,
  exitRoute,
  fullServiceRoute,
  isOrthogonalRoute,
  quickExitRoute,
  tunnelRoute,
  vacuumRoute,
  washRoute
} from "./car-wash-guys-flow-routes";

const allRoutes = [approachRoute, tunnelRoute, washRoute, vacuumRoute, exitRoute, quickExitRoute, fullServiceRoute];

describe("Car Wash Guys flow routes", () => {
  it("keeps every route orthogonal with no diagonal shortcuts", () => {
    allRoutes.forEach((route) => {
      expect(isOrthogonalRoute(route)).toBe(true);
    });
  });

  it("enters from the rear gate (north) and runs through the tunnel toward the south", () => {
    const entryStart = approachRoute[0];
    const tunnelEntry = tunnelRoute[0];
    const tunnelExit = tunnelRoute[tunnelRoute.length - 1];

    expect(entryStart).toEqual([-22, 0.16, -8]);
    expect(tunnelEntry).toEqual([-22, 0.18, 0]);
    expect(tunnelExit).toEqual([-22, 0.18, 7]);
    expect(entryStart[2]).toBeLessThan(tunnelEntry[2]);
    expect(tunnelEntry[2]).toBeLessThan(tunnelExit[2]);
  });

  it("runs the main wash path from the tunnel exit through to the tower exit side", () => {
    const tunnelExit = tunnelRoute[tunnelRoute.length - 1];
    const washStart = washRoute[0];
    const washEnd = washRoute[washRoute.length - 1];
    const finalExit = exitRoute[exitRoute.length - 1];

    expect(washStart[0]).toEqual(tunnelExit[0]);
    expect(washStart[2]).toEqual(tunnelExit[2]);
    expect(washEnd).toEqual([16, 0.2, 7]);
    expect(finalExit).toEqual([30, 0.16, 22]);
    expect(finalExit[0]).toBeGreaterThan(washEnd[0]);
  });

  it("chains approach, tunnel, and wash legs into the quick exit and full service routes", () => {
    const tunnelExit = tunnelRoute[tunnelRoute.length - 1];
    const washExit = washRoute[washRoute.length - 1];

    expect(quickExitRoute[0]).toEqual(approachRoute[0]);
    expect(quickExitRoute).toContainEqual(tunnelExit);
    expect(quickExitRoute).toContainEqual(washExit);
    expect(fullServiceRoute[0]).toEqual(approachRoute[0]);
    expect(fullServiceRoute).toContainEqual(tunnelExit);
    expect(fullServiceRoute).toContainEqual(washExit);
  });
});
