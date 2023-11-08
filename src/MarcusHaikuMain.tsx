import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { lineGenerator } from "./data/utils";
import { Button } from "@mui/material";

const emptyHaiku = {
  lineOne: "",
  lineTwo: "",
  lineThree: "",
};

const MarcusHaikuMain = () => {
  const [haiku, setHaiku] = useState(emptyHaiku);
  useEffect(() => haikuGenerator(), []);

  const haikuGenerator = () => {
    let currentHaiku = emptyHaiku;
    currentHaiku.lineOne = lineGenerator(5);
    currentHaiku.lineTwo = lineGenerator(7);
    currentHaiku.lineThree = lineGenerator(5);
    setHaiku({ ...currentHaiku });
  };

  return (
    <Grid container m={3}>
      <Grid flexDirection="column">
        <h1>Random Marcus Aurelius haiku generator</h1>
        <p>
          {haiku.lineOne}
          <br />
          {haiku.lineTwo}
          <br />
          {haiku.lineThree}
        </p>
        <Button variant="outlined" onClick={haikuGenerator}>
          Generate new haiku
        </Button>
      </Grid>
      <Grid sx={{ marginTop: 4 }}>
        <h3>How are the haikus generated?</h3>
        <p>
          {`Every word from Marcus Aurelius' first three books of Meditations was
        put through an algorithm to determine how many syllables the word
        contained. The lines were randomly created using the traditional haiku
        pattern of 5 syllables for the first line, 7 syllables for
        the second line and 5 syllables for the third and final line. `}
        </p>
        <h3>Some thoughts...</h3>
        <p>
          {`This is a great use case for Augmented
        Intelligence, in other words, using the computer to augment the creativity
        of the human mind. Specifically, the human mind can more easily determine the number of syllables in a word, and the machine may be able to "randomly" generate combinations of words that would not immediately come to the human mind. Sometimes the computer gets the number of variables wrong, or the sentence doesn't quite make sense, but that's where you come in!`}
        </p>
      </Grid>
    </Grid>
  );
};

export default MarcusHaikuMain;
