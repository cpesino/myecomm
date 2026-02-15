import "dotenv/config"; // automatically loads .env.local
import { exec } from "child_process";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const apiPort = process.env.API_PORT || 8080;

console.log(`Starting WireMock on port ${apiPort}...`);

// Start Docker WireMock automatically
const docker = exec("docker-compose up", { cwd: __dirname });

docker.stdout.on("data", (data) => console.log(data.toString()));
docker.stderr.on("data", (data) => console.error(data.toString()));
