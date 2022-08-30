const plusProductNumber = document.querySelector(".count-number-product-cpn .plus"),
minusProductNumber = document.querySelector(".count-number-product-cpn .minus"),
numberProductToBuy = document.querySelector(".count-number-product-cpn .num");
let a = numberProductToBuy.value;
plusProductNumber.addEventListener("click", ()=>{
  a++;
  numberProductToBuy.value = a;
});

minusProductNumber.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    numberProductToBuy.value = a;
  }
});
numberProductToBuy.addEventListener("blur", ()=>{
  if(numberProductToBuy.value < 0){
    numberProductToBuy.value = 1
    a = numberProductToBuy.value;
  } else {
    a = numberProductToBuy.value;
  }
  // console.log(numberProductToBuy.value)
});