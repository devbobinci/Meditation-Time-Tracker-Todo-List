const time = document.getElementById("time");

var startBtn = document.getElementById("start");
var buttonSection = document.querySelector(".button__section");
var clock = document.getElementById("clock");

// var alarm = new Audio("./sounds/calm_alarm.mp3");

// ======= start timer function ======

let timer = 0;
var startCounting;

function startTimer() {
  startCounting = setInterval(start, 1000);
}

function start() {
  timer++;

  var seconds = timer;
  var minutes = seconds % 60;
  var howManyMinutes = Math.floor(seconds / 60);
  var howManyHours = Math.floor(howManyMinutes / 60);

  // ======== SECONDS ========

  if (seconds < 10) {
    time.innerHTML = `0${howManyMinutes}` + `:0${seconds}`;
  } else {
    time.innerHTML = `0${howManyMinutes}` + `:${seconds}`;
  }

  if (seconds > 59) {
    time.innerHTML = `0${howManyMinutes}` + `:0${minutes}`;

    if (minutes > 9) {
      time.innerHTML = `0${howManyMinutes}` + `:${minutes}`;
    }
  }

  // ======== MINUTES ========

  if (howManyMinutes > 9) {
    time.innerHTML = `${howManyMinutes}` + `:0${minutes}`;

    if (minutes > 9) {
      time.innerHTML = `${howManyMinutes}` + `:${minutes}`;
    } else {
      time.innerHTML = `${howManyMinutes}` + `:0${minutes}`;
    }

    if (howManyMinutes > 20) {
      document.body.classList.add("promodoro");
    }

    // ========= HOURS =========

    if (howManyMinutes > 59) {
      time.innerHTML =
        `0${howManyHours}:` + `0${howManyMinutes % 60}:` + `0${minutes}`;

      if (howManyMinutes % 60 > 9) {
        time.innerHTML =
          `0${howManyHours}:` + `${howManyMinutes % 60}:` + `${minutes}`;
      } else {
        time.innerHTML =
          `0${howManyHours}:` + `0${howManyMinutes % 60}:` + `${minutes}`;
      }

      if (minutes > 9 && howManyMinutes % 60 < 10) {
        time.innerHTML =
          `0${howManyHours}:` + `0${howManyMinutes % 60}:` + `${minutes}`;
      } else if (howManyMinutes % 60 > 9 && minutes < 10) {
        time.innerHTML =
          `0${howManyHours}:` + `${howManyMinutes % 60}:` + `0${minutes}`;
      } else if (howManyMinutes % 60 < 10 && minutes < 10) {
        time.innerHTML =
          `0${howManyHours}:` + `0${howManyMinutes % 60}:` + `0${minutes}`;
      }
    }

    if (howManyHours > 9) {
      time.innerHTML =
        `${howManyHours}:` + `0${howManyMinutes % 60}:` + `0${minutes}`;
    }
  }
  // ======== TITLE TIME =========

  var titleContent = (document.getElementById("title").innerHTML =
    time.innerHTML + " - Meditate Time Tracker");
  window.document.title = titleContent;
}

function startFunction() {
  buttonSection.appendChild(pauseBtn);
  buttonSection.appendChild(resetBtn);

  startBtn.classList.add("start-clicked");
  resetBtn.classList.remove("reset-clicked");
  pauseBtn.classList.remove("pause-clicked");
  pauseBtn.style.pointerEvents = "all";

  clock.classList.add("timer_start");
  clock.classList.remove("timer_reset");
  clock.classList.remove("timer_pause");

  startBtn.innerHTML = "START";
}

// ========== PAUSE FUNCTION =========
function pauseFunction() {
  clearInterval(startCounting);

  pauseBtn.classList.add("pause-clicked");
  startBtn.classList.remove("start-clicked");

  startBtn.innerHTML = "RESUME";

  clock.classList.add("timer_pause");
  clock.classList.remove("timer_reset");
  clock.classList.remove("timer_start");
}

// ========== RESET FUNCTION =========

var resetBtn = document.createElement("button");
resetBtn.classList.add("reset");
resetBtn.innerHTML = "RESET";

