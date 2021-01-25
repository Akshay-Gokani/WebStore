<?php
function search() {
    include 'prodconnection.php';

    $query = $_GET["query"];
    
    // $lowPrice = 0;
    // $highPrice = 9999999999;
    // $lowStar = 0;
    // $highStar = 5;
    // $sortOrder = 'nosort';
    // if (!empty($_GET["lowPrice"])) {
    //     $lowPrice = $_GET["lowPrice"];
    // }
    // if (!empty($_GET["highPrice"])) {
    //     $highPrice = $_GET["highPrice"];
    // }
    // if (!empty($_GET["lowStar"])) {
    //     $lowStar = $_GET["highStar"];
    // }
    // if (!empty($_GET["highStar"])) {
    //     $highStar = $_GET["highStar"];
    // }
    // if (!empty($_GET["sortOrder"])) {
    //     $sortOrder = $_GET["sortOrder"];
    // }

    $conn = openCon();
    $query = "%{$query}%";
    $stmt = $conn->prepare("SELECT * FROM products WHERE `ProductTitle` LIKE ?");
    $stmt->bind_param("s", $query);
    $stmt->execute();
    $stmt->bind_result($id, $title, $price, $desc, $imgsrc, $rate);

    while($stmt->fetch()) {
        echo <<<END
                    <li class="product-card">
                        <a href="./productpage.php?id=$id">
                            <img src="$imgsrc">
                            <h1>$title</h1>
                        </a>
                        <p>$$price</p>
                        <p>Rating: $rate</p>
                        <p>$desc</p>
                        <button>Add to cart</button>
                    </li>
END;
    }
    CloseCon($stmt);
}

?>