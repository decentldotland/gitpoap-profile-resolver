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
    "gists_url": "https://api.github.com/users/q9f/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/q9f/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/q9f/subscriptions",
    "organizations_url": "https://api.github.com/users/q9f/orgs",
    "repos_url": "https://api.github.com/users/q9f/repos",
    "events_url": "https://api.github.com/users/q9f/events{/privacy}",
    "received_events_url": "https://api.github.com/users/q9f/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Afri³",
    "company": "@ChainSafe ",
    "blog": "https://dev.to/q9",
    "location": "Berlin",
    "email": null,
    "hireable": true,
    "bio": "libre software and disrupting tech",
    "twitter_username": null,
    "public_repos": 63,
    "public_gists": 4,
    "followers": 172,
    "following": 1,
    "created_at": "2019-12-14T14:19:43Z",
    "updated_at": "2022-08-25T10:45:38Z"
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
  ]
}
```

## License
This project is licensed under the [MIT License](./LICENSE).