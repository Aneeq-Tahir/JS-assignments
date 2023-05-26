const ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinalNumbers.map((e) => {
  if (e === 1) console.log("1st");
  else if (e === 2) console.log("2nd");
  else if (e === 3) console.log("3rd");
  else console.log(`${e}th`);
});
