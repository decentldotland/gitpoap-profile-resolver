import axios from "axios";

export async function poapsOf(github_handle) {
  try {
    const poapsClaimed = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/github/user/${github_handle}/gitpoaps?status=claimed`
      )
    )?.data;
    const poapsUnclaimed = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/github/user/${github_handle}/gitpoaps?status=unclaimed`
      )
    )?.data;
    return poapsClaimed.concat(poapsUnclaimed);
  } catch (error) {
    return [];
  }
}

export async function getPoapOwnerOf(poap_id) {
  try {
    // "test" is used on https://documentation.poap.tech/reference/postactionsclaim-delivery-v2
    const API_KEY = process.env.POAP_API_KEY || "test";
    const res = await axios.get(`https://api.poap.tech/token/${poap_id}`, {
      headers: { "Content-Type": "application/json", "X-API-Key": API_KEY },
    });
    return res?.data;
  } catch (error) {
    return null;
  }
}
