// function declaration
function saturdayFun(activity = "roller-skate" ){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun('bathe my dog'));

// function expression
const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}   
console.log(mondayWork("work from home"));

function wrapAdjective(activity = "go to the office." ){
    return `This Monday, I will ${activity}`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective("#");

  console.log(encouragingPromptFunction("a hard worker"));   
  console.log(wrapAdjective()()); 
 
    