import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  let bunVersion = "Not detected (client-side or non-Bun runtime)";

  // Check if the code is running in the Bun runtime environment
  if (typeof Bun !== 'undefined') {
    bunVersion = Bun.version;
  } else if (process.versions && process.versions.bun) {
    bunVersion = process.versions.bun;
  }
console.log("Bun version:", bunVersion);
  return {
    bunVersion
  };
};