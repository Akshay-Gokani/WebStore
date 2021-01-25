//JS dropdown ( taken from http://w3schools-fa.ir/howto/howto_js_dropdown_sidenav.html )>
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

// loads search result, if any.
// learned from https://www.sitepoint.com/get-url-parameters-with-javascript/
// TODO: add options to sort/filter at end.
window.addEventListener('load', loadPage);

function loadPage() {
    // get parameters from URL
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var query = urlParams.get('query');
    var lowPrice = urlParams.get('lowPrice') || 0;
    var highPrice = urlParams.get('highPrice');
    var lowStar = urlParams.get('lowStar') || 0;
    var highStar = urlParams.get('highStar');
    var sortOrder = urlParams.get('sort') || 'nosort';
    var container = document.getElementById("products"); // product container
    var resultcounter = 0; // counter to keep track of number of matching products

    // sorts/filters array
    var productlist = products;
    productlist = filterPrice(lowPrice, highPrice, productlist);
    productlist = filterRating(lowStar, highStar, productlist);
    productlist = sort(sortOrder, productlist);


    container.innerHTML = ''; // clear products
    if (!!query) {
        // loops through js product array
        for (i = 0; i < productlist.length; i++) {
            var product = productlist[i];
            var title = product.title.toUpperCase();
            if (title.includes(query.toUpperCase())) {
                createProductCard(container, product);
                resultcounter++;
            }
        }
    } else {
        for (i = 0; i < productlist.length; i++) {
            var product = productlist[i];
            createProductCard(container, product);
            resultcounter++;
        }
    }

    document.getElementById("search_header").innerHTML = 'Your search has yielded ' + resultcounter + ' results.';


    // update query field to match, and update search results header string.
    document.getElementById("search_field").value = query;
    document.getElementById("hiddenSearch").value = query;
    // update filter/sorts to match
    document.getElementById("lowStar").value = lowStar;
    document.getElementById("highStar").value = highStar;
    document.getElementById("lowPrice").value = lowPrice;
    document.getElementById("highPrice").value = highPrice;
    document.querySelector("[value=" + (sortOrder) + "]").selected = true;
}
// add onclick which redirects to productpage with GET product ID (e.g. productpage?id=5)

// filter functions
function filterPrice(least, greatest, arr) {
    return arr.filter(product => (product.price >= (least) && product.price <= (greatest || 9999999)));
}

function filterRating(least, greatest, arr) {
    return arr.filter(product => (product.rate >= least && product.rate <= (greatest || 5)));
}

// sort function
function sort(order, arr) {
    if (order == 'priceL2H') {
        return arr.sort(function(a, b) {
            return a.price - b.price;
        });
    } else if (order == 'priceH2L') {
        return arr.sort(function(a, b) {
            return b.price - a.price;
        });
    } else if (order == 'starL2H') {
        return arr.sort(function(a, b) {
            return a.rate - b.rate;
        });
    } else if (order == 'starH2L') {
        return arr.sort(function(a, b) {
            return b.rate - a.rate;
        });
    } else {
        return arr;
    }
}
// creates product card and inserts it into page
function createProductCard(container, product) {
    // creates DOM product card
    var productCard = document.createElement("LI");
    productCard.className = "product-card";
    productCard.setAttribute("id", product.id);

    // creates HTML DOM elements for product card
    var aID = document.createElement("A");
    var img = document.createElement("IMG");
    var name = document.createElement("H1");
    var price = document.createElement("H2");
    var rating = document.createElement("P");
    var desc = document.createElement("P");
    var button = document.createElement("BUTTON");

    // updates DOM elements with product elements
    aID.href = "./productpage.html?id=" + product.id;
    img.src = product.imgsrc;
    name.innerHTML = product.title;
    price.innerHTML = '$' + product.price;
    rating.innerHTML = product.rate + ' stars';
    desc.innerHTML = product.description;
    button.innerHTML = "Add to cart";

    // appends DOM elements to product card
    aID.appendChild(img);
    aID.appendChild(name);
    productCard.appendChild(aID);
    productCard.appendChild(price);
    productCard.appendChild(rating);
    productCard.appendChild(desc);
    productCard.appendChild(button);

    // appends product card to product container
    container.appendChild(productCard);
}