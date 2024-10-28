import { readFileSync } from "fs";

const snarkjs = require("snarkjs");

async function main() {
  try {
    const inputJson = JSON.parse(readFileSync("./inputs.json", "utf8"));

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      inputJson,
      "./IdentityAuth.wasm",
      "./IdentityAuth.zkey"
    );

    console.log(JSON.stringify({ proof, publicSignals }, null, 2));

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
