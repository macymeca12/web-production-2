
const myTitle = 'My Poem'
let myObject = {'adjectives': ['light', 'sunny', 'darkness', 'rainy'], 'nouns': ['flower', 'moon', 'tree', 'dew']}
let myArticleArray = ['The', 'an', 'a', 'of']

function returnPoem(title, article, noun, adjective) {
  return title + ': ' + article + ' ' + adjective + ' ' + noun
}

W(returnPoem(myTitle, myArticleArray[0], myObject.adjectives[0],myObject.nouns[0]))

function forLoopPoem(title, articles, nouns, adjectives) {
  W(title)
  for (i = 0; i < 3; i++) {
    W(articles[i] + ' ' + nouns[i] + ' ' + adjectives[i])
  }
}

forLoopPoem(myTitle, myArticleArray, myObject.nouns, myObject.adjectives)


// while loop poem:
let counter = 0
while(counter < 5) {
  W(getRandomItem(myArticleArray) + ' ' + getRandomItem(myObject.adjectives) + ' ' + getRandomItem(myObject.nouns))
  counter++
}

function getRandomItem(array) {
  //this just selects a random item from the array

return array[Math.floor(Math.random()*array.length)]
}
