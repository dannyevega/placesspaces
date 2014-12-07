$(document).ready(function() {
  $('#add_location').on('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: '/home',
      type: 'POST',
      data: $(this).serialize()
    }).done(function(response){
      $('#insert').append('<li><a href="">' + response.destination + '</a></li><button class="button" type="button">I\'ve been here</button><br><br>');
    })
  })

  $('#insert').on('click', 'a', function(e){
      e.preventDefault();
      codeAddress(this.text)
    })

  $('.visited').on('click', function(e){
    e.preventDefault();
    $.ajax({
      url: "/destinations/" + this.id + "/update",
      type: 'POST'
    }).success(function(response){
      window.location.reload();
    })
  })

});
