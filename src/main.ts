import * as core from "@actions/core";
import * as installer from "./installer";

async function run() {
  try {
    let version = core.getInput("version");
    let repoToken = core.getInput("repo-token");
    await installer.getProtoc(version, repoToken);
  } catch (error) {
    let message = 'Unknown error!';
    if (error instanceof Error) {
      message = error.message;
    }
    if (typeof error === 'string') {
      message = error;
    }
    core.setFailed(message);
  }
}

run();
