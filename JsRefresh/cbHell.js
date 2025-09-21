// e-commerce cart problem showing problem with callback i.e. callback hell

// const cart = ["shoes","pants","kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment ( function (){
//     api.showOrderSummary(
//       function (){
//         api.updateWallet();
//       }
//     )
//   })
// })

// Promises

// const JOKE_API = "https://official-joke-api.appspot.com/random_joke";

// const user =  fetch(JOKE_API);

// // console.log(user);

// user.then(function (data){
//   console.log(data)
// })

const cart = ["shoes", "pants", "Caps"];

// promise consumption
const promise = createOrder(cart); // orderId;

promise.then(function (orderId) {
  // proceedToPayment(orderId)
  console.log(orderId)
})
.catch(function (err) {
  console.log(err.message);
})
  .then(function (orderId) {
    return proceedToPayment(orderId)
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })

// promise creation
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    // validateCart
    // orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    // logic for createOrder
    const orderId = "12345"
    if (orderId) {
      resolve(orderId)
    }
  })

  return pr;
}

function validateCart(cart) {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  })
}