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
      sort: "updated",
      direction: "desc",
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
          commitMessage: commits[0].commit.message,
          commitDate: commits[0].commit.committer.date,
          commitUrl: commits[0].html_url,
          author: commits[0].commit.author.name,
        };
      })
    );
    
    // Sort by commit date, most recent first
    return repoCommits.sort((a, b) => new Date(b.commitDate) - new Date(a.commitDate));
  } catch (error) {
    console.log(error);
    return;
  }
};

export default GithubService;
