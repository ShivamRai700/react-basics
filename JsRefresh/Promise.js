const cart = ["shirt","shorts","boxer","sneakers"];

const Cash = 10000;

createOrder(cart)
.then(function(orderId){
  console.log("Your order Id is : \n",orderId)
  return proceedToPayment(orderId);
})
.then(function(paymentInfo){
  console.log("Payment Info : ",paymentInfo)
  return showOrderSummary(paymentInfo);
})
.then(function(walletBalance){
  console.log( "You have to pay : ", walletBalance);
  return updateWallet(walletBalance);
})
.then(function(balance){
  console.log( "Your available balance is : ", Cash - balance,"\nafter deducting from ",Cash);
})
.catch(function (err){
  console.log(err);
})

// Promise to Create Order
function createOrder(cart){
  return new Promise((resolve,reject)=>{
    const items = {
      "shirt" : 288,
      "shorts" : 899,
      "boxer" :300,
      "sneakers": 999
    }
    const order = {};
    for (const item in items) {
      if (cart.includes(item)){
        order[item] = items[item];
      } else{
        order[item] = 0;
      }
    }

    if(cart.length !== 0){
      resolve(order);
    }
    else {
      reject("Cart is empty");
    }
  })
}


//Promise to Proceed to Payment
function proceedToPayment(orderId){
  return new Promise((resolve,reject)=>{

    const total = Object.values(orderId).reduce((acc,value)=>acc += value,0)

    if(orderId){
      setTimeout(()=>{
        resolve(total);
      },1000);
    }else{
      reject("Cannot proceed to Payment");
    }
  })
}

// Promise to show order summary
function showOrderSummary(paymentInfo){
  return new Promise((resolve,reject)=>{
    if(paymentInfo >= 0){
      resolve(paymentInfo);
    }else{
      reject("No need to pay")
    }
  })
}

// promise to update wallet
function updateWallet(wallet){
  return new Promise((resolve,reject)=>{
    if(wallet){
      resolve(wallet)
    }else{
      reject("No change in balance")
    }
  })
}
