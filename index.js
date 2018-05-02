const token = process.env.GITHUB_ACCESS_TOKEN;
const github = require('octonode');

const client = github.client(token);

const ghme = client.me();

ghme.repos((err, repos) => {
    console.log(repos);
});

const ghrepo = client.repo('jtheoof/test-github-api');

ghrepo.commits((err, commits) => {
    debugger;
    console.log(commits);
});
