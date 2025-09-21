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

const JOKE_API = "https://official-joke-api.appspot.com/random_joke";

const user =  fetch(JOKE_API);

// console.log(user);

user.then(function (data){
  console.log(data)
})