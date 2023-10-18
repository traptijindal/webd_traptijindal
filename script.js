let totalAmount=document.getElementById("total-amount");
let userAmount=document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle =document.getElementById("product-title");
const errorMessage= document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError =document.getElementById("product-cost-error");
const amount=document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceamount = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount= 0;
totalAmountButton.addEventListener("click",()=>{
    tempAmount=totalAmount.value;
    if(tempAmount === ""||tempAmount<0){
        errorMessage.classList.remove("hide");
    }
    else{
        errorMessage.classList.add("hide");
        amount.innerHTML = tempAmount;
        balanceamount.innerText= tempAmount-expenditureValue.innerText;
        totalAmount.value="";
    }
});


    let editButtons=document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element )=>{
        
    });



const listCreator = (expenseName,expenseValue) => {
    let sublistContent  = document.createElement("div");
    sublistContent.classList.add("sublist-content","flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML =`<p class ="product-title">${expenseName}
    </p><p class = "amount">
    ${expenseValue}</p>`;
    document.getElementById("list").appendChild(sublistContent);
};
checkAmountButton.addEventListener("click",()=>{
    if(!userAmount.value||!productTitle.value){ 
    productTitleError.classList.remove("hide");
    return false;
}

   let expenditure = parseInt(userAmount.value);
   let sum = parseInt(expenditureValue.innerText) + expenditure;
   expenditureValue.innerText = sum;
   const totalBalance = tempAmount - sum;
   balanceamount.innerText = totalBalance;
   listCreator(productTitle.value,userAmount.value);
   productTitle.value="";
   userAmount.value="";
});





