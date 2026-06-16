let expenses =
JSON.parse(localStorage.getItem("expenses")) || [];

function saveExpenses(){
localStorage.setItem(
"expenses",
JSON.stringify(expenses)
);
}

function renderExpenses(){

const list =
document.getElementById("expenseList");

list.innerHTML="";

let total=0;

expenses.forEach((expense,index)=>{

total += expense.amount;

list.innerHTML += `

<li>

${expense.name}
(${expense.category})

- ₹${expense.amount}

<div>

<button onclick="editExpense(${index})">
Edit
</button>

<button onclick="deleteExpense(${index})">
Delete
</button>

</div>

</li>

`;
});

document.getElementById(
"totalAmount"
).innerText=`Total: ₹${total}`;

document.getElementById(
"totalEntries"
).innerText =
expenses.length;

updateChart();

}

function addExpense(){

const name=
document.getElementById("expenseName").value;

const amount=
parseFloat(
document.getElementById("expenseAmount").value
);

const category=
document.getElementById("expenseCategory").value;

if(name && amount){

expenses.push({
name,
amount,
category
});

saveExpenses();
renderExpenses();

}

}

function deleteExpense(index){

expenses.splice(index,1);

saveExpenses();

renderExpenses();

}

renderExpenses();

function editExpense(index){

const newName =
prompt(
"Edit Expense Name",
expenses[index].name
);

const newAmount =
prompt(
"Edit Amount",
expenses[index].amount
);

expenses[index].name=newName;
expenses[index].amount=parseFloat(newAmount);

saveExpenses();
renderExpenses();

}

document.getElementById(
"searchExpense"
).addEventListener("keyup",function(){

const value =
this.value.toLowerCase();

const items =
document.querySelectorAll("#expenseList li");

items.forEach(item=>{

item.style.display =
item.innerText
.toLowerCase()
.includes(value)

? "flex"

: "none";

});

});

const budget =
parseFloat(
document.getElementById("budget").value
);

if(budget && total > budget){

alert(
"⚠ Budget Limit Exceeded!"
);

}

function updateChart(){

const categories={};

expenses.forEach(exp=>{

categories[exp.category]=
(categories[exp.category]||0)
+ exp.amount;

});

new Chart(
document.getElementById(
"expenseChart"
),
{
type:"pie",

data:{

labels:
Object.keys(categories),

datasets:[{

data:
Object.values(categories)

}]

}

});

}