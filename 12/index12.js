const guests = ["Aneeq Tahir", "Umais Amin", "Mohid Ahmad"];
guests.shift();
guests.push("Uzair Faysal");

for (let i = 0; i < guests.length; i++) {
  console.log(`${guests[i]}, you have been invited to dinner at my house`);
}

console.log(
  `Everyone!!!!!! We just found a bigger table!! so we'll be inviting more guests`
);
