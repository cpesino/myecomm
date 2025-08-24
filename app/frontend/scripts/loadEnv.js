const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

// Parse --runtimeEnv=local / --runtimeEnv=prod
const runtimeEnvArg = process.argv.find((arg) =>
  arg.startsWith("--runtimeEnv=")
);
const runtimeEnv = runtimeEnvArg ? runtimeEnvArg.split("=")[1] : "prod";

const envFile = runtimeEnv === "local" ? ".env.local" : ".env.prod";
const envPath = path.resolve(process.cwd(), envFile);

if (fs.existsSync(envPath)) {
  console.log(`Loading environment: ${envFile}`);
  dotenv.config({ path: envPath });
} else {
  console.warn(`Env file ${envFile} not found!`);
}
