let current_users = [
  "Aim1ess.ime",  
  "aniiQ._.t",
  "zulQarnain",
  "legandumais",
];

let new_users = ["raw_Nature","ZULQARNAIN","Aniiq._.t"];
new_users = new_users.map(e => e.toLowerCase())

current_users = current_users.map(e => e.toLowerCase())

new_users.map((user) => {
  if (current_users.includes(user)) {
    console.log(`${user} has been taken`);
  }
})