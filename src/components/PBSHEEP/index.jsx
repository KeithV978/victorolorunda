import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Data } from "./data";

// import Box from "@mui/material/Box";
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
// import Experience from "./Preview/Experience";
import Preview from "./Preview";
import { Cell, CellWrapper, ContentWrapper } from "./styles";

export const PBSheep = React.memo(() => {
  const [selectedId, setSelectedId] = React.useState(null);
  const [data, setData] = React.useState(null);

  const handleSelection = (id) => {
    setSelectedId(id);
    setData(Data[id - 1]);
  };

  return (
    <div>
      <ContentWrapper>
        <Stack
          direction="column"
          // spacing={2}
          height="100%"
          width="100%"
          sx={{ position: "relative", gap: { xs: 1, sm: 2 } }}
        >
          <AnimatePresence>
            {selectedId && (
              <motion.div
                // animate={{
                // }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 1000,
                  backgroundColor: "#fff",
                }}
                layoutId={selectedId}
              >
                <Preview
                  layoutId={selectedId}
                  data={data}
                  setSelectedId={setSelectedId}
                />
              </motion.div>
            )}
          </AnimatePresence>
          {/* First Stage */}
          <Stack
            direction="row"
            sx={{ gap: { xs: 1, sm: 2 }, height: "250px", width: "100%" }}
          >
            <div style={{ width: "100%" }}>
              <CellWrapper
                layoutId={1}
                onClick={() => handleSelection(1)}
                whileHover={{ padding: "7px" }}
              >
                {!selectedId && (
                  <Typography
                    component={motion.p}
                    color="white"
                    sx={{
                      position: "absolute",
                      rotate: "270deg",
                      color: "#fff",
                      left: { sm: "-115px", xs: "-100px" },
                      bottom: 85,
                      fontWeight: 700,
                      borderBottom: "1px solid #000",
                      borderColor: "primary.main",
                      lineHeight: ".1em",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "#1a1a1a",
                        padding: "0 10px",
                      }}
                    >
                      Experience
                    </span>
                  </Typography>
                )}
                <Cell>
                  <WorkHistoryIcon color="inherit" fontSize="inherit" />
                </Cell>
              </CellWrapper>
            </div>
            <div style={{ width: "100%" }}>
              <Stack
                direction="column"
                sx={{
                  gap: { xs: 1, sm: 2 },
                  height: "100%",
                }}
              >
                <CellWrapper
                  whileHover={{ padding: "7px" }}
                  layoutId={2}
                  onClick={() => handleSelection(2)}
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
                        borderBottom: "1px solid #000",
                        borderColor: "primary.main",
                        lineHeight: ".1em",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#1a1a1a",
                          padding: "0 10px",
                        }}
                      >
                        Tools
                      </span>
                    </Typography>
                  )}
                  <Cell>
                    <CodeRounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
                <CellWrapper
                  whileHover={{ padding: "7px" }}
                  layoutId={3}
                  onClick={() => handleSelection(3)}
                >
                  {!selectedId && (
                    <Typography
                      color="white"
                      component={motion.p}
                      sx={{
                        position: "absolute",
                        color: "#fff",
                        rotate: "270deg",
                        right: { sm: "-115px", xs: "-100px" },
                        bottom: 30,
                        fontWeight: 700,
                        borderBottom: "1px solid #000",
                        borderColor: "primary.main",
                        lineHeight: ".1em",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#1a1a1a",
                          padding: "0 10px",
                        }}
                      >
                        Bio
                      </span>
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
          <Stack
            direction="row"
            sx={{
              gap: { xs: 1, sm: 2 },
              height: "400px",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <Stack
                direction="column"
                sx={{
                  gap: { xs: 1, sm: 2 },
                  height: "100%",
                }}
              >
                <CellWrapper
                  whileHover={{ padding: "7px" }}
                  layoutId={4}
                  onClick={() => handleSelection(4)}
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
                        left: { xs: "-100px", sm: "-115px" },
                        bottom: 50,
                        fontWeight: 700,
                        borderBottom: "1px solid #000",
                        borderColor: "primary.main",
                        lineHeight: ".1em",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#1a1a1a",
                          padding: "0 10px",
                        }}
                      >
                        Education
                      </span>
                    </Typography>
                  )}
                  <Cell>
                    <SchoolRounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
                <CellWrapper
                  whileHover={{ padding: "7px" }}
                  layoutId={5}
                  onClick={() => handleSelection(5)}
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
                        borderBottom: "1px solid #000",
                        borderColor: "primary.main",
                        lineHeight: ".1em",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#1a1a1a",
                          padding: "0 10px",
                        }}
                      >
                        Skills
                      </span>
                    </Typography>
                  )}
                </CellWrapper>
              </Stack>
            </div>
            <div style={{ width: "100%" }}>
              <Stack
                direction="column"
                sx={{
                  gap: { xs: 1, sm: 2 },
                  height: "100%",
                }}
              >
                <CellWrapper
                  whileHover={{ padding: "7px" }}
                  layoutId={6}
                  onClick={() => handleSelection(6)}
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
                        right: { sm: "-115px", xs: "-100px" },
                        bottom: 40,
                        fontWeight: 700,
                        borderBottom: "1px solid #000",
                        borderColor: "primary.main",
                        lineHeight: ".1em",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#1a1a1a",
                          padding: "0 10px",
                        }}
                      >
                        Projects
                      </span>
                    </Typography>
                  )}
                  <Cell>
                    <WorkRounded color="inherit" fontSize="inherit" />
                  </Cell>
                </CellWrapper>
                <CellWrapper
                  layoutId={7}
                  whileHover={{ padding: "7px" }}
                  onClick={() => handleSelection(7)}
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
                        width: "100%",
                        borderBottom: "1px solid #000",
                        borderColor: "primary.main",
                        lineHeight: ".1em",
                        textAlign: "center",
                        // margin: "10px 0 20px",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor: "#1a1a1a",
                          padding: "0 10px",
                        }}
                      >
                        Hobbies
                      </span>
                    </Typography>
                  )}
                </CellWrapper>
              </Stack>
            </div>
          </Stack>
        </Stack>
      </ContentWrapper>
    </div>
  );
});