function resetFunction() {
  resetBtn.classList.add("reset-clicked");
  time.innerHTML = "00:00:00";
  timer = 0;

  clearInterval(startCounting);

  startBtn.classList.remove("start-clicked");
  pauseBtn.classList.remove("pause-clicked");
  pauseBtn.style.pointerEvents = "none";

  buttonSection.removeChild(pauseBtn);
  buttonSection.removeChild(resetBtn);

  clock.classList.add("timer_reset");
  clock.classList.remove("timer_start");
  clock.classList.remove("timer_pause");

  startBtn.innerHTML = "START";

  var titleContent = (document.getElementById("title").innerHTML =
    "Meditate Time Tracker");
  window.document.title = titleContent;
}

var pauseBtn = document.createElement("button");
pauseBtn.classList.add("pause");
pauseBtn.innerHTML = "PAUSE";

startBtn.addEventListener("click", () => {
  startTimer();
  startFunction();
  // startPaused();
});

resetBtn.addEventListener("click", resetFunction);
pauseBtn.addEventListener("click", pauseFunction);

// =============CHECKLIST==========
// =============CHECKLIST==========
// =============CHECKLIST==========

var checklist = document.getElementById("checklist");
var todoContainer = document.querySelector(".todos__container");
var todoTask = document.querySelectorAll(".todo__task");

todoTask.forEach((task) => {
  task.addEventListener("click", () => {
    task.classList.toggle("line-through");

    var circle = task.firstChild;
    circle.classList.toggle("fill-circle");

    var check = circle.firstChild;
    check.classList.toggle("checkmark-show");
  });
});

// ========== LIST ==========

checklist.addEventListener("click", () => {
  todoContainer.classList.toggle("show");
});

// ============ NEW TODO FUNCTION ===========
// ============ NEW TODO FUNCTION ===========
// ============ NEW TODO FUNCTION ===========

var logoImg = document.getElementById("logoImg");
var todoCreate = document.getElementById("todoCreate");

logoImg.addEventListener("click", () => {
  todoCreate.classList.toggle("show");
});

var todoList = document.getElementById("todoList");
var newTodoTitle = document.getElementById("newTodoTitle");
var newTodoTask = document.getElementById("newTodoTask");
var addTodoBtn = document.getElementById("addNewTodo");
var createTitle = document.querySelector(".create__title");

// ============ ADD TODO FUNCTION ============

function addtodo() {
  if (newTodoTitle.value == "" || newTodoTask.value == "") {
    createTitle.innerHTML = "it can't be empty";
    createTitle.style.color = "rgb(232,109,109)";
    createTitle.classList.add("shake");

    return;
  } else {
    createTitle.innerHTML = "Add New Todo";
    createTitle.style.color = "#eee";
    createTitle.classList.remove("shake");

    var newCategoryTask = document.createElement("ul");
    var newTitle = document.createElement("h2");
    var newTask = document.createElement("li");

    newCategoryTask.classList.add("new__tasks__list");
    newTitle.classList.add("todo__category");
    newTitle.classList.add("title__created");
    newTask.classList.add("todo__task");
    newTask.classList.add("created");

    newTitle.innerHTML = `${newTodoTitle.value} <img src="./img/new.png" class="new__img" alt="newTodo">`;
    newTask.innerHTML = `<span class="todo__circle"><img class="todo__checkmark" src="./img/icon-check.svg"
    alt="check"></span>${newTodoTask.value}`;

    todoList.appendChild(newCategoryTask);
    newCategoryTask.appendChild(newTitle);
    newCategoryTask.appendChild(newTask);

    var newTodoTasks = document.querySelectorAll(".created");
    var newTodoTitles = document.querySelectorAll(".title__created");

    newTodoTasks.forEach((task) => {
      task.addEventListener("click", () => {
        task.classList.toggle("line-new-through");

        var circle = task.firstChild;
        circle.classList.toggle("fill-new-circle");

        var check = circle.firstChild;
        check.classList.toggle("checkmark-new-show");
      });
    });

    // newTodoTasks.addEventListener("click", () => {
    //   newTodoTasks.classList.toggle("line-new-through");

    //   var circle = newTodoTasks.firstChild;
    //   circle.classList.toggle("fill-new-circle");

    //   var check = circle.firstChild;
    //   check.classList.toggle("checkmark-new-show");
    // });

    newTodoTitle.value = "";
    newTodoTask.value = "";

    var newImg = document.querySelector(".new__img");

    function deleteTodo() {
      var newList = document.querySelector(".new__tasks__list");
      newList.lastChild.remove();
      newList.firstChild.remove();
    }

    newImg.addEventListener("click", deleteTodo);
  }
}

addTodoBtn.addEventListener("click", addtodo);
