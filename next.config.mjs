import _ from "lodash";
import { exec } from "child_process";

/** @type {(string) => import("next").NextConfig} */
export default async phase => {
  const config = {
    env: {
      BUILD_SOURCE: await new Promise((resolve, reject) => {
        exec("git describe --abbrev=11 --always --dirty --first-parent --long --tags",
          (err, stdout) => {
            if (err) {
              resolve("unknown");
            }
            resolve(_.trim(stdout));
          });
      }),
      BUILD_TIMESTAMP: new Date().toISOString(),
    },
  };
  if ("phase-development-server" !== phase) {
    config.output = "export";
  }
  return config;
};
