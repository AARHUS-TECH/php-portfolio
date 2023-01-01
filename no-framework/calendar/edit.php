<?php

if(isset($_GET['edit'])){
  
}



if(isset($_GET['to_this_date'])) {

}

if(isset($_POST['add_data'])) {
  $event_date = $_POST['date'];
  $time_start = $_POST['time_start'];
  $title = $_POST['title'];
  $content = $_POST['content'];

  $sql = "INSERT INTO calendar(event_date, time_start, title, content) ";
  $sql .= "VALUES ('{$event_date}', '{$time_start}', '{$title}', '{$content}') ";

  $add_event_q = $no_fr_conn->query($sql);

  if(confirmQuery($add_event_q)){



  }


  $announce = "Event titled '{$title}' has been created successfully";

} else {
  $announce = '';
}





 ?>


<div class="col-md-10 body-column-center">

<h1>Edit an event</h1>
<label class="announce" for=""><?php echo $announce; ?></label>

<hr>
<form class="" action="" method="post">
  <div class="form">


    <div class="form-group">
      <label class="">Date</label>
      <br>
      <input type="date" class="" name="date" value="">
    </div>

    <div class="form-group">
      <label for="">Time (6:00-23:00)</label>
      <br>
      <input type="time" class="" name="time_start" min="06:00" max="23:00" value="">
    </div>

    <div class="form-group">
      <label for="">Title</label>
      <input type="text" class="form-control" name="title" value="" required>
    </div>

    <div class="form-group">
      <label for="">Content</label>
      <textarea type="text" class="form-control" name="content" id="" cols="30" rows="7">
      </textarea>
    </div>

    <input type="hidden" name="confirmation" value="set">

    <div class="form-group">
      <input type="submit" class="btn btn-primary" name="add_data" value="Add">
    </div>
    <!-- <div class="form-group">
      <input type="submit" class="btn btn-success" name="add_dummy" value="Add dummy date and time">
    </div> -->

  </div>
</form>

</div>
