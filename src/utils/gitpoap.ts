import axios from "axios";
import { poapsClaimType } from "./types";

export async function poapsOf(github_handle: string) {
  try {
    const poapsClaimed: poapsClaimType = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/github/user/${github_handle}/gitpoaps?status=claimed`
      )
    )?.data;
    const poapsUnclaimed: poapsClaimType = (
      await axios.get(
        `https://public-api.gitpoap.io/v1/github/user/${github_handle}/gitpoaps?status=unclaimed`
      )
    )?.data;
    return poapsClaimed.concat(poapsUnclaimed);
  } catch (error) {
    return [];
  }
}

export async function getPoapOwnerOf(poap_id: string) {
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
