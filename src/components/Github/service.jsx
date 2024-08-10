import { Octokit } from "@octokit/rest";

// const GithubService: React.FC = () => {
const GithubService = async () => {
  const octokit = new Octokit({
    auth: process.env.GIT_KEY,
  });
  try {
    const { data: repos } = await octokit.repos.listForUser({
      username: "KeithV978",
      per_page: 10,
    });

    const repoCommits = await Promise.all(
      repos.map(async (repo) => {
        const { data: commits } = await octokit.repos.listCommits({
          owner: "KeithV978",
          repo: repo.name,
          per_page: 1,
        });
        return {
          repoName: repo.name,
          commitDate: commits[0].commit.committer.date,
          commitUrl: commits[0].html_url,
        };
      })
    );
    return repoCommits;
  } catch (error) {
    console.log(error);
    return;
  }
};

export default GithubService;
