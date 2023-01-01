<?php include "includes/no_framework_header.php"; ?>
<?php include "includes/no_framework_navigation.php"; ?>

 <!-- Everything beneath the 2 overhead navigation bars -->
 <div class="row row-body">


<!-- col-md-2 this is the sidebar navigation -->
<?php include "calendar/calendar_sidebar.php"; ?>

<!-- col-md-10 -->
<?php

if(isset($_GET['source'])){

  $goto_source = $_GET['source'];

  switch ($goto_source) {
    case 'statistics':
      include "calendar/calendar_statistics.php";
      break;
    case 'day':
      include "calendar/view_day.php";
      break;
    case 'month':
      include "calendar/view_month.php";
      break;
    case 'year':
      include "calendar/view_year.php";
      break;
    case 'add':
      include "calendar/add_event.php";
      break;
    case 'edit':
      include "calendar/edit_event.php";
      break;
    default:
      include "calendar/view_week.php";
      break;
  }

} else {
  // default page
  include "calendar/view_week.php";
}


 ?>



</div>

<?php include "includes/no_framework_footer.php"; ?>
