const User = require("../models/User");
const VideoGame = require("../models/VideoGame");
const mongoose = require("./connections");

const halo = new VideoGame({
  name: "Halo",
  platform: "xbox",
  year: 2001,
  image:
    "https://http2.mlstatic.com/halo-combat-evolved-pc-juego-fisico-espanol-winmacsoft-D_NQ_NP_602173-MLA26030222889_092017-F.jpg"
});

const forza = new VideoGame({
  name: "Forza Horizon",
  platform: "xbox",
  year: 2012,
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Forza_Horizon_boxart.jpg/220px-Forza_Horizon_boxart.jpg"
});

const dead = new VideoGame({
  name: "DEADRISING 3",
  platform: "xbox one",
  year: 2013,
  image:
    "https://lh6.ggpht.com/_PkRIOjQ7W64vN3eiayQcAyTBNB2MgylOMmiODCtKOKK-YCjANWn5e2K_EaQNJqA8AKIeCAW-I0zEsEnYK_qwTsWN2Id=s450"
});

const destiny = new VideoGame({
  name: "Destiny",
  platform: "ps4",
  year: 2014,
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Destiny_box_art.png/220px-Destiny_box_art.png"
});

const witcher = new VideoGame({
  name: "The Witcher 3",
  platform: "ps4",
  year: 2015,
  image: "https://cdn2.gracza.pl/gfx/logos/980x360/980_594070511.jpg"
});

const last = new VideoGame({
  name: "The Last Of Us",
  platform: "ps4",
  year: 2013,
  image:
    "https://upload.wikimedia.org/wikipedia/tr/c/c5/The-last-of-us-cover.png"
});

const anderson = new User({
  name: "Anderson",
  console: "ps4",
  image: "https://i.makeagif.com/media/7-27-2014/SJR5sC.gif",
  games: [last, witcher, destiny]
});

const jose = new User({
  name: "Jose",
  console: "xbox",
  image:
    "https://media0.giphy.com/media/CbZqvPGYIYtd6/giphy.gif?cid=3640f6095bec6c40622f563367a0b7ec",
  games: [forza, halo, dead]
});

User.remove({})
  .then(() => VideoGame.remove({}))
  .then(() => VideoGame.insertMany([halo, dead, forza, last, witcher, destiny]))
  .then(() => anderson.save())
  .then(() => jose.save())
  .then(() => console.log("Successful Save"))
  .then(() => mongoose.connection.close());
