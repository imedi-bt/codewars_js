/*
The owner of a certain chatbox app has came under fire recently for a drama regarding the age old debate of pancakes or waffles. Because of this, he came to you in order to hide any words regarding pancakes.

The following words are the words that he is looking to censor by replacing it with an equal amount of astricks (*):

pancakes, flapjacks, slapjacks, hotcakes
In conjunction to that, the following words shall be highlighted with a double astricks (**):

waffles, crepes, blintzes
Finally, as long as there is no mention of a waffle relating word in the sentence, also censor the following word unless, there is a waffle relating word then highlight it:

syrup, honey, jam, butter, chocolate, margarine
Examples:

print(censor("I like waffles with chocolate")) --> "I like **waffles** with **chocolate**"

print(censor("I like pancakes with syrup" --> "I like ******* with *****"

print(censor("The debate between pancakes and waffles is as sweet as honey" --> "The debate between ******** and **waffles** is as sweet as **honey**"
*/

function censor(sentence) {
  let goodWords = ["waffles", "crepes", "blintzes"];
  let badWords = ["pancakes", "flapjacks", "slapjacks", "hotcakes"];
  let otherWords = ["syrup", "honey", "jam", "butter", "chocolate", "margarine"];
  let hasGoodWord = sentence.split(/\b/).some(word => goodWords.includes(word.toLowerCase()));
  return sentence
    .split(/\b/)
    .map(word => {
      if (badWords.includes(word.toLowerCase())) {
        return "*".repeat(word.length);
      } else if (goodWords.includes(word.toLowerCase())) {
        return `**${word}**`;
      } else if (otherWords.includes(word.toLowerCase())) {
        return hasGoodWord ? `**${word}**` : "*".repeat(word.length);
      }
      return word;
    })
    .join("");
}
