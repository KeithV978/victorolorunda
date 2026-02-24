import * as React from "react";
import {
  GitScreen,
  Wrapper,
  // ScreenHeaderRow,
  ScreenHeader,
  Table,
  // TableBody,
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
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const Github = React.memo(() => {
  const [loading, setLoading] = React.useState(true);
  const [repos, setRepos] = React.useState([]);

  const fetchRepos = async () => {
    setLoading(true);

    const data = await GithubService();
    if (data === undefined || data?.length === 0) {
      setLoading(false);
      return;
    }
    setRepos(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchRepos();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <Wrapper as={MotionBox} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <MotionBox sx={{ width: "100%" }} variants={itemVariants}>
        <Typography
          color="white"
          sx={{
            fontSize: { sm: "20px", xs: "1rem" },
            margin: { sm: "0 0 .7rem 4rem", xs: ".5rem 0" },
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(135deg, var(--primary) 20%, var(--secondary) 80%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.5px",
          }}
        >
          <GitHub
            color="inherit"
            fontSize="inherit"
            sx={{
              marginRight: ".5rem",
              background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          />
          Latest GitHub Commits
        </Typography>
        <GitScreen as={motion.div} variants={itemVariants}>
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
                  <TableHeaderCell sx={{ width: "8%" }}>#</TableHeaderCell>
                  <TableHeaderCell sx={{ width: "50%" }}>
                    Repository
                  </TableHeaderCell>
                  <TableHeaderCell sx={{ width: "42%", border: "none" }}>
                    Updated
                  </TableHeaderCell> 
              </ScreenHeader> 
                {repos?.length > 0 &&
                  repos?.map((repo, index) => (
                    <a href={repo.commitUrl} key={index} style={{ textDecoration: "none" }}>
                      <TableRow
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <TableCell sx={{ fontWeight: 700, color: "var(--primary)" }}>
                          {String(index + 1).padStart(2, "0")}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 600, color: "var(--primary)" }}>
                          {repo.repoName}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.9rem", color: "rgba(207, 207, 207, 0.8)" }}>
                          {formatDate(repo.commitDate)}
                        </TableCell>
                      </TableRow>
                    </a>
                  ))} 
            </Table>
          )}
        </GitScreen>
      </MotionBox>
    </Wrapper>
  );
});
