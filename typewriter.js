const sentence = "hello there from lighthouse labs";

// for (const char of sentence) {
//   console.log(char);
// }

const printSentence = sentence => {
  for (const char in sentence) {
    let letter = sentence[char];
    setTimeout(() => {
      process.stdout.write(letter);
    }, char * 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, sentence.length * 50);
};

printSentence(sentence);
