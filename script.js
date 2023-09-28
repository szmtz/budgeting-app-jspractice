const budget = 3200; 
const savingPriority = "high"; 
const rent = 1100; 
const utilities = 370; 

const newLaptop = 1200; 

const totalCosts = rent + utilities; 

const budgetLeft = budget - totalCosts; 

const buyLaptop = budgetLeft >= newLaptop; 

console.log("New Laptop Within Budget: "); 
console.log(buyLaptop); 

console.log("Postpone Purchase and Save Instead:"); 

console.log(savingPriority == "high"); 
