import * as React from "react";
import {
  GitScreen,
  Wrapper,
  ScreenHeaderRow,
  ScreenHeader,
  Table,
  TableBody,
  TableHeaderCell,
  TableRow,
  TableCell,
} from "./styles";
import GitHub from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GithubService from "./service";
import CircularProgress from "@mui/material/CircularProgress";
import { Replay } from "@mui/icons-material";

export const Github = React.memo(() => {
  const [loading, setLoading] = React.useState(true);
  const [repos, setRepos] = React.useState([]);

  const fetchRepos = async () => {
    setLoading(true);

    const data = await GithubService();
    if (data === undefined) {
      setLoading(false);
      return;
    }
    setRepos(data);
  };

  React.useEffect(() => {
    fetchRepos();
  }, []);

  // console.log(repos);
  return (
    <Wrapper>
      <Box sx={{ width: "100%" }}>
        <Typography
          color="white"
          sx={{
            // fontSize: "",
            fontSize: { sm: "20px", xs: "1rem" },
            margin: { sm: "0 0 .7rem 4rem", xs: ".5rem 0" },
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
          }}
        >
          <GitHub
            color="inherit"
            fontSize="inherit"
            sx={{
              marginRight: ".5rem",
            }}
          />
          My Recent Github Commits
        </Typography>
        <GitScreen>
          {repos?.length === 0 ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {loading ? (
                <CircularProgress color="primary" />
              ) : (
                <Stack direction="column">
                  <Replay
                    sx={{ fontSize: "2rem", margin: "auto", cursor: "pointer" }}
                    color="primary"
                    onClick={() => fetchRepos()}
                  />
                  <Typography margin="auto">Reload.</Typography>
                  <Typography margin="auto">Connection error.</Typography>
                </Stack>
              )}
            </Box>
          ) : (
            <Table>
              <ScreenHeader>
                <ScreenHeaderRow>
                  <TableHeaderCell sx={{ width: "10%" }}>#</TableHeaderCell>
                  <TableHeaderCell sx={{ width: "60%" }}>
                    Repository
                  </TableHeaderCell>
                  <TableHeaderCell sx={{ width: "30%", border: "none" }}>
                    Timestamp
                  </TableHeaderCell>
                </ScreenHeaderRow>
              </ScreenHeader>
              <TableBody>
                {repos?.length === 0 &&
                  repos?.map((repo, index) => (
                    <a href={repo} key={index}>
                      <TableRow>
                        <TableCell>{index}</TableCell>
                        <TableCell>{repo.repoName}</TableCell>
                        <TableCell>{repo.commitDate}</TableCell>
                      </TableRow>
                    </a>
                  ))}
              </TableBody>
            </Table>
          )}
        </GitScreen>
      </Box>
    </Wrapper>
  );
});
