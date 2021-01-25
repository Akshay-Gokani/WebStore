<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Koji Dino, Usaamah Gill, Akshay Gokani">

    <title>Space Website</title>

    <!-- Font Awesome CDN -->
    <script src="https://kit.fontawesome.com/ea25cca267.js" crossorigin="anonymous"></script>

    <!-- Custom Stylesheet-->
    <link rel="stylesheet" href="./css/style_search.css">
    <!-- Google fonts -->
    <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'>
</head>

<body>
    <!-- Navigation / Header -->
    <header>
        <!-- This creates the dynamic header image, text and logo area at the top of the page  -->
        <div class="TopBanner">
            <div class="BannerText">
                <h1>Welcome to the world of BlackStar Alliance</h1>
                <p>'Bringing the universe to you, and you to the universe'</p>
            </div>
        </div>
    </header>

    <main>
        <!-- Sticky Navbar -->
        <nav>
            <!-- Left Side -->
            <div>
                <button class="logo" onclick="location.href='./index.php'">BlackStar Alliance</button>
                <button class="item" href="#">About</button>
                <button class="item" href="#">Blog</button>
            </div>
            <div>
            </div>
            <!-- Right Side -->
            <div class="right">
                <div>
                    <li class="product-search">
                        <form action="/search.php" method="get" id="form1"><input type="text" placeholder="Search.." name="query" id="search_field">
                            <button type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                    </li>
                </div>
                <button class="item coolbuttons" href="#" onclick="location.href='./addproduct.php'">Log In</button>
                <button class="item coolbuttons" href="#">Sign Up</button>
                <button class="item coolbuttons" href="#"><i class="fas fa-shopping-cart"></i></button>
            </div>
        </nav>

        <!-- search menu, with content -->
        <div></div>
        <div class="search-container">
            <div class="sidenav">
                <h2>Search Page</h2>
                <button class="dropdown-btn">SpaceShips <i class="fa fa-caret-down"></i></button>
                <div class="dropdown-container">
                    <a href="#">Subcat 1</a>
                    <a href="#">Subcat 2</a>
                    <a href="#">Subcat 3</a>
                </div>
                <button class="dropdown-btn">SpaceGear&trade; Clothing<i class="fa fa-caret-down"></i></button>
                <div class="dropdown-container">
                    <a href="#">Subcat 1</a>
                    <a href="#">Subcat 2</a>
                    <a href="#">Subcat 3</a>
                </div>
                <button class="dropdown-btn">SpaceParts<i class="fa fa-caret-down"></i></button>
                <div class="dropdown-container">
                    <a href="#">Subcat 1</a>
                    <a href="#">Subcat 2</a>
                    <a href="#">Subcat 3</a>
                </div>
                <button class="dropdown-btn">SpaceTools <i class="fa fa-caret-down"></i></button>
                <div class="dropdown-container">
                    <a href="#">Subcat 1</a>
                    <a href="#">Subcat 2</a>
                    <a href="#">Subcat 3</a>
                </div>
                <a href="#">Space Insurance</a>
                <h4>Filters & Sort</h4>
                <form action="/search.php" class="filtersort">
                    <div>
                        <label>Price: </label> $<input type="text" name="lowPrice" id="lowPrice" min="0" placeholder="min"> to $<input type="text" name="highPrice" id="highPrice" min="0" placeholder="max"><br><br>
                        <label>Rating: </label> <input type="number" name="lowStar" id="lowStar" min="0" max="5">&starf; to <input type="number" name="highStar" id="highStar" min="0" max="5">&starf;<br><br>
                    </div>
                    <div>
                        <label>Sort:</label>
                        <select name="sort" class="sort">
                            <option selected value="nosort"></option>
                            <option value="priceL2H">($) Low to High</option>
                            <option value="priceH2L">($) High to Low</option>
                            <option value="starL2H">(&star;) Low to High</option>
                            <option value="starH2L">(&starf;) High to Low</option>
                        </select>
                    </div>
                    <!-- hidden search input to pass on previous query -->
                    <input type="hidden" id="hiddenSearch" name="query">
                    <br>
                    <button style="text-align: center; width: 4rem;">apply</button>
                </form>
            </div>
            <!-- container for all things product-search related. -->
            <div class="product-container">
                <h2 id='search_header'>Search Results Page</h2>
                <ul id="products">
                    <?php
                    include 'searchresults.php';
                    search();
                    ?>
                </ul>
            </div>
        </div>
        <!-- Featured cards -->
        <div class="flex-card">
            <div class="flextext">
                <h2>Brand new <br> Rocket Powered Battle Cars!</h2>
                <h4>Now Available across the Galaxy</h4>
            </div>
            <div class="fleximg"><img src="img/flex1.png"></div>
        </div>

        <div class="flex-card">
            <div class="fleximg"><img src="img/flex2.png"></div>
            <div class="flextext">
                <h2>Experience this stunning VR game</h2>
                <h4>Wits, deception, murder?</p>
            </div>
        </div>

    </main>
</body>

<script>
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var query = urlParams.get('query');

    document.getElementById("search_field").value = query;
</script>

<!-- Footer -->
<footer class="footer">

    <!-- Left -->
    <div class="footer_left">
        <img src="img/logo2.png">
        <p class="footer_links">
            <a href="landingpage">Home</a>
            <a href="landingpage">About</a>
            <a href="landingpage">Blog</a>
            <a href="landingpage">Log In</a>
        </p>
        <p class="footer-company-name">
            © 2122 BlackStarAlliance
        </p>
    </div>

    <!-- Center -->
    <div class="footer_center">
        <div class="address">
            <p><span>1005 Market St, San Francisco, California, United States, North America, Earth, Solar System,
                    Spiral Arm, Milky Way, Laniakea Supercluster</p>
        </div>
        <div class="number">
            <p>403-222-0911</p>
        </div>
        <div class="support">
            <a href="info@BlackStarAlliance">
                <p>info@BlackStarAlliance</p>
            </a>
        </div>
    </div>

    <!-- Right -->
    <div class="footer_right">
        <div class="footerAbout">
            <h3>About BlackStar Alliance</h3>
            <p>As the premiere Faster Than Light Travel&trade; company in the universe, we take great pride in bringing you into space, and beyond.</p>
        </div>
        <div class="footersocial">
            <a href="www.facebook.com" class="facebook">Facebook</a>
            <a href="www.instagram.com" class="instagram">instagram</a>
            <a href="www.Youtube.com" class="Youtube">Youtube</a>
            <a href="www.linkedin.com" class="linkedin">linkedin</a>
            <a href="www.twitter.com" class="twitter">twitter</a>
        </div>
    </div>
</footer>

</html>