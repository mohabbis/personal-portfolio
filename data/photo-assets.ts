export const imageAssetBasePath = "/images";

export const futurePhotoAssets = [
  { key: "annArborSunsetBackyard", fileName: "ann-arbor-sunset-backyard.jpeg", label: "Ann Arbor sunset backyard" },
  { key: "rangeRoverNightStreet", fileName: "range-rover-night-street.jpeg", label: "Range Rover night street" },
  { key: "chicagoNightSkyline", fileName: "chicago-night-skyline.jpeg", label: "Chicago night skyline" },
  { key: "annArborHouseSpring", fileName: "ann-arbor-house-spring.jpeg", label: "Ann Arbor house in spring" },
  { key: "moonTreesNight", fileName: "moon-trees-night.jpeg", label: "Moon through trees at night" },
  { key: "roadCloudsMotion", fileName: "road-clouds-motion.jpeg", label: "Road clouds in motion" },
  { key: "audiStreetHouse", fileName: "audi-street-house.jpeg", label: "Audi on residential street" },
  { key: "boatPartyTarp", fileName: "boat-party-tarp.jpeg", label: "Boat party tarp" },
  { key: "annArborSunsetStreet", fileName: "ann-arbor-sunset-street.jpeg", label: "Ann Arbor sunset street" },
  { key: "oneWayRoadSign", fileName: "one-way-road-sign.jpeg", label: "One way road sign" },
  { key: "grassTexture", fileName: "grass-texture.jpeg", label: "Grass texture" },
  { key: "rangeRoverGravel", fileName: "range-rover-gravel.jpeg", label: "Range Rover on gravel" },
  { key: "chicagoTrainField", fileName: "chicago-train-field.jpeg", label: "Chicago train field" },
  { key: "annArborRoadClosed", fileName: "ann-arbor-road-closed.jpeg", label: "Ann Arbor road closed" },
  { key: "greenLightNightRoad", fileName: "green-light-night-road.jpeg", label: "Green light night road" },
  { key: "pinkTreeDriveway", fileName: "pink-tree-driveway.jpeg", label: "Pink tree driveway" },
  { key: "bassetHoundPark", fileName: "basset-hound-park.png", label: "Basset hound at park" },
  { key: "nightWalgreens", fileName: "night-walgreens.jpeg", label: "Night Walgreens" },
  { key: "deckPartyOverhead", fileName: "deck-party-overhead.jpeg", label: "Deck party overhead" },
  { key: "porscheBuilding", fileName: "porsche-building.jpeg", label: "Porsche by building" },
  { key: "shellGasStationGroup", fileName: "shell-gas-station-group.jpeg", label: "Shell gas station group" },
  { key: "deskSetupReference", fileName: "desk-setup-reference.jpeg", label: "Desk setup reference" }
] as const;

export type FuturePhotoAssetKey = (typeof futurePhotoAssets)[number]["key"];

export const photoAssetsByKey = futurePhotoAssets.reduce(
  (assets, asset) => {
    assets[asset.key] = {
      ...asset,
      src: `${imageAssetBasePath}/${asset.fileName}`
    };

    return assets;
  },
  {} as Record<FuturePhotoAssetKey, (typeof futurePhotoAssets)[number] & { src: string }>
);
