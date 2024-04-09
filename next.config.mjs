/** @type {(string) => import("next").NextConfig} */
export default async phase => {
  const config = {
    env: {
      BUILD_TIMESTAMP: new Date().toISOString(),
    },
  };
  if ("phase-development-server" !== phase) {
    config.output = "export";
  }
  return config;
};
