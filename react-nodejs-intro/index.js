const getData = require("./getData");

(async () => {
  const { user, posts } = await getData(1);
  console.log("Got user!");
  console.log(user);
  console.log(`Got ${user.name}'s posts!`);
  console.log(posts);
})();
