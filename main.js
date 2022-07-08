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