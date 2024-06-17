import * as React from "react";
import { useForm } from "react-hook-form";
import { CircularProgress, styled } from "@mui/material";
import emailjs from "@emailjs/browser";

// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendRounded from "@mui/icons-material/SendRounded";
import Person from "@mui/icons-material/Person";
import WavingHandRounded from "@mui/icons-material/WavingHandRounded";
import { AlternateEmailRounded, ThumbUpRounded } from "@mui/icons-material";

const Form = styled("form")(() => ({
  width: "100%",
  padding: "1.2rem",
  borderRadius: "25px",
  backgroundColor: "#fff",
  marginBottom: "5rem",
  boxShadow: "-17px 20px 28px 3px #000",
}));

const InputWrapper = styled("div")(() => ({
  width: "100%",
  padding: ".5rem .8rem",
  borderRadius: "25px",
  backgroundColor: "#222121",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
const Input = styled("input")(() => ({
  border: "none",
  outline: "none",
  width: "100%",
  padding: ".5rem",
  color: "#fff",
  fontWeight: 700,
  backgroundColor: "transparent",
  transition: "ease .6s ",
  "::placeholder": {
    fontWeight: 700,
    color: "#959595",
    fontFamily: "inherit",
  },
}));
const TextArea = styled("textarea")(() => ({
  border: "none",
  outline: "none",
  width: "100%",
  padding: ".5rem",
  color: "#fff",
  fontWeight: 700,
  backgroundColor: "transparent",
  "::placeholder": {
    color: "#959595",
    fontFamily: " Arial, sans-serif",
    fontWeight: "bold",
  },
  "&:focus": {
    color: "#fff",
  },
}));

const ErrorMessage = styled("p")(() => ({
  fontSize: ".8rem",
  color: "#222222",
  marginTop: ".5rem",
  paddingLeft: "1rem",
  marginBottom: "1rem",
}));
const Header = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));
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
          boxShadow: "0px 5px 25px 0px #222",
          transition: "all ease .2s .2s",
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
