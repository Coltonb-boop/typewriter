const typeWriter = (sentence) => {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => process.stdout.write(sentence[i]), delay);
    delay += 50;
    if (i === sentence.length - 1) {
      setTimeout(() => console.log('\n'), delay);
    }
  }
}

typeWriter('hello there from lighthouse labs');