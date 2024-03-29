#! /usr/bin/env node
const figlet = require("figlet");
const lines = `
GET /intro
status 200 ok

‎=＾● ⋏ ●＾=\n
I know you do a lot of SEO and Marketing. (o ^▽^ o)\n
Though, it's not enough to define you yet Σ(O_O)\n
Your positive attitude is infectious (o ^▽^ o)\n
Your work ethic is out of this world! Σ(O_O)\n
May this festive season sparkle and shines your life with joy,\n
may all of your wishes and dreams come true,\n
and may you feel this happiness all year round.\n 
Merry Christmas to you, Mishri and your family!\n
This is from your secret dost ＼(＾∀＾)メ(＾∀＾)ノ\n
 (＾▽＾)\n
To our valuable asset,\nNeeta Mam (=^ ◡ ^=) ﾉ\n
=＾● ⋏ ●＾=\n‎

GET /gift\n
status 404 Not found\n

Bug reported to Santa by QA from Santa Consultancies pvt. ltd. \n
Santa debugs...\n
Cause: Lack of time (20%) and procrastination (80%)\n
Santa feels guilty to let her beloved child down (シ. .)シ\n
Santa's delivery estimation - 25th Dec 2019 at your office \n

to be continued... (^_<)\n
(⊙_⊙) crashes gracefully...\n

`;

var term = require("terminal-kit").terminal;

figlet("Hello Neeta mam", function(err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);

  let count = 0;
  let interval = setInterval(() => {
    if (count >= lines.length) {
      clearInterval(interval);
    }
    const letter = lines.charAt(count);
    const randomNum = getRandomNum();
    const color = randomColors[randomNum];
    term[color](letter);
    count++;
  }, 160);
});

const randomColors = ["red", "green", "blue", "magenta"];

const getRandomNum = () => {
  return Math.floor(Math.random() * randomColors.length);
};