const userNames = ["admin", "aneeq", "jyfjhyfhjyfv", "umais", "hjyghvmjyvhmj"];

if (userNames.length === 0) {
  console.log("We need to find some users");
} else {
  while (userNames.length > 0) {
    userNames.pop();
    userNames.length === 0 && console.log("We need to find some users");
  }
}
