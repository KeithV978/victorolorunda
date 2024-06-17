import WorkHistoryIcon from "@mui/icons-material/WorkHistoryRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import Person4Rounded from "@mui/icons-material/PersonRounded";
import GroupWorkRounded from "@mui/icons-material/GroupWorkRounded";
import MusicNoteRounded from "@mui/icons-material/MusicNoteRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import WorkRounded from "@mui/icons-material/WorkRounded";

export const data = [
  {
    title: "Experience",
    icon: (
      <WorkHistoryIcon
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
    content: [
      // type: "list",
      { subtitle: "Freelancing (Consultant)", duration: "03/2020 - till date" },
      {
        subtitle: "IT Administrator",
        firm: "3TEES Global Educational Services",
        duration: "09/2017 - 12/2019",
        details: [
          "I consulted in projects of other developers.",
          "I contributed to open source projects.",
        ],
      },
    ],
  },
  {
    title: "Tools",
    icon: (
      <CodeRounded
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
  },
  {
    title: "Bio",
    icon: (
      <Person4Rounded
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
  },
  {
    title: "Education",
    icon: (
      <SchoolRounded
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
  },
  {
    title: "Skills",
    icon: (
      <GroupWorkRounded
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
  },
  {
    title: "Projects",
    icon: (
      <WorkRounded
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
  },
  {
    title: "Hobbies",
    icon: (
      <MusicNoteRounded
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
  },
];
