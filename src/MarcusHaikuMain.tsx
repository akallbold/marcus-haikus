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
    <>
      <Grid>
        <div>
          <h1 className="blockquote-h1">
            Random Marcus Aurelius haiku generator
          </h1>
          <p className="mb-0">
            {haiku.lineOne}
            <br />
            {haiku.lineTwo}
            <br />
            {haiku.lineThree}
          </p>
        </div>
        <Button onClick={haikuGenerator}>Generate new haiku</Button>
        <div style={{ height: "10vh" }} />
        <h6>How are the haikus generated?</h6>
        <p>
          Every word from Marcus Aurelius' first three books of Meditations was
          put through an algorithm to determine how many syllables the word
          contained. The lines were randomly created using the traditional haiku
          pattern of 5 syllables for the first and last line and 7 syllables for
          the second line. This is a tangent on the idea of Augmented
          Intelligence, specifically using the computer to augment the
          creativity of the human mind.
        </p>
      </Grid>
    </>
  );
};

export default MarcusHaikuMain;
