<?php


function confirmQuery($result){
  global $conn;
  if(!$result){
    die("Query failed. " . mysqli_error($conn)); // prøv $conn->connect_error
  } else {
    return true;
  }
}




 ?>
