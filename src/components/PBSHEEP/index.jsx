import * as React from "react";
import { styled } from "@mui/material";

import Box from "@mui/material/Box";
import { AnimatePresence, motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import WorkHistoryIcon from "@mui/icons-material/WorkHistoryRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import Person4Rounded from "@mui/icons-material/PersonRounded";

// import InterestsRounded from "@mui/icons-material/InterestsRounded";
import GroupWorkRounded from "@mui/icons-material/GroupWorkRounded";
import MusicNoteRounded from "@mui/icons-material/MusicNoteRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import WorkRounded from "@mui/icons-material/WorkRounded";
import PreviewContent from "./PreviewContent";

const CellWrapper = styled(motion.div)(() => ({
  height: "100%",
  width: "100%",
  cursor: "pointer",
  position: "relative",
}));

const Cell = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#222222",
  fontSize: "5rem",
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all ease .3s .2s",
  "&:hover": {
    backgroundColor: `${[theme.palette.primary.main]}`,
    color: "#fff",
  },
}));

export const PBSheep = () => {
  const [selectedId, setSelectedId] = React.useState(null);

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          maxWidth: "400px",
          width: "100%",
          minHeight: { sm: "750px", xs: "600px" },
          marginTop: "5rem",
          // border: "1px solid grey",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          height="100%"
          width="100%"
          sx={{ position: "relative" }}
        >
          <AnimatePresence>
            {selectedId && (
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  // right: 0,
                  // bottom: 0,
                  transform: "translate(-50%,-50%)",
                  width: "100%",
                  height: "100%",
                  margin: "3rem",
                  zIndex: 10000,
                }}
              >
                <motion.div
                  // animate={{
                  // }}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#fff",
                  }}
                  layoutId={selectedId}
                >
                  <PreviewContent
                    layoutId={selectedId}
                    close={() => setSelectedId(null)}
                  />
                </motion.div>
              </Box>
            )}
          </AnimatePresence>
          {/* First Stage */}
          <Stack direction="row" spacing={2} height="250px" width="100%">
            <div style={{ width: "100%" }}>
              <CellWrapper
                layoutId={1}
                onClick={() => setSelectedId(1)}
                whileHover={{ scale: 0.9 }}
              >
                {!selectedId && (
                  <Typography
                    component={motion.p}
                    color="white"
                    sx={{
                      position: "absolute",
                      rotate: "270deg",
                      color: "#fff",
                      left: "-60px",
                      bottom: 30,
                      fontWeight: 700,
                    }}
                  >
                    Experience
                  </Typography>
                )}
                <Cell>
                  <WorkHistoryIcon color="inherit" fontSize="inherit" />
                </Cell>
              </CellWrapper>
            </div>
            <div style={{ width: "100%" }}>
              <Stack direction="column" spacing={2} height="100%">
                <CellWrapper
                  whileHover={{ scale: 0.9 }}
                  layoutId={2}
                  onClick={() => setSelectedId(2)}
                >
                  {!selectedId && (
                    <Typography
                      color="white"
                      component={motion.p}
                      sx={{
                        position: "absolute",
                        color: "#fff",
                        top: "-25px",
                        left: 0,
                        fontWeight: 700,
                      }}
                    >
                      Tools
                    </Typography>
                  )}
                  <Cell>
                    <CodeRounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
                <CellWrapper
                  whileHover={{ scale: 0.9 }}
                  layoutId={3}
                  onClick={() => setSelectedId(3)}
                >
                  {!selectedId && (
                    <Typography
                      color="white"
                      component={motion.p}
                      sx={{
                        position: "absolute",
                        color: "#fff",
                        rotate: "270deg",
                        right: "-30px",
                        bottom: 0,
                        fontWeight: 700,
                      }}
                    >
                      Bio
                    </Typography>
                  )}
                  <Cell>
                    <Person4Rounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
              </Stack>
            </div>
          </Stack>

          {/* Second stage */}
          <Stack direction="row" spacing={2} height="400px" width="100%">
            <div style={{ width: "100%" }}>
              <Stack direction="column" spacing={2} height="100%">
                <CellWrapper
                  whileHover={{ scale: 0.9 }}
                  layoutId={4}
                  onClick={() => setSelectedId(4)}
                  sx={{ height: "65% !important" }}
                >
                  {!selectedId && (
                    <Typography
                      component={motion.p}
                      color="white"
                      sx={{
                        position: "absolute",
                        rotate: "270deg",
                        color: "#fff",
                        left: "-60px",
                        bottom: 30,
                        fontWeight: 700,
                      }}
                    >
                      Education
                    </Typography>
                  )}
                  <Cell>
                    <SchoolRounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
                <CellWrapper
                  whileHover={{ scale: 0.9 }}
                  layoutId={5}
                  onClick={() => setSelectedId(5)}
                  sx={{ height: "35% !important" }}
                >
                  <Cell>
                    <GroupWorkRounded color="inherit" fontSize="inherit" />
                    {/* < color="inherit" fontSize="inherit" /> */}
                  </Cell>
                  {!selectedId && (
                    <Typography
                      color="white"
                      component={motion.p}
                      sx={{
                        position: "absolute",
                        color: "#fff",
                        bottom: "-25px",
                        left: 0,
                        fontWeight: 700,
                      }}
                    >
                      Skills
                    </Typography>
                  )}
                </CellWrapper>
              </Stack>
            </div>
            <div style={{ width: "100%" }}>
              <Stack direction="column" spacing={2} height="100%">
                <CellWrapper
                  whileHover={{ scale: 0.9 }}
                  layoutId={6}
                  onClick={() => setSelectedId(6)}
                  sx={{ height: "35% !important" }}
                >
                  {!selectedId && (
                    <Typography
                      color="white"
                      component={motion.p}
                      sx={{
                        position: "absolute",
                        color: "#fff",
                        rotate: "270deg",
                        right: "-50px",
                        bottom: 20,
                        fontWeight: 700,
                      }}
                    >
                      Projects
                    </Typography>
                  )}
                  <Cell>
                    <WorkRounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
                <CellWrapper
                  layoutId={7}
                  whileHover={{ scale: 0.9 }}
                  onClick={() => setSelectedId(7)}
                  sx={{ height: "65% !important" }}
                >
                  <Cell>
                    {/* <InterestsRounded color="inherit" fontSize="inherit" /> */}
                    <MusicNoteRounded color="inherit" fontSize="inherit" />
                  </Cell>
                  {!selectedId && (
                    <Typography
                      color="white"
                      component={motion.p}
                      sx={{
                        position: "absolute",
                        color: "#fff",
                        bottom: "-25px",
                        left: 0,
                        fontWeight: 700,
                      }}
                    >
                      Hobbies
                    </Typography>
                  )}
                </CellWrapper>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};
