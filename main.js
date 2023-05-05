const txtFullName = document.getElementById("fullName");
const txtEmail = document.getElementById("email");
const txtConfirmEmail = document.getElementById("confirmEmail");
const txtPhoneNumber = document.getElementById("phoneNumber");
const btnPlaceOrder = document.getElementById("placeOrder");
const txtCustomerOrderOutput = document.getElementById("customerDetails");
const btnAddToFav = document.getElementById("addToFav");

const plus1 = document.querySelector(".plus1"),
  minus1 = document.querySelector(".minus1"),
  num1 = document.querySelector(".num1");

const plus2 = document.querySelector(".plus2"),
  minus2 = document.querySelector(".minus2"),
  num2 = document.querySelector(".num2");

const plus3 = document.querySelector(".plus3"),
  minus3 = document.querySelector(".minus3"),
  num3 = document.querySelector(".num3");

const plus4 = document.querySelector(".plus4"),
  minus4 = document.querySelector(".minus4"),
  num4 = document.querySelector(".num4");

const plus5 = document.querySelector(".plus5"),
  minus5 = document.querySelector(".minus5"),
  num5 = document.querySelector(".num5");

let slChildCount;
let slAdultCount;
let foreignerAdultCount;
let foreignerChildCount;
let infantCount;
let SLAdultPaas;
let SLChildPass;
let foreignerAdultPass;
let foreignerChildPass;
let infantPass;
let total;
let overallTotal;
let loyaltyPoints;

window.addEventListener("load", () => {
  slChildCount = 0;
  slAdultCount = 0;
  foreignerAdultCount = 0;
  foreignerChildCount = 0;
  infantCount = 0;
  overallTotal = 0;
  loyaltyPoints = 0;
  SLAdultPaas = 1200.0;
  SLChildPass = 700.0;
  foreignerAdultPass = 5500.0;
  foreignerChildPass = 2700.0;
  total =
    slAdultCount * SLAdultPaas +
    slChildCount * SLChildPass +
    foreignerAdultCount * foreignerAdultPass +
    foreignerChildCount * foreignerChildPass;
});

//SL Parent Count
plus1.addEventListener("click", () => {
  slAdultCount++;
  num1.innerHTML = slAdultCount;
});

minus1.addEventListener("click", () => {
  if (slAdultCount > 0) {
    slAdultCount--;
    num1.innerHTML = slAdultCount;
  }
});

//SL Child Count
plus2.addEventListener("click", () => {
  slChildCount++;
  num2.innerHTML = slChildCount;
});

minus2.addEventListener("click", () => {
  if (slChildCount > 0) {
    slChildCount--;
    num2.innerHTML = slChildCount;
  }
});

//Foreigner Adult Count
plus3.addEventListener("click", () => {
  foreignerAdultCount++;
  num3.innerHTML = foreignerAdultCount;
});

minus3.addEventListener("click", () => {
  if (foreignerAdultCount > 0) {
    foreignerAdultCount--;
    num3.innerHTML = foreignerAdultCount;
  }
});

//Foreigner Child Count
plus4.addEventListener("click", () => {
  foreignerChildCount++;
  num4.innerHTML = foreignerChildCount;
});

minus4.addEventListener("click", () => {
  if (foreignerChildCount > 0) {
    foreignerChildCount--;
    num4.innerHTML = foreignerChildCount;
  }
});

//Foreigner Child Count
plus5.addEventListener("click", () => {
  infantCount++;
  num5.innerHTML = infantCount;
});

minus5.addEventListener("click", () => {
  if (infantCount > 0) {
    infantCount--;
    num5.innerHTML = infantCount;
  }
});

