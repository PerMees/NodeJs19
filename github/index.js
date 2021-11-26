const fetch = require("node-fetch");
const yargs = require("yargs");
const open = require("open");
const { hideBin } = require("yargs/helpers");
const fetchData = async (username) => {
  const response = await fetch("https://api.github.com/users/" + username);
  const data = await response.json();
  return data;
};

const init = async () => {
  const { argv } = yargs(hideBin(process.argv));
  const data = await fetchData(argv.username);
  if (argv.print) {
    console.log(data.name);
    console.log(data.url);
  } else {
    open(data.url);
  }
};

init();
