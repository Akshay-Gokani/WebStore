// array of product objects
var products = [{
  id: 0,
  title: "Moon hand terminal",
  price: 299,
  description: "Earth techology hand terminal from the 2050s. Considered ancient, but still popular on the moon-slums.",
  imgsrc: "img/phone1.png",
  rate: 2
},
{
  id: 1,
  title: "Ship",
  price: 900,
  description: "ship for space",
  imgsrc: "img/products/spaceship.png",
  rate: 4
},
{
  id: 2,
  title: "toilet",
  price: 1200,
  description: "pooping in out of space :)",
  imgsrc: "img/products/spacetoilet.png",
  rate: 1
},
{
  id: 3,
  title: "MK890",
  price: 200,
  description: "Ray gun",
  imgsrc: "img/products/raygun.png",
  rate: 2
},
{
  id: 4,
  title: "Von Braun thrusters",
  price: 1200,
  description: "rocket thrusters",
  imgsrc: "img/products/vonbraun.png",
  rate: 4
},
{
  id: 5,
  title: "Exoskeleton",
  price: 1800,
  description: "wearable exo adds 100lbs to your lift",
  imgsrc: "img/products/exoskeleton.png",
  rate: 5
},
{
  id: 6,
  title: "jetpack",
  price: 1700,
  description: "air pressured jetpacks for zero g's",
  imgsrc: "img/products/jetpack.png",
  rate: 4
},
{
  id: 7,
  title: "Nuclear batteries",
  price: 12200,
  description: "Nuclear powered battery",
  imgsrc: "img/products/nuclearbattery.png",
  rate: 4
},
{
  id: 8,
  title: "Helmet",
  price: 1200,
  description: "Electronic helmet with A.I",
  imgsrc: "img/products/helmet.png",
  rate: 4
},
{
  id: 9,
  title: "holoprojector",
  price: 1200,
  description: "projects your voice calls into holograms",
  imgsrc: "img/products/holoprojector.png",
  rate: 4
},
{
  id: 10,
  title: "solar panels",
  price: 100,
  description: "solar panels can recharge nuclear batteries with solar winds ",
  imgsrc: "img/products/solarpanel.png",
  rate: 4
},
{
  id: 11,
  title: "Dominus Battle Car",
  price: 199,
  description: "Popular across the Galaxy, this is a must have staple!",
  imgsrc: "img/car1.png",
  rate: 2
},
{
  id: 12,
  title: "Komodo Battle Car",
  price: 400,
  description: "An aggressive sports model for all the tuners out there",
  imgsrc: "img/car2.png",
  rate: 2.5
},
{
  id: 13,
  title: "Dark Knight Rises Tumbler",
  price: 2500,
  description: "For the heaviest duty battle in the Galaxy. Used by Bruce Wayne in Gotham",
  imgsrc: "img/car3.png",
  rate: 4.5
},
{
  id: 14,
  title: "99' Nissan Skyline GTR R34",
  price: 1500,
  description: "A classic for the Japanese sports scene of the 90s! Now joining battle",
  imgsrc: "img/car4.png",
  rate: 5
},
{
  id: 15,
  title: "De'Lorean Time Machine",
  price: 5000,
  description: "Back to the Future!",
  imgsrc: "img/car5.png",
  rate: 4
},
{
  id: 16,
  title: "Vulcan Battle Car",
  price: 500,
  description: "Battle Car made by our galactic neightbors to join the games. Now sold to Earth!",
  imgsrc: "img/car6.png",
  rate: 2
},
{
  id: 17,
  title: "Animus GP Battle Car",
  price: 999,
  description: "Formula One racer enters the battle!",
  imgsrc: "img/car7.png",
  rate: 3
},
{
  id: 18,
  title: "Breakout Type-S",
  price: 599,
  description: "Re-invention of a classic Earth-era Rocket battle car",
  imgsrc: "img/car8.png",
  rate: 1.5
},
{
  id: 19,
  title: "Peregrine TT",
  price: 1250,
  description: "Designed by the Covenant to enter the games. Available for the first time!",
  imgsrc: "img/car9.png",
  rate: 0.5
},
{
  id: 20,
  title: "Hotwheels Twin Mill III",
  price: 750,
  description: "HotWheels classic enters the battle!",
  imgsrc: "img/car10.png",
  rate: 1
},
{
  id: 21,
  title: "toilet MK2",
  price: 99999,
  description: "Superior Toilet Reforged Folded AI Technology",
  imgsrc: "img/products/spacetoilet2.png",
  rate: 1
},
{
  id: 22,
  title: "vibing cat",
  price: 1,
  description: "he vibing, very rare dance & space species",
  imgsrc: "img/products/catvibin.gif",
  rate: 5
},
{
  id: 23,
  title: "toilet MK3",
  price: 999999,
  description: "clears any micronanobiogorisms from your regions",
  imgsrc: "img/products/spacetoilet3.png",
  rate: 3
},
{
  id: 24,
  title: "toilet MK0",
  price: 40,
  description: "prehistoric toilet with prehistoric cleaner",
  imgsrc: "img/products/spacetoilet4.png",
  rate: 5
},
{       id: 25,
  title: "Formula EX Mech",
  price: 25000,
  description: "Introductory level Mech with basics for on ground support. Limited space and air abilties or equipment loadouts.",
  imgsrc: "img/element1.png",
  rate: 3.5
},
{
  id: 26,
  title: "Verus Mech",
  price: 28000,
  description: "Light armour Mech, fast, good mobility but low hitpoints. Can make up for it by hitting hard, and fast.",
  imgsrc: "img/verus.png",
  rate: 2
},
{
  id: 27,
  title: "Urban Mech",
  price: 30000,
  description: "Basic level light Mech made for urban use and coexistance with Humans. Often used in police forces and so on.",
  imgsrc: "img/element3.png",
  rate: 2.5
},
{
  id: 28,
  title: "Lailah Mech",
  price: 50000,
  description: "Medium armoured Mech with a heavy weapon loadout. Favoured by bounty hunters, mercenaries and military for the combination of speed and weaponry.",
  imgsrc: "img/element4.png",
  rate: 5
},
{
  id: 29,
  title: "Inferno Mech",
  price: 150000,
  description: "Heavy armoured Mech. Can transform into an all terrain tank, fly and has heavy firepower. Only downside is low mobility in close combat.",
  imgsrc: "img/element5.png",
  rate: 3.5
},
{
  id: 30,
  title: "Mastemah Mech",
  price: 250000,
  description: "Even heavier armour, used in orbital bombardment and space fights quite often. Also very popular in ranger combat due to it's sheer firepower and strength.",
  imgsrc: "img/element6.png",
  rate: 4.5
},
{
  id: 31,
  title: "Amdusias Mech",
  price: 500000,
  description: "The heaviest armoured mech in production by Sakura Industries. Used as a sniper, or flagship Mech for officers most often. It's incredible armour uses the best technological advances from across the Galaxy.",
  imgsrc: "img/element7.png",
  rate: 5
},
{
  id: 32,
  title: "Moon Mafia Management",
  price: 950000,
  description: "You've won an all inclusive one-way trip to the out reaches of space! Don't worry, all your expenses are taken care of. We'll be shipping you out in a storage container within 48 hours. Our agents will come get you. Don't try to resist.",
  imgsrc: "img/spaced.png",
  rate: 10
}
];
