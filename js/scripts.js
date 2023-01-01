$(document).ready(function(){

  //alert("test");

    // checks to see if color theme preference has been stored and color accordingly, if not set to default
  var current_color_theme = sessionStorage.getItem("color_theme");

  if (current_color_theme == 'dark'){
    $(".switch-color").html("<i class='fas fa-adjust'></i> Switch to light");
    $('body').addClass('body-dark');
  } else if (current_color_theme == 'light') {
    $(".switch-color").html("<i class='fas fa-adjust'></i> Switch to dark");
    $('body').removeClass('body-dark');
  } else {
    // if nothing has been stored set color theme to dark and store the setting
      $(".switch-color").html("<i class='fas fa-adjust'></i> Switch to light");
      $('body').removeClass('body-dark');
      new_color_theme = 'light';
      sessionStorage.setItem("color_theme", new_color_theme);
  }

    // if user wishes to change the color theme click
    $('.switch-color').click(function(event){

      var current_color_theme = sessionStorage.getItem("color_theme");

      // check what the color theme is currently and change to the opposite
      if (current_color_theme == 'dark'){
        // change the button name and remove css class
        $(".switch-color").html("<i class='fas fa-adjust'></i> Switch to dark");
        $('body').removeClass('body-dark');
        // store preference
        new_color_theme = 'light';
        sessionStorage.setItem("color_theme", new_color_theme);
      } else if (current_color_theme == 'light') {
        // change the button name and remove css class
        $(".switch-color").html("<i class='fas fa-adjust'></i> Switch to light");
        $('body').addClass('body-dark');
        // change the button name and remove css class
        new_color_theme = 'dark';
        sessionStorage.setItem("color_theme", new_color_theme);
      } else {
        // if nothing has been stored set color theme to dark and store the setting
          $(".switch-color").html("<i class='fas fa-adjust'></i> Switch to light");
          $('body').addClass('body-dark');
          new_color_theme = 'light';
          sessionStorage.setItem("color_theme", new_color_theme);
      }


    });



});
