import { meditationsBySyllable } from "./meditations";

const randomNumberGenerator = (max:number) => Math.ceil(Math.random() * max);

const wordPicker = (numOfSyllables:number) => {
  const random = randomNumberGenerator(
    meditationsBySyllable[numOfSyllables].length - 1
  );
  return meditationsBySyllable[numOfSyllables][random];
};



export const lineGenerator = (startingSyllableCount:number) => {
  let line = "";
  let syllablesLeftInLine = startingSyllableCount;
  while (syllablesLeftInLine > 0) {
    let syllablesForNextLine = randomNumberGenerator(syllablesLeftInLine);
    while (syllablesForNextLine > 5) {
      syllablesForNextLine = randomNumberGenerator(syllablesLeftInLine);
    }
    line += `${wordPicker(syllablesForNextLine - 1)} `;
    syllablesLeftInLine -= syllablesForNextLine;
  }
  return line;
};