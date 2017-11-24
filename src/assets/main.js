$(function() {

  // your code will go here
  $.ajax({
    url:'https://www.codeschool.com/users/NicoMed.json',
    dataType: 'jsonp',
    success: function(response){
      console.log(response);
      var completedCourses= response.courses.completed;
      for (var i = 0; i<completedCourses.length; i++){
        console.log(completedCourses[i]);
        var div = $('<div></div>').appendTo('#badges').addClass('course');
          $('<h3>'+completedCourses[i].title+'</h3>').appendTo(div);
          $('<img></img>').appendTo(div).attr('src',completedCourses[i].badge);
          $('<a></a>').appendTo(div).attr({
                                           'href':completedCourses[i].url,
                                           'target': '_blank'
                                         }).addClass('btn btn-primary').text('See Course');
      }

    }
  });

});
