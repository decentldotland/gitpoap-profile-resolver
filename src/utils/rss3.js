import axios from "axios";

export async function getEnsFromRss3(eth_address) {
  try {
    const profileConfig = {
      method: "get",
      url: `https://pregod.rss3.dev/v1.1.0/profiles/${eth_address}?network=ethereum`,
      headers: {
        Accept: "application/json",
      },
    };

    const res = (await axios(profileConfig))?.data?.result;
    // filter instead of find incase the wallet owns multiple ENS domains
    const ens = res.filter((element) => element.platform === "ENS");

    return ens ? ens : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
