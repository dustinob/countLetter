// return all the unique charactors that are passed into the function

// count how many of each character are returned

// Returns an object of the stats for the sentence given {character: count}

function clean(sentence) {
  var splitSentence = sentence.split(" ").join("").toLowerCase();
  return splitSentence;
}


function countLetters(sentence) {
  sentence = clean(sentence);
  //console.log(splitSentence);

  // Object for the letters to be added too.
  var letterList = {};
  //cycle thought each letter

  for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];

    //check is letter in keys and counts quantity
    if(letterList[letter] === undefined) {
      letterList[letter] = 1;
    }
    else
    {
      letterList[letter] = letterList[letter] + 1;
    }
  }
  return letterList;
}

console.log(countLetters("Lighthouse in the house"));