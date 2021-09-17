const repoService = async (user) => {
  const url = `https://api.github.com/users/${user}/repos`;
  const response = await fetch(url);
  const repos = await response.json();
  return repos;
};

export default repoService;
