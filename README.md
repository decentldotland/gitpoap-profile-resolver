<p align="center">
  <a href="https://decent.land">
    <img src="./img/logo25.png" height="124">
  </a>
  <h3 align="center"><code>@decentdotland/gitpoap-profile-resolver</code></h3>
  <p align="center">Github username -> EVM address</p>
</p>

## About
This HTTP API resolves a [GitPOAP](https://gitpoap.io) user's Github and to his/her Ethereum address and returns and returns its profile with more data.

## Build & Run
```console
git pull https://github.com/decentldotland/gitpoap-profile-resolver.git

cd gitpoap-profile-resolver

npm install .

npm start
```  

## API endpoint

- **API URL: https://gitpoap-profile-resolver.herokuapp.com**

1- get user profile via Github username
- `GET /profile/:username/`


#### Response Example

```json
{
  "github_profile": {
    "login": "q9f",
    "id": 58883403,
    "node_id": "MDQ6VXNlcjU4ODgzNDAz",
    "avatar_url": "https://avatars.githubusercontent.com/u/58883403?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/q9f",
    "html_url": "https://github.com/q9f",
    "followers_url": "https://api.github.com/users/q9f/followers",
    "following_url": "https://api.github.com/users/q9f/following{/other_user}",
    ...
  },
  "eth_address": "0xe611a720778a5f6723d6b4866f84828504657181",
  "ens": [
    {
      "address": "0xe611a720778a5f6723d6b4866f84828504657181",
      "network": "ethereum",
      "platform": "ENS",
      "source": "ENS",
      "name": "q9f.eth",
      "handle": "q9f.eth",
      "bio": "",
      "url": "https://dev.to/q9",
      "expire_at": "2025-09-17T14:10:03Z",
      "profile_uri": [
        "eip155:1/erc721:0xd0e7Bc3F1EFc5f098534Bce73589835b8273b9a0/272"
      ],
      "social_uri": ["q9f"]
    }
  ],
  "gitpoaps": [
    {
      "gitPoapId": 6820,
      "gitPoapEventId": 252,
      "poapTokenId": "5437072",
      "poapEventId": 54839,
      "poapEventFancyId": "gitpoap-2022-besu-contributor-2022",
      "name": "GitPOAP: 2022 Besu Contributor",
      "year": 2022,
      "description": "You made at least one contribution to the Besu project in 2022. Your contributions are greatly appreciated!",
      "imageUrl": "https://assets.poap.xyz/gitpoap-2022-besu-contributor-2022-logo-1657743611867.png",
      "repositories": ["hyperledger/besu"],
      "earnedAt": "2022-05-29",
      "mintedAt": "2022-08-03"
    },
    {
      "gitPoapId": 5211,
      "gitPoapEventId": 208,
      "poapTokenId": "5437085",
      "poapEventId": 53604,
      "poapEventFancyId": "gitpoap-2021-lodestar-contributor-2021",
      "name": "GitPOAP: 2021 Lodestar Contributor",
      "year": 2021,
      "description": "You made at least one contribution to the Lodestar project in 2021. Your contributions are greatly appreciated!",
      "imageUrl": "https://assets.poap.xyz/gitpoap-2021-lodestar-contributor-2021-logo-1657053471403.png",
      "repositories": ["ChainSafe/lodestar"],
      "earnedAt": "2021-09-14",
      "mintedAt": "2022-08-03"
    },
    {
      "gitPoapId": 5332,
      "gitPoapEventId": 214,
      "poapTokenId": "5437082",
      "poapEventId": 53738,
      "poapEventFancyId": "gitpoap-2020-prysm-contributor-2020",
      "name": "GitPOAP: 2020 Prysm Contributor",
      "year": 2020,
      "description": "You made at least one contribution to the Prysm project in 2020. Your contributions are greatly appreciated!",
      "imageUrl": "https://assets.poap.xyz/gitpoap-2020-prysm-contributor-2020-logo-1657131689957.png",
      "repositories": [
        "prysmaticlabs/prysm",
        "prysmaticlabs/prysm-web-ui",
        "prysmaticlabs/documentation"
      ],
      "earnedAt": "2020-04-27",
      "mintedAt": "2022-08-03"
    },
    ...
  ]
}

```

## License
This project is licensed under the [MIT License](./LICENSE).
