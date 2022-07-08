const prompt = require("prompt-sync")({sigint:true});

let currentList = [];
let completedTask = 0;

let areTodosComplete = [];
let isComplete = false;

let statsArray = [];
let status = "";
let yesStat = "- [complete] -";
let noStat = "[incomplete]";

console.log("");
console.log("Welcome: This is your to do list manager");
console.log("________________________________________________");
console.log("");

while (selection !== 3){
    if (todoList.length <= 0){
            console.log("Your zero items currently in your to-do list!");
    }
    console.log("~~ Select from your options: ~~");
    
    console.log("");
    
    console.log("[1] Create a to-do item ");
    
    console.log("[2] Complete an item ");
    
    console.log("[3] Exit application ");
    
    console.log("")
;
    selection = Number(prompt("> "));
    console.log("");

    if (selection !== 1 && selection !== 2 && selection !== 3){
            console.log("________________________________________________");
    }

    if (selection === 1){
        console.log("You chose to crete a task for your to-do list. ");
        console.log("What task would you like to create? ");
        add = prompt("> ");
        todoList.push(add);
        console.log("________________________________________________");
        console.log("You have " + Number(todoList.length) + " tasks in your to-do list. ");

        for(let i = 0; i < todoList.length; i++){
                completed[todoList.length -1] = false;

                if (completed[todoList.length - 1] === false){
                        status[i] = "[Incomplete] ";
                }
                else if (complete[todoList.length - 1] === true){
                        status[i] = "[Complete] ";
                }

        console.log(Number(i + 1) + "." + status[i] + todoList[i]);
        // console.log("________________________________________________");

        }
    }
