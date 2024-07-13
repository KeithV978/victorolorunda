import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PlayIcon from "@mui/icons-material/PlayArrow";
import { useWavesurfer } from "@wavesurfer/react";
import Pause from "@mui/icons-material/Pause";
import { useTheme } from "@mui/material";
// import WaveSurfer from "wavesurfer.js";
// import SkipNext from "@mui/icons-material/SkipNext";

import audio from "../../assets/music/one.mp3";
import { AudioWave, Wrapper } from "./styles";
const { useRef } = React;

// const audioUrl = { file: audio, name: "Falling In Love With You - Cover" };

const formatTime = (seconds) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");

export const Player = () => {
  // const [nowPlaying, setNowPlaying] = useState(audioUrls[urlIndex].file);
  const containerRef = useRef(null);
  const theme = useTheme();

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    url: audio,
    waveColor: "#cfcfcf",
    progressColor: `${[theme.palette.primary.main]}`,
    height: 17,
    barGap: 3,
    barWidth: 1.6,
  });

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <Wrapper>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          padding: "0 1rem",
        }}
      >
        {!isPlaying ? (
          <Typography
            variant="body2"
            color="#222121"
            sx={{
              width: { sm: "max-content", xs: "100%" },
              margin: { sm: "auto", xs: ".3rem" },
              fontWeight: 700,
            }}
          >
            Listen to me sing...
          </Typography>
        ) : (
          <Typography
            variant="body2"
            color="#222121"
            sx={{
              width: "max-content",
              margin: { sm: "auto", xs: ".3rem" },
              fontWeight: 700,
            }}
          >
            Falling In Love With You - {formatTime(currentTime)}
          </Typography>
          // <Typography variant="body2"></Typography>
        )}
      </Box>
      <Stack
        direction="row"
        sx={{
          margin: { sm: ".5rem", xs: "auto" },
        }}
        alignItems="center"
      >
        {isReady && (
          <IconButton
            sx={{
              backgroundColor: "#222121",
              ":hover": {
                backgroundColor: "#222121",
              },
              transition: "all .3s ease",
            }}
            onClick={onPlayPause}
          >
            {isPlaying ? (
              <Pause sx={{ color: "#fff", transition: "all .3s ease" }} />
            ) : (
              <PlayIcon sx={{ color: "#fff", transition: "all .3s ease" }} />
            )}
          </IconButton>
        )}
        {/* Wave Form. */}
        <AudioWave ref={containerRef}></AudioWave>
      </Stack>
    </Wrapper>
  );
};
