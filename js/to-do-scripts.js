$(document).ready(function () {
  var allTasks = [];
  $("form#new-task").submit(function(event) {
    event.preventDefault();
    var inputtedDescription = $("input#new-description").val();
    var newTask = { descript: inputtedDescription, completed: false};
    allTasks.push(newTask);

    $("ul#completed").empty();
    $("ul#uncompleted").empty();

    allTasks.forEach(function(task) {
      if (task.completed === true) {
        $("ul#completed").append("<li>" + task.descript + "</li>");
      } else {
        $("ul#uncompleted").append("<li><span class='uncompleted'>" + task.descript + "</span></li>");
        $(".uncompleted").last().click(function() {
          task[completed] === true;
          $("ul#completed").append("<li>" + task.descript + "</li>");
        });
      }
    });
    $("input#new-description").val("");
  });
});
