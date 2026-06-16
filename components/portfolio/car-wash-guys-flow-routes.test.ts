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

  it("enters at the west arch end and travels east through the building to the tower", () => {
    const archEntrance = approachRoute[0];
    const tunnelEntry = tunnelRoute[0];
    const tunnelExit = tunnelRoute[tunnelRoute.length - 1];

    // Arch entrance is further west (more negative X) than the tunnel exit
    expect(archEntrance[0]).toBeLessThan(tunnelEntry[0]);
    expect(tunnelEntry[0]).toBeLessThan(tunnelExit[0]);
    // All at the same Z — the building runs east-west
    expect(archEntrance[2]).toEqual(tunnelEntry[2]);
    expect(tunnelEntry[2]).toEqual(tunnelExit[2]);
  });

  it("exits east of the tunnel via the tower side", () => {
    const tunnelExit = tunnelRoute[tunnelRoute.length - 1];
    const washEnd = washRoute[washRoute.length - 1];
    const finalExit = exitRoute[exitRoute.length - 1];

    // wash end is east of tunnel exit, exit continues east past the tower
    expect(washEnd[0]).toBeGreaterThan(tunnelExit[0]);
    expect(finalExit[0]).toBeGreaterThan(washEnd[0]);
    expect(finalExit).toEqual([32, 0.16, -6]);
  });

  it("chains approach, tunnel, and wash into composed routes starting at the arch", () => {
    const archStart = approachRoute[0];
    const tunnelEnd = tunnelRoute[tunnelRoute.length - 1];

    expect(quickExitRoute[0]).toEqual(archStart);
    expect(quickExitRoute).toContainEqual(tunnelEnd);
    expect(fullServiceRoute[0]).toEqual(archStart);
    expect(fullServiceRoute).toContainEqual(tunnelEnd);
  });
});
