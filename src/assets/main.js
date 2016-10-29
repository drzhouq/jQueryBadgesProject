$(function() {
        $.ajax({url:'https://www.codeschool.com/users/131425.json',
                        dataType:'jsonp',
                        success: function(result) {
                                $.each(result.courses.completed, function(index, courseCompleted) {
                                        var badge = $('<div></div>');
                                        badge.addClass('course');
                                        var title = $('<h3></h3>');
                                        title.text( courseCompleted.title);
                                        var image = $('<img></img>');
                                        image.attr('src', courseCompleted.badge);
                                        var button =$('<a></a>');
                                        button.text('See Course');
                                        button.attr('href',courseCompleted.url);
                                        button.attr('target','_blank');
                                        button.addClass('btn').addClass('btn-Primary');
                                        badge.append(title);
                                        badge.append(image);
                                        badge.append(button);
                                        $('#badges').append(badge);
                                });

                        }
                        });
  // your code will go here

});
