<?php

include 'prodconnection.php';
$prodconn = OpenCon();

if(isset($_POST['submit']))
{    //echo 1;
  //  $productid = $_POST['ProductID'];
  $title = $_POST['ProductTitle'];
  $price = $_POST['ProductPrice'];
  $productdescription = $_POST['productdescription'];
  $target_file_path = 'img/' . $_FILES['imgsrc']['name'];
  //$img = $target_file_path;//$_FILES['imgsrc']['tmp_name'];
  $rate = $_POST['rate'];

  $tmp_file = $_FILES['imgsrc']['tmp_name'];

  move_uploaded_file($tmp_file, $target_file_path);

  //$sql = "INSERT INTO `products` ( `ProductID`, `ProductTitle` , `ProductPrice` , `productdescription` , `imgsrc` , `rate`)
  //VALUES ('0','$title','$price','$productdescription','$target_file_path','$rate')";

  // VALUES ('?','?','?','?','?','?')";
  //INSERT INTO `products` (`ProductID`, `ProductTitle`, `ProductPrice`, `ProductDescription`, `imgsrc`, `rate`) VALUES (NULL, 'testing', '500', 'testing value', 'texting value', '4');
  $stmt = $prodconn->prepare('INSERT INTO `products` (`ProductID`, `ProductTitle`, `ProductPrice`, `ProductDescription`, `imgsrc`, `rate`) VALUES (0, ?, ?, ?, ?, ?)');
  $stmt->bind_param('sdssd', $title, $price, $productdescription, $target_file_path, $rate);
  $stmt->execute();
  if ($stmt) {
    echo '<script type="text/javascript"> alert("Image Profile Uploaded " ) </script>';

  } else {
    echo '<script type="text/javascript"> alert("Not Uploaded" ) </script>';

  }
  // need to do the binding

  // BIND BAR TO PREPEND STMT AS PARAMS
  //if($stmt = mysqli_prepare($prodconn, $sql)) {
  //      mysqli_stmt_bind_param($stmt, "ssissi", $productid, $title, $price, $productdescription, $target_file_path, $rate);
  //    mysqli_stmt_execute($stmt);
  //}
  //$query_run = mysqli_query($prodconn, $stmt);

}
CloseCon($prodconn);
?>

<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="Koji Dino, Usaamah Gill, Akshay Gokani">

  <title>BlackStarAlliance - Upload new Products</title>

  <!-- Font Awesome CDN -->
  <script src="https://kit.fontawesome.com/ea25cca267.js" crossorigin="anonymous"></script>

  <!-- Google fonts -->
  <link href='https://fonts.googleapis.com/css?family=Comfortaa' rel='stylesheet'>

  <!-- Custom Stylesheet-->
  <link rel="stylesheet" href="css/style_upload.css">
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
        <button class="item coolbuttons" href="#">Log In</button>
        <button class="item coolbuttons" href="#">Sign Up</button>
        <button class="item coolbuttons" href="#"><i class="fas fa-shopping-cart"></i></button>
      </div>
    </nav>

    <!-- Text (or jumbotron) -->
    <h1 class="desc">Upload a new Product!</h1>
    <div class="text">
      <p class="desc">
        This page is for our honoured sellers and manufacturers. Have a new product that you would like to sell through BlackStar Alliance's intergalactic network? Upload all the details here for review, and we'll get in touch as soon as we've reviewed all the details to talk business.
      </p>
    </div>
    <div class="product-placement">
      <!--1st flexbox containing pictures that customer can scroll through and click to enlarge on the main block.-->

      <div class="side-flex">

        <div class="product-image-container">
          <img class="product-image" src="/img/product_image.jpg" alt="Formula 1 Mech">
        </div>
        <!--Flexbox for description UNDER flexbox with main image, organized in a column-->

      </div>
      <!--Main product image view pane-->
      <div class="formcont">
          <form action="addproduct.php" method='post' class='myform' enctype="multipart/form-data">
            <span>
              <label for="ProductTitle">Title:</label><br>
              <input type="text" id="ProductTitle" name="ProductTitle" placeholder="Enter Product Title" required><br>
            </span>
            <span>
              <label for="ProductPrice">Price:</label><br>
              <input type="number" id="ProductPrice" name="ProductPrice" step="0.01" required><br>
            </span>
            <span>
              <label for="productdescription">Product description:</label><br>
              <input type="text" id="productdescription" name="productdescription" placeholder="Enter Product Desc" required><br>
            </span>
            <span>
              <label for="imgsrc">Upload Image:</label><br>
              <input type="file" id="imgsrc" name="imgsrc" title="Select file to upload" required><br>
            </span>
            <span>
              <label for="rate">Rate:</label><br>
              <input type="number" id="rate" name="rate" min='0' max='5' placeholder="Enter rating" required><br>
            </span>
            <span>            <input type="submit" value="upload data/image" name="submit">
            </span>
          </form>
      </div>
      <!--item info flexbox containing price, quantity, add to cart button and rating toggle-->

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
    </body>

    </html>
