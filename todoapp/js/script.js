function TodoList() {
  if (localStorage.getItem("todo-count")) {
    this.todoCount = localStorage.getItem("todo-count");
  } else {
    this.todoCount = 0;
  }
};

TodoList.prototype.addTodo = function(value) {
  this.todoCount++;
  localStorage.setItem("todo-count", this.todoCount);

  localStorage.setItem(this.todoCount, value);
  return "Yeni Todo oluşturuldu. ID: " + this.todoCount;
};

TodoList.prototype.getTodo = function(key) {
  if (localStorage.getItem(key)) {
    return localStorage.getItem(key);
  } else {
    return;
  }
};

TodoList.prototype.removeTodo = function(key) {
  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    return key + " ID'li Todo silindi.";
  } else {
    return "Böyle bir Todo bulunamadı.";
  }
};

TodoList.prototype.getTodoCount = function() {
  return this.todoCount;
};


var t = new TodoList();

var todoRender = function() {
  $(".todoList").html("");

  for (var i = 1; i <= t.getTodoCount(); i++) {
    var todo = t.getTodo(i);

    if (todo) {
      $(".todoList").append("<li>" + todo + " <a class='todoRemove' href='#' data-key='" + i + "'>X</a></li>");
    }
  }
};

todoRender();

$(".todoForm").on("submit", function(event) {
  event.preventDefault();

  var formVar = $(".todoInput").val();

  if (formVar == "") {
    alert("Lütfen bir Todo girin.");
  } else {
    t.addTodo(formVar);
    todoRender();
    $(".todoInput").val("").focus();
    alert("Todo oluşturuldu.");
  }
});

$(document).on("click", ".todoRemove", function(event) {
  event.preventDefault();

  var key = $(this).attr("data-key");
  t.removeTodo(key);
  todoRender();
  alert("Todo silindi.");
});
