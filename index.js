// Code your solutions in this file
/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/
function writeCards(array, event) {
    const arraytwo= []; // creates a new, empty array to hold the messages
    for (let i = 0; i < array.length; i++){ //ierate through the input array
    arraytwo.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`); //adds messages to the new array
    }
return arraytwo; // returns the new erray

}


/* for loop alternative for second solution
function countDown(){
for (let count = 10; count <= 10 && count>=0; count--) {
    console.log(count);
  }
return count
}
*/

// while look alternative

function countDown(){
    let count = 10
    while ( count <= 10 && count>= 0 ){
        console.log(count--);
    }
    return count;
}
