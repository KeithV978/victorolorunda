import * as React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendRounded from "@mui/icons-material/SendRounded";
import Person from "@mui/icons-material/Person";
import CircularProgress from "@mui/material/CircularProgress";
import WavingHandRounded from "@mui/icons-material/WavingHandRounded";
import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded";
import ThumbUpRounded from "@mui/icons-material/ThumbUpRounded";
import {
  ErrorMessage,
  Form,
  Header,
  Input,
  InputWrapper,
  TextArea,
} from "./styles";

export const ContactForm = () => {
  const [sending, setSending] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const formSubmission = (data) => {
    setSending(true);
    emailjs.init({
      publicKey: "y5Yu3oje6EHLsL_Qd",
      blockHeadless: true,
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    });

    // console.log(data);
    emailjs
      .send("service_q1kxj8r", "template_oitl348", data)
      .then(() => {
        setSending(false);
        setMessage("Message sent!");
        reset();
      })
      .catch((error) => {
        setSending(false);
        setMessage("An error occurred. Try again.");
        // console.log(error);
      })
      .finally(() => {
        setSending(false);
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // console.log(errors);
  return (
    <Form onSubmit={handleSubmit(formSubmission)}>
      <Header>
        <Typography
          variant="h6"
          color="#222222"
          fontWeight="bold"
          marginBottom="22px"
        >
          Say Hi! <WavingHandRounded color="inherit" />
        </Typography>
        <Typography
          variant="body2"
          color="#434343"
          fontWeight="bold"
          marginBottom="22px"
        >
          {message}{" "}
          {message === "Message sent!" && (
            <ThumbUpRounded color="inherit" fontSize="inherit" />
          )}
        </Typography>
      </Header>

      <div>
        <InputWrapper>
          <Person sx={{ color: "#fff" }} />
          <Input
            type="text"
            {...register("name", { required: true })}
            placeholder="What should I call you?"
            // required
          />
        </InputWrapper>
        <ErrorMessage>
          {" "}
          {errors?.name && "Tell me your name, pretty please..."}
        </ErrorMessage>
      </div>
      <div>
        <InputWrapper>
          <AlternateEmailRounded sx={{ color: "#fff" }} />
          <Input
            type="email"
            {...register("email", { required: true })}
            placeholder="your@mail.com"
            // required
          />
        </InputWrapper>

        <ErrorMessage>
          {errors?.email && "I'll need your email to say 'Hello' back."}
        </ErrorMessage>
      </div>

      <div>
        <InputWrapper>
          <TextArea
            {...register("message", { required: true })}
            placeholder="Your message..."
            rows={10}
            // required
          />
        </InputWrapper>

        <ErrorMessage>
          {errors?.message && "So what do you want to tell me?"}
        </ErrorMessage>
      </div>

      <Button
        type="submit"
        color="primary"
        variant="contained"
        sx={{
          borderRadius: "15px",
          minWidth: "150px",
          margin: "auto",
          display: "flex",
          // boxShadow: "0px 5px 25px 0px #222",
          // WebkitBoxShadow: "0px 5px 25px 0px #222",
          // MozBoxSizing: "0px 5px 25px 0px #222",
          transition: "all ease .2s .2s",
          WebkitTransition: "all ease .2s .2s",
        }}
        // onClick={() => setSending(true)}
      >
        {sending ? (
          <CircularProgress
            // size="sm"
            size={25}
            thickness={5}
            sx={{ color: "inherit" }}
          />
        ) : (
          <span style={{ display: "flex" }}>
            Hi! <SendRounded color="inherit" sx={{ marginLeft: ".5rem" }} />
          </span>
        )}
      </Button>
    </Form>
  );
};
