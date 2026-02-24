import * as React from "react";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import { motion } from "framer-motion";
import Close from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import { Body, Header } from "../styles";

const PreviewContainer = motion(Box);

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

const Preview = React.memo(({ data, setSelectedId }) => {
  return (
    <PreviewContainer
      sx={{ padding: { sm: "1rem", xs: "0 .5rem" } }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header as={motion.div} variants={itemVariants}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: { sm: "1.3rem", xs: "1.1rem" },
            fontWeight: 700,
            background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "0.5px",
          }}
        >
          {data?.icon}
          {data?.title}
        </Typography>
        <IconButton
          sx={{
            float: "right",
            background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)",
            width: { sm: "2rem", xs: "1.5rem" },
            height: { sm: "2rem", xs: "1.5rem" },
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%)",
              transform: "rotate(90deg) scale(1.1)",
              boxShadow: "0 8px 24px rgba(96, 24, 231, 0.3)",
            },
          }}
          size="small"
          onClick={() => setSelectedId(null)}
        >
          <Close
            sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.2rem" } }}
          />
        </IconButton>
      </Header>
      <Body as={motion.div} variants={itemVariants}>
        <List
          sx={{
            width: "100%",
            padding: 0,
          }}
        >
          {data?.items.map((item, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
              >
                <ListItem
                  sx={{
                    width: "100%",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    color: "var(--text-secondary)",
                    display: "flex",
                    flexDirection: "row",
                    gap: 2,
                    alignItems: "center",
                    paddingY: "1rem",
                    paddingX: 0,
                    borderTop: index === 0 ? "none" : "1px solid rgba(96, 24, 231, 0.2)",
                    minHeight: "8vh",
                    position: "relative",
                    overflow: "hidden",
                    
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: 0,
                      height: "100%",
                      width: "3px",
                      background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                      transform: "scaleY(0)",
                      transformOrigin: "center",
                      transition: "transform 0.3s ease",
                    },
                    
                    "&:hover": {
                      backgroundColor: "rgba(96, 24, 231, 0.1)",
                      paddingLeft: "1rem",
                      transform: "translateX(4px)",
                      
                      "&::before": {
                        transform: "scaleY(1)",
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      // background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)",
                      // backgroundClip: "text",
                      // WebkitBackgroundClip: "text",
                      // WebkitTextFillColor: "transparent",
                      minWidth: "fit-content",
                    }}
                  >
                    {item.heading}
                  </Box>
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    sx={{
                      color: "rgba(207, 207, 207, 0.8)",
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      transition: "color 0.3s ease",
                    }}
                  >
                    {item.value}
                  </Typography>
                </ListItem>
              </motion.div>
            );
          })}
        </List>
      </Body>
    </PreviewContainer>
  );
});

export default Preview;
