var input = document.querySelector("input");
var pair_task_box = document.querySelector(".pair_task_box");
var add = document.querySelector(".add");
var no_tasks = document.querySelector(".no_tasks"); 
var form = document.querySelector("form");

console.log(form);

window.onload = function () {
    input.focus();
}

function addtasks() {
    if(input.value == ""){
        alert("inter your task");
    }else{
        no_tasks.style.display = "none";

        // create the main div
        var div = document.createElement("div");
        div.setAttribute("class" , "tasks_box");

        // create the the element it will contan the input value
        var span_el = document.createElement("span");
        span_el.setAttribute("class" , "task_el");
        span_el.innerHTML = input.value;
        //create delete button
        var span_delete = document.createElement("span");
        span_delete.setAttribute("class" , "delete");
        span_delete.innerHTML = "Delete";

        //create finished button
        var span_finish = document.createElement("span");
        span_finish.setAttribute("class" , "finish_btn");
        span_finish.innerHTML = "Finish";

        //appending children
        div.appendChild(span_el);
        div.appendChild(span_delete);
        div.appendChild(span_finish);
        //appending main div in main html element it had created before
        pair_task_box.appendChild(div);

        // empty the input field after submit
        input.value = "";
    }
}

// Run the function whene submit form
form.addEventListener("submit" , function (e) {
    e.preventDefault();
    addtasks();
})

// Run the function whene click the add button
add.addEventListener("submit" , function (e) {
    addtasks();
})

// run the delete button function
document.addEventListener("click" , function(e){    
    // لو العنصر اللي دوست عليه بيحتوي علي كلاس بالاسم دا هات الاب بتاعه  وامسحه 
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove(); // الاب 
    }

     // لو العنصر اللي دوست عليه بيحتوي علي كلاس بالاسم دا هات الاب بتاعه وضيف عليه الكلاس دا 
    if(e.target.classList.contains("finish_btn")){
        e.target.parentElement.classList.toggle("finish"); // الاب

        // كوندشن بسيط لتغيير محتوش زرار الفنش (innerHTML)
            if(e.target.parentElement.classList.contains("finish")){
                e.target.innerHTML = "not finish"
            }else{
                e.target.innerHTML = "finish"
            }
    }

    // simple if condation for switch between NOTASKS message
    if(document.querySelectorAll(".tasks_box").length == 0){
        no_tasks.style.display = "block";
    }else{
        no_tasks.style.display = "none";
    }
})
