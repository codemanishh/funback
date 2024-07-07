require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "codemanishh",
    "id": 75930177,
    "node_id": "MDQ6VXNlcjc1OTMwMTc3",
    "avatar_url": "https://avatars.githubusercontent.com/u/75930177?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/codemanishh",
    "html_url": "https://github.com/codemanishh",
    "followers_url": "https://api.github.com/users/codemanishh/followers",
    "following_url": "https://api.github.com/users/codemanishh/following{/other_user}",
    "gists_url": "https://api.github.com/users/codemanishh/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/codemanishh/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/codemanishh/subscriptions",
    "organizations_url": "https://api.github.com/users/codemanishh/orgs",
    "repos_url": "https://api.github.com/users/codemanishh/repos",
    "events_url": "https://api.github.com/users/codemanishh/events{/privacy}",
    "received_events_url": "https://api.github.com/users/codemanishh/received_events",
    "type": "User",
    "site_admin": false,
    "name": "MANISH KUMAR",
    "company": null,
    "blog": "",
    "location": "Bangalore",
    "email": null,
    "hireable": null,
    "bio": "3yr STUDENT DSATM Bangalore",
    "twitter_username": "language__c",
    "public_repos": 36,
    "public_gists": 1,
    "followers": 12,
    "following": 31,
    "created_at": "2020-12-13T09:24:19Z",
    "updated_at": "2024-07-04T08:34:35Z"
}

app.get('/', (req, res) => {
    res.send('Hello singhh')
})
app.get('/codemanishh', (req, res) => {
    res.send('Hello mansih jiii')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})