<?php
function OpenCon()
{
  $dbhost = "localhost:3306";
  $dbuser = "root";
  $dbpass = "";
  $db = "web-project";

  $prodconn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $prodconn -> error);

  return $prodconn;
}

function CloseCon($prodconn)
{
  $prodconn -> close();
}
?>
