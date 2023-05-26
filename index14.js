const guests = [
  "Mehsaan Tahir",
  "Umais Amin",
  "Ramish Tahir",
  "Mohid Ahmad",
  "Uzair Faysal",
  "Ayan Faysal",
];

console.log(
  `Our big dining table won't be able to arrive today so only two people can come at my dinner party (T-T)`
);
// Used a while loop to remove people randomly
while (guests.length > 2) {
  const randomNum = Math.floor(Math.random() * 6);
  const removedPerson = guests.splice(randomNum, 1);
  console.log(
    `${removedPerson}, sorry for the inconvenience but u can't come to the dinner party`
  );
}

for (let i = 0; i < guests.length; i++) {
  console.log(`${guests[i]}, you're coming to my dinner party`);
}

guests.splice(0,2)
console.log(guests)