// let name = "Mitch";
// let age = 25;
// let birthday = "november 4th";
// let detroitGC = "true";
// let lifeEvents = [
//   "I was born in royal oak.",
//   "I went to warren mott high.",
//   "I atteneded macomb community college.",
//   "I evaded the police on a motorcycle in summer 2019."
// ];

// if (detroitGC === "true") {
//   console.log(
//     `My name is ${name} and i am a student at Grand Circus in Detroit, i am currently ${age}, and my birthday is ${birthday}.`
//   );
// } else {
//   console.log(
//     `My name is ${name} and i am a student at Grand Circus in Grand Rapids, i am currently ${age}, and my birthday is ${birthday}.`
//   );
// }

// // for (let i = 0; i < lifeEvents.length; i++) {
// //   console.log(lifeEvents[i]);
// // }

// lifeEvents.forEach(lifEvent => {
//   console.log(lifEvent);
// });

let counter = 0;

function generateRandomNum() {
  return Math.floor(Math.random() * 10 + 1);
}

let randomNumber = generateRandomNum();

if (randomNumber === 5) {
  console.log("the random number was 5 on the initial atempt");
} else {
  while (randomNumber !== 5) {
    counter++;

    console.log("random number is not 5");

    randomNumber = generateRandomNum();

    if (randomNumber === 5) {
      console.log(`it took ${counter} additional tries to get to 5`);
    }
  }
}
