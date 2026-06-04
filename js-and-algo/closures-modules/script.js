// Exercise 1

const StringFormatter = function () {
  const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  const toSkewerCase = str => str.replaceAll(" ", "-");

  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase
  }
}




const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box"))//should return blue-box

// Exercise 2

const Bank = function () {
  let money = 500;
  const depositCash = cash => money += cash;
  const checkBalance = () => console.log("money = " + money);
  return {
    deposit: depositCash,
    showBalance: checkBalance
  }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950

// Exercise 3
const SongsManager = function () {
  const pattern = /v=([^&#]+)/;
  const prefixUrl = "https://www.youtube.com/watch?v=";
  const songs = {
    "sax": "3JZ4pnNtyxQ",
    "how long": "CwfoyVa980U"
  }
  const addSong = (songName, songPath) => {
    let identifier = songPath.match(pattern);
    if (identifier) {
      songs[songName] = identifier[1];
    }
  }
  const getSong = songName => console.log(prefixUrl + songs[songName]);

  return {
    addSong: addSong,
    getSong: getSong
  }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getSong("how long")
songsManager.getSong("ain't me") 