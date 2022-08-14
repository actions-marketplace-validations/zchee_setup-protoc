import * as core from "@actions/core";
import * as installer from "./installer";

async function run() {
  try {
    let version = core.getInput("version");
    let repoToken = core.getInput("repo-token");
    await installer.getProtoc(version, repoToken);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
