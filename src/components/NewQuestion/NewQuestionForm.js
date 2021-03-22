import { useState } from "react";
import {
  Container,
  Divider,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    "& .MuiTextField-root, & .MuiButtonBase-root": {
      margin: theme.spacing(1),
      flex: 1,
    },
  },
  divider: {
    marginTop: "2em",
    marginButton: "2em",
  },
  bottonSpace: {
    paddingBottom: "3em",
  },
}));

function NewQuestionForm() {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");

  const setDefaultState = () => {
    setCategory("");
    setCategory("");
    setCategory("");
    setCategory("");
    setCategory("");
    setCategory("");
  };

  const submitQuestion = async (event) => {
    event.preventDefault();
    console.log({
      category: category,
      questionText: question,
      answers: {
        correctAnswer: correctAnswer,
        incorrectAnswers: [
          incorrectAnswer1,
          incorrectAnswer2,
          incorrectAnswer3,
        ],
      },
    });
    setDefaultState();
  };

  return (
    <form
      className={classes.form}
      noValidate
      autoComplete="off"
      onSubmit={submitQuestion}
    >
      <TextField
        className={classes.bottomSpace}
        id="filled-basic"
        label="Category"
        variant="filled"
        onChange={(e) => setCategory(e.target.value)}
      />
      <TextField
        className={classes.bottomSpace}
        id="filled-basic"
        label="Question"
        variant="filled"
        onChange={(e) => setQuestion(e.target.value)}
      />
      <TextField
        className={classes.bottomSpace}
        id="filled-basic"
        label="Correct Answer"
        variant="filled"
      />
      <TextField
        className={classes.bottomSpace}
        id="filled-basic"
        label="Incorrect Answer 1"
        variant="filled"
      />
      <TextField
        className={classes.bottomSpace}
        id="filled-basic"
        label="Incorrect Answer 2"
        variant="filled"
      />
      <TextField
        className={classes.bottomSpace}
        id="filled-basic"
        label="Incorrect Answer 3"
        variant="filled"
      />
      <Divider classes={classes.divider} />
      <Button type="submit" variant="outlined" color="primary" />
    </form>
  );
}

export default NewQuestionForm;
