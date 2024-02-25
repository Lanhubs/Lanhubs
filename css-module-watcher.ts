import { Plugin } from "vite";
 function cssModule (): Plugin  {
  return {
    name: "css-module-types",
    apply: "serve",
    async configureServer() {},
    async handleHotUpdate({ server: { config }, file }) {},
  };
};

export default cssModule