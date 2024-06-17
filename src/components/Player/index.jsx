import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PlayIcon from "@mui/icons-material/PlayArrow";
import { useWavesurfer } from "@wavesurfer/react";
import Pause from "@mui/icons-material/Pause";
import { styled, useTheme } from "@mui/material";
// import WaveSurfer from "wavesurfer.js";
import SkipNext from "@mui/icons-material/SkipNext";

import audio from "../../assets/music/one.mp3";
import audio2 from "../../assets/music/two.mp3";
const { useRef, useState } = React;

const audioUrls = [
  { file: audio, name: "Falling In Love With You - Cover" },
  { file: audio2, name: "Fly Me To The Moon - Cover" },
];

const Wrapper = styled(Box)(() => ({
  width: "100%",
  padding: ".5rem",
  borderRadius: "25px",
  backgroundColor: "#fff",
  marginBottom: "2rem",
  boxShadow: "-17px 20px 28px 3px #000",
}));

const AudioWave = styled(Box)(() => ({
  width: "100%",
  minHeight: "40px",
  padding: ".7rem",
  borderRadius: "25px",
  backgroundColor: "#222121",
  marginLeft: ".5rem",
  transition: "all ease .3s",
}));

const formatTime = (seconds) =>
  [seconds / 60, seconds % 60]
    .map((v) => `0${Math.floor(v)}`.slice(-2))
    .join(":");

export const Player = () => {
  const [urlIndex, setUrlIndex] = useState(0);
  // const [nowPlaying, setNowPlaying] = useState(audioUrls[urlIndex].file);
  const containerRef = useRef(null);
  const theme = useTheme();

  const { wavesurfer, isReady, isPlaying, currentTime } = useWavesurfer({
    container: containerRef,
    url: audioUrls[urlIndex].file,
    waveColor: "#cfcfcf",
    progressColor: `${[theme.palette.primary.main]}`,
    height: 17,
    barGap: 3,
    barWidth: 1.6,
  });

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  const nextSong = () => {
    setUrlIndex((index) => (index + 1) % audioUrls.length);
    // wavesurfer && wavesurfer.playPause();
  };

  // useEffect(() => {
  //   if (urlIndex === 0 && isPlaying) setNowPlaying("Falling In Love (Cover)");
  //   if (urlIndex === 1 && isPlaying)
  //     setNowPlaying("Fly Me To The Moon (Cover)");
  //   setNowPlaying("Listen to me sing...");
  // }, [urlIndex, isPlaying]);

  return (
    <Wrapper>
      {!isPlaying ? (
        <Typography
          variant="body2"
          color="#222121"
          sx={{ width: "max-content", margin: "auto", fontWeight: 700 }}
        >
          Listen to me sing...
        </Typography>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            color="#222121"
            sx={{ width: "max-content", margin: "auto", fontWeight: 700 }}
          >
            {audioUrls[urlIndex].name}
          </Typography>
          <Typography variant="body2">{formatTime(currentTime)}</Typography>
        </Box>
      )}
      <Stack direction="row" margin=".5rem" alignItems="center">
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
        {isPlaying && (
          <IconButton
            sx={{
              backgroundColor: "#222121",
              width: "1.7rem",
              height: "1.7rem",
              marginLeft: ".4rem",
              ":hover": {
                backgroundColor: "#222121",
              },
              transition: "all .3s ease",
            }}
            onClick={nextSong}
          >
            <SkipNext sx={{ color: "#fff" }} />
          </IconButton>
        )}

        {/* Wave Form. */}
        <AudioWave ref={containerRef}></AudioWave>
      </Stack>
    </Wrapper>
  );
};
