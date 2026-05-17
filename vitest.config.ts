import path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const staticAssetMock = {
  name: "static-asset-mock",
  transform(_: string, id: string) {
    if (/\.(svg|png|jpg|jpeg|webp|gif)$/.test(id)) {
      return {
        code: `export default { src: ${JSON.stringify(id)}, width: 100, height: 100 }`,
        map: null,
      };
    }
  },
};

export default defineConfig({
  plugins: [react(), staticAssetMock],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
