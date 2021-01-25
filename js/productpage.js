var currentIndex = -1;

function loadProduct(index) {
    // loads products with index chosen to p
    var p = products[index];
    // grabs the title from the title class html

    var title = document.getElementById("title1");
    // gives access to the div that contains the price
    var price = document.getElementById("priceDisplay");
    // desc
    var description = document.getElementsByClassName("product-description").item(0);

    var rating = document.getElementsByClassName("rate").item(0);
    var img = document.getElementsByClassName("product-image").item(0);
    // img
    var img = document.getElementsByClassName("product-image").item(0);
    img.setAttribute("src", p.imgsrc);
    title.innerText = p.title;
    price.innerText = p.price;
    description.innerText = p.description;
    rating.innerText = p.rate;

    currentIndex = index;
}

window.onload = function() {
    // product_id = the id in the URL
    var product_id = window.location.search.split("id=")[1];
    // loads products
    loadProduct(product_id);
}

function updatePrice() {
    // gets the value of quantity
    var quantity = document.getElementById("quantityInput").value;

    var price_element = document.getElementById("priceDisplay");
    // multiply quantity with product at current indexes price
    var totalPrice = quantity * products[currentIndex].price;

    // price_element shows the new price;
    price_element.innerText = totalPrice;
}

function spook() {
    alert("congratulations 😱 \nyou 👇\n have 😶\n won 😜\n a 1️⃣\n 🎊😱🎊prize 🎊😱🎊 !! \nclick 🖱 HERE 🈁 to 🐫 REDEEM 🤑🤑!!!\n\n\n👁👄👁c̶̨̬̤̼̲̜̘̹̝̖͕̼̘͍̐͗̌̾l̵͍̆̋i̸̬̗̽̂͆̽́̍̽͝c̸̡̧̮͐̎̆͆̐͑͋̈͌̒̆̓͜͜k̶̛̖̲̱͇͍̘͈͕͍̣̒͆̀̈͌̈́͜͠͠ ̷̡̢̤̪̣̙͕̼͙̪͒́̍͝h̷̞͖̩̞͈͓̦̭̑̂͂͗̈́̈́̀̈́̂̌͂̚͝ͅe̵̢̢̤̘̩̫͉͖͓͚̤̖̪̜͂̐͐̊͂͆͝͝r̸̛̟̥̳̜̫̼̯̟̬̤̹̜̂͊̚ȩ̵̡̡̢̝͓̬̜̦͉̘̺̿̀́͋ ̶̟͖͓̫̮̲̥͈͓̳̤͈̏̄͋̉́͜o̷̢̮̜̞̪̯̣̓͑̅̈́̽̈́͌̉̕r̷͍͍̙̖͍̺̘̫͎̩̜̩͇̂̾̅́̆̆̈́͋̎̕͜ ̸̢̋̔̆͘̕į̸͖̖̞͖̞̪͔̱͕̺̪͙͒̓̽̅́͜͝ ̸̧̛̺̖̩͇͑̂̔̂w̸͈̪̻͈͓̪̣̮̹̝̳̼͕͠i̶̠͍͊͌l̸̡̳̩̞͈̤̗͎̋̑́̉ḷ̸̦̗̲̳̽̾̈͗͗̌͌̉̏̊ ̶̧̨̨̳͎͚̪̖͕͈͊̂̎̄̆̓̂̉ç̶̭̱͉͙̞̤̺̱̬̦͚͖̬̤̇̈̇̀͑̕õ̷̧̧̞̞͍̩̤̞̉ḿ̵̭̙̖͒̎e̵̛̠̖̹̹̖̿̃͒͋̓̓̚̕̚͜ ̷̮͙͓̖̲͂f̵̬̖͇̼̝͙̩͋͆͋̚ơ̷̛͓̳͚̩̤̬̺̏̔̔̍̓́̈̽͌̽̽͋͜͠r̶̠̥͈͍͕̖̐͊̊̐̿͆͆͐̕ ̷̧̛̛̘̞̗͈̟̤̭̯̤̥̱̓̒̓̀͐́͘͜͝y̶̪͈͙͉̤̦̼̩̽͌̓͝͝o̷̦͇̥̤̺͆͝u̴͙͉͓̗̗͗̌̔̐̄̀͛̈̈́̓̾̈́̕͘͠ͅ\n👁👄👁c̶̨̬̤̼̲̜̘̹̝̖͕̼̘͍̐͗̌̾l̵͍̆̋i̸̬̗̽̂͆̽́̍̽͝c̸̡̧̮͐̎̆͆̐͑͋̈͌̒̆̓͜͜k̶̛̖̲̱͇͍̘͈͕͍̣̒͆̀̈͌̈́͜͠͠ ̷̡̢̤̪̣̙͕̼͙̪͒́̍͝h̷̞͖̩̞͈͓̦̭̑̂͂͗̈́̈́̀̈́̂̌͂̚͝ͅe̵̢̢̤̘̩̫͉͖͓͚̤̖̪̜͂̐͐̊͂͆͝͝r̸̛̟̥̳̜̫̼̯̟̬̤̹̜̂͊̚ȩ̵̡̡̢̝͓̬̜̦͉̘̺̿̀́͋ ̶̟͖͓̫̮̲̥͈͓̳̤͈̏̄͋̉́͜o̷̢̮̜̞̪̯̣̓͑̅̈́̽̈́͌̉̕r̷͍͍̙̖͍̺̘̫͎̩̜̩͇̂̾̅́̆̆̈́͋̎̕͜ ̸̢̋̔̆͘̕į̸͖̖̞͖̞̪͔̱͕̺̪͙͒̓̽̅́͜͝ ̸̧̛̺̖̩͇͑̂̔̂w̸͈̪̻͈͓̪̣̮̹̝̳̼͕͠i̶̠͍͊͌l̸̡̳̩̞͈̤̗͎̋̑́̉ḷ̸̦̗̲̳̽̾̈͗͗̌͌̉̏̊ ̶̧̨̨̳͎͚̪̖͕͈͊̂̎̄̆̓̂̉ç̶̭̱͉͙̞̤̺̱̬̦͚͖̬̤̇̈̇̀͑̕õ̷̧̧̞̞͍̩̤̞̉ḿ̵̭̙̖͒̎e̵̛̠̖̹̹̖̿̃͒͋̓̓̚̕̚͜ ̷̮͙͓̖̲͂f̵̬̖͇̼̝͙̩͋͆͋̚ơ̷̛͓̳͚̩̤̬̺̏̔̔̍̓́̈̽͌̽̽͋͜͠r̶̠̥͈͍͕̖̐͊̊̐̿͆͆͐̕ ̷̧̛̛̘̞̗͈̟̤̭̯̤̥̱̓̒̓̀͐́͘͜͝y̶̪͈͙͉̤̦̼̩̽͌̓͝͝o̷̦͇̥̤̺͆͝u̴͙͉͓̗̗͗̌̔̐̄̀͛̈̈́̓̾̈́̕͘͠ͅ\n👁👄👁c̶̨̬̤̼̲̜̘̹̝̖͕̼̘͍̐͗̌̾l̵͍̆̋i̸̬̗̽̂͆̽́̍̽͝c̸̡̧̮͐̎̆͆̐͑͋̈͌̒̆̓͜͜k̶̛̖̲̱͇͍̘͈͕͍̣̒͆̀̈͌̈́͜͠͠ ̷̡̢̤̪̣̙͕̼͙̪͒́̍͝h̷̞͖̩̞͈͓̦̭̑̂͂͗̈́̈́̀̈́̂̌͂̚͝ͅe̵̢̢̤̘̩̫͉͖͓͚̤̖̪̜͂̐͐̊͂͆͝͝r̸̛̟̥̳̜̫̼̯̟̬̤̹̜̂͊̚ȩ̵̡̡̢̝͓̬̜̦͉̘̺̿̀́͋ ̶̟͖͓̫̮̲̥͈͓̳̤͈̏̄͋̉́͜o̷̢̮̜̞̪̯̣̓͑̅̈́̽̈́͌̉̕r̷͍͍̙̖͍̺̘̫͎̩̜̩͇̂̾̅́̆̆̈́͋̎̕͜ ̸̢̋̔̆͘̕į̸͖̖̞͖̞̪͔̱͕̺̪͙͒̓̽̅́͜͝ ̸̧̛̺̖̩͇͑̂̔̂w̸͈̪̻͈͓̪̣̮̹̝̳̼͕͠i̶̠͍͊͌l̸̡̳̩̞͈̤̗͎̋̑́̉ḷ̸̦̗̲̳̽̾̈͗͗̌͌̉̏̊ ̶̧̨̨̳͎͚̪̖͕͈͊̂̎̄̆̓̂̉ç̶̭̱͉͙̞̤̺̱̬̦͚͖̬̤̇̈̇̀͑̕õ̷̧̧̞̞͍̩̤̞̉ḿ̵̭̙̖͒̎e̵̛̠̖̹̹̖̿̃͒͋̓̓̚̕̚͜ ̷̮͙͓̖̲͂f̵̬̖͇̼̝͙̩͋͆͋̚ơ̷̛͓̳͚̩̤̬̺̏̔̔̍̓́̈̽͌̽̽͋͜͠r̶̠̥͈͍͕̖̐͊̊̐̿͆͆͐̕ ̷̧̛̛̘̞̗͈̟̤̭̯̤̥̱̓̒̓̀͐́͘͜͝y̶̪͈͙͉̤̦̼̩̽͌̓͝͝o̷̦͇̥̤̺͆͝u̴͙͉͓̗̗͗̌̔̐̄̀͛̈̈́̓̾̈́̕͘͠ͅ");
    window.location.href = "./productpage.html?id=32";
}