btnPlaceOrder.addEventListener("click", () => {
  const fullName = txtFullName.value;
  const email = txtEmail.value;
  const confirmEmail = txtConfirmEmail.value;
  const phoneNumber = txtPhoneNumber.value;
  console.log(phoneNumber);
  if (fullName === "") {
    alert("Please enter your full name");
  } else if (email === "") {
    alert("Please enter your email address");
  } else if (confirmEmail === "") {
    alert("Please confirm your email address");
  } else if (email !== confirmEmail) {
    alert("Email addresses do not match");
  } else if (phoneNumber === "") {
    alert("Please enter your phone number");
  } else {
    total =
      slAdultCount * SLAdultPaas +
      slChildCount * SLChildPass +
      foreignerAdultCount * foreignerAdultPass +
      foreignerChildCount * foreignerChildPass +
      infantCount * 0;
    txtCustomerOrderOutput.innerHTML = `Full Name: ${fullName} <br> Email: ${email} <br> Phone Number: ${phoneNumber} <br><br> Total: ${total} <br> SL Adults: ${slAdultCount} <br> SL Childs: ${slChildCount} <br> Foreigner Adults: ${foreignerAdultCount} <br> Foreigner Childs: ${foreignerChildCount} <br> Infants: ${infantCount}`;

    alert("Thank you for your order!");
  }
});
const duration = document.getElementById("duration");
let fav = [];
// console.log(fav);
btnAddToFav.addEventListener("click", () => {
  if (duration.value === "3 Hours") {
    SLAdultPaas = 1200.0;
    SLChildPass = 700.0;
    foreignerAdultPass = 5500.0;
    foreignerChildPass = 2700.0;

    overallTotal =
      slAdultCount * SLAdultPaas +
      slChildCount * SLChildPass +
      foreignerAdultCount * foreignerAdultPass +
      foreignerChildCount * foreignerChildPass;
  }

  if (duration.value === "12 Hours") {
    SLAdultPaas = 1200.0 + 350.0;
    SLChildPass = 700.0 + 350.0;
    foreignerAdultPass = 5500.0 + 450.0;
    foreignerChildPass = 2700.0 + 450.0;

    overallTotal =
      slAdultCount * SLAdultPaas +
      slChildCount * SLChildPass +
      foreignerAdultCount * foreignerAdultPass +
      foreignerChildCount * foreignerChildPass;
  }

  if (duration.value === "24 Hours") {
    SLAdultPaas = 1200.0 + 600.0;
    SLChildPass = 700.0 + 600.0;
    foreignerAdultPass = 5500.0 + 800.0;
    foreignerChildPass = 2700.0 + 800.0;

    overallTotal =
      slAdultCount * SLAdultPaas +
      slChildCount * SLChildPass +
      foreignerAdultCount * foreignerAdultPass +
      foreignerChildCount * foreignerChildPass;
  }

  fav.push({
    LocalAdults: slAdultCount,
    LocalChilds: slChildCount,
    ForeignAdults: foreignerAdultCount,
    ForeignChilds: foreignerChildCount,
    Infants: infantCount,
    Duration: duration.value,
    Total: overallTotal,
  });

  let favJSON = JSON.stringify(fav[fav.length - 1]);
  console.log(favJSON + ": Added to Favourites");

  localStorage.setItem("favourites", favJSON);
  (slAdultCount = 0),
    (slChildCount = 0),
    (foreignerAdultCount = 0),
    (foreignerChildCount = 0),
    (infantCount = 0);
  (num1.innerHTML = 0),
    (num2.innerHTML = 0),
    (num3.innerHTML = 0),
    (num4.innerHTML = 0),
    (num5.innerHTML = 0);
  total = 0;
});

const displayFav = document.getElementById("favOrderDetails");
const orderFav = document.getElementById("orderFav");
orderFav.addEventListener("click", () => {
  let JSONFav = localStorage.getItem("favourites");
  let JSFav = JSON.parse(JSONFav);
  // console.log(JSONFav);
  // console.log(JSFav);
  displayFav.innerHTML = `Local Adults: ${JSFav.LocalAdults} <br> Local Childs: ${JSFav.LocalChilds} <br> Foreign Adults: ${JSFav.ForeignAdults} <br> Foreign Childs: ${JSFav.ForeignChilds} <br> Infants: ${JSFav.Infants} <br> Duration: ${JSFav.Duration} <br> Total: ${JSFav.Total}`;
});

//a “check loyalty” button needed to be added to the interface, when the button is pressed the earned loyalty points need to be displayed to the user.
//if the number of items in the overall order are greater than 3, 15 loyalty points are awarded per item and it is stored in the local storage and displayed to the user.
//use head counter to count the number of items in the overall order.
let loyaltyTotal = 0;
const checkLoyalty = document.getElementById("checkLoyalty");
checkLoyalty.addEventListener("click", () => {
  loyaltyTotal =
    slAdultCount +
    slChildCount +
    foreignerAdultCount +
    foreignerChildCount +
    infantCount;
  console.log(loyaltyTotal);
  if (loyaltyTotal > 3) {
    let loyaltyPoints = loyaltyTotal * 15;
    alert(`You have ${loyaltyPoints} loyalty points`);
  } else {
    alert("You have no loyalty points");
  }
});
