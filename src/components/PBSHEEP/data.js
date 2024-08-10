import WorkHistoryIcon from "@mui/icons-material/WorkHistoryRounded";
import CodeRounded from "@mui/icons-material/CodeRounded";
import Person4Rounded from "@mui/icons-material/PersonRounded";
import GroupWorkRounded from "@mui/icons-material/GroupWorkRounded";
import MusicNoteRounded from "@mui/icons-material/MusicNoteRounded";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import WorkRounded from "@mui/icons-material/WorkRounded";
import AutoStoriesRounded from "@mui/icons-material/AutoStoriesRounded";
import CastForEducationRounded from "@mui/icons-material/CastForEducationRounded";
import Mic from "@mui/icons-material/Mic";
import VisibilityRounded from "@mui/icons-material/VisibilityRounded";

export const Data = [
  {
    title: "Experience",
    icon: (
      <WorkHistoryIcon
        color="inherit"
        fontSize="inherit"
        sx={{ marginRight: ".5rem" }}
      />
    ),
    items: [
      {
        heading: <WorkHistoryIcon color="inherit" fontSize="inherit" />,
        value: "Freelance Fullstack Web Development (2+ years)",
      },
      {
        heading: <WorkHistoryIcon color="inherit" fontSize="inherit" />,
        value: "Customer Support Representative (2 years)",
      },
      {
        heading: <WorkHistoryIcon color="inherit" fontSize="inherit" />,
        value: "...",
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
    items: [
      {
        heading: <CodeRounded color="inherit" fontSize="inherit" />,
        value: "Visual Studio Code (Choice Code Editor)",
      },
      {
        heading: <CodeRounded color="inherit" fontSize="inherit" />,
        value: "JustInMind (Prototyping And Wireframing)",
      },
      {
        heading: <CodeRounded color="inherit" fontSize="inherit" />,
        value: "Inkscape (Illustrations, SVGs, etc)",
      },
    ],
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
    items: [
      { heading: "Fullname: ", value: "Victor Oshokunofa Olorunda" },
      { heading: "Nationality: ", value: "Nigerian (Edo State)" },
      { heading: "Gender: ", value: "Male" },
      { heading: "Email: ", value: "victorolorunda6@gmail.com" },
      { heading: "Phone: ", value: "+2348152038183" },
      { heading: "Lives In: ", value: "Nigeria." },
    ],
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
    items: [
      {
        heading: <SchoolRounded color="inherit" fontSize="inherit" />,
        value: "University Of Benin (BSc)",
      },
      {
        heading: <SchoolRounded color="inherit" fontSize="inherit" />,
        value: "Aptech (Advanced Diploma in Software Engineering)",
      },
      {
        heading: <SchoolRounded color="inherit" fontSize="inherit" />,
        value: "O'tega International College",
      },
      {
        heading: <SchoolRounded color="inherit" fontSize="inherit" />,
        value: "Access International School",
      },
    ],
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
    items: [
      {
        heading: <GroupWorkRounded color="inherit" fontSize="inherit" />,
        value: "Posses a keen eye for details.",
      },
      {
        heading: <GroupWorkRounded color="inherit" fontSize="inherit" />,
        value: "An autodidact.",
      },
      {
        heading: <GroupWorkRounded color="inherit" fontSize="inherit" />,
        value: "A very good communicator.",
      },
      {
        heading: <GroupWorkRounded color="inherit" fontSize="inherit" />,
        value: "Good people management and people skills",
      },
      {
        heading: <GroupWorkRounded color="inherit" fontSize="inherit" />,
        value: "...",
      },
    ],
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
    items: [
      {
        heading: "Landlords And Tenants (Wordpress)",
        value: (
          <a
            href="https://landlordsandtenants.org"
            target="_blank"
            rel="noreferrer"
          >
            <VisibilityRounded fontSize="inherit" sx={{ marginTop: ".5rem" }} />
          </a>
        ),
      },
      {
        heading: "Uniben Marketplace (MERN + FIREBASE)",
        value: (
          <a
            href="https://unibenmarketplace.com"
            target="_blank"
            rel="noreferrer"
          >
            <VisibilityRounded fontSize="inherit" sx={{ marginTop: ".5rem" }} />
          </a>
        ),
      },

      {
        heading: "Forex House Ng. (React)",
        value: (
          <a href="https://forexhouseng.com" target="_blank" rel="noreferrer">
            <VisibilityRounded fontSize="inherit" sx={{ marginTop: ".5rem" }} />
          </a>
        ),
      },
      {
        heading: "My Portfolio (React)",
        value: (
          <a href="https://olorunda.xyz" target="_blank" rel="noreferrer">
            <VisibilityRounded fontSize="inherit" sx={{ marginTop: ".5rem" }} />
          </a>
        ),
      },
    ],
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
    items: [
      {
        heading: <Mic color="inherit" fontSize="inherit" />,
        value: "Singing and recording songs",
      },
      {
        heading: <MusicNoteRounded color="inherit" fontSize="inherit" />,
        value: "Playing the guitar",
      },
      {
        heading: <AutoStoriesRounded color="inherit" fontSize="inherit" />,
        value: "Reading",
      },
      {
        heading: <CastForEducationRounded color="inherit" fontSize="inherit" />,
        value: "Teaching",
      },
    ],
  },
];
