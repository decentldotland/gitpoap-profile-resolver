import axios from "axios";
import githubUsernameRegex from "github-username-regex";
export async function getGithubProfile(github_handle: string) {
  try {
    const res = (
      await axios.get(`https://api.github.com/users/${github_handle}`)
    )?.data;    
    return res;
  } catch (error) {
    return null;
  }
}

export function isValidGithubHandle(username: string ) {
  return githubUsernameRegex.test(username);
}
