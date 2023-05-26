const guests = ["Umais Amin", "Mohid Ahmad", "Uzair Faysal"];
guests.unshift("Mehsaan Tahir");
guests.splice(2, 0, "Ramish Tahir");
guests.push("Ayan Faysal");

for (let i = 0; i < guests.length; i++) {
  console.log(`${guests[i]}, you have been invited to dinner at my house`);
}
