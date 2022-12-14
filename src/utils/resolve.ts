import { getGithubProfile, isValidGithubHandle } from "./github";
import { poapsOf, getPoapOwnerOf } from "./gitpoap";
import { getEnsFromRss3 } from "./rss3";
import "./setEnv";

export async function getProfile(github_handle: string) {
  try {
    if (!isValidGithubHandle(github_handle)) {
      return { error: "invalid github username syntax" };
    }

    const githubProfile = await getGithubProfile(github_handle);
    if (!githubProfile) {
      return { error: "invalid github username syntax" };
    }

    const userGitPoaps = await poapsOf(github_handle);

    if (userGitPoaps.length === 0) {
      return {
        github_object: githubProfile,
        eth_address: null,
        ens: null,
        gitpoaps: [],
      };
    }

    const ethAddress = (await getPoapOwnerOf(userGitPoaps[0].poapTokenId as string))
      ?.owner;
    const ens = await getEnsFromRss3(ethAddress);

    return {
      github_profile: githubProfile,
      eth_address: ethAddress,
      ens: ens,
      gitpoaps: userGitPoaps,
    };
  } catch (error) {
    return { error: "something went wrong, try again later :-)" };
  }
}
