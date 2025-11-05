import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  let bunVersion = "Not detected (client-side or non-Bun runtime)";

  // Check if the code is running in the Bun runtime environment
  if (typeof Bun !== 'undefined') {
    bunVersion = Bun.version;
  } else (process.versions && process.versions.bun) {
    console.log("Not running with Bun (likely Node.js or Edge)");
    console.log("Node version:", process.versions.node);
  }

  return {
    bunVersion
  };
};