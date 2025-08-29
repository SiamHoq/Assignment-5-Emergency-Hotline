console.log("working...")

let heartCount = 0;

const heartCountClick = document.getElementsByClassName("fa-regular");
for(const heart of heartCountClick){
    heart.addEventListener('click', function(){
        heartCount++;
        console.log(heartCount)
        document.getElementById('heart-num').innerText= heartCount;
    })
}



// const call = document.getElementsByClassName('call-btn')

// for (const callbtn of call) {
//   callbtn.addEventListener("click", function () {
//     const coin = parseInt(document.getElementById("coin-number").innerText);
// })

// }

// Initial coin balance
let coins = 100;
let callHistory = [];

// Select coin amount display
const coinDisplay = document.getElementById("coin-number");

// Select all call buttons
const callButtons = document.querySelectorAll(".call-btn");
// const callButtons = document.querySelectorAll("call-btn");

// Loop through each Call button
callButtons.forEach(button => {
  button.addEventListener("click", function () {
    // Check if enough coins
    if (coins >= 20) {
      // Deduct 20 coins
      coins -= 20;
      coinDisplay.innerText = coins;

      // Get service name & number from card
      const parentDiv = this.closest(".parent-div"); // safer than parentElement twice
      const serviceName = parentDiv.querySelector("h1");
    //   const serviceNumber = parentDiv.querySelector("h2");
    const serviceNumber = parentDiv.querySelector(".service-number");

      // Make call history object with current time
      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const callHistoryObj = {
        name: serviceName.innerText,
        number: serviceNumber.innerText,
        date: now.toLocaleTimeString([], options).toUpperCase(),
      };

      // Save into history array
      callHistory.push(callHistoryObj);

      // Re-render call history UI
      const historyContainer = document.getElementById("call-history-content");
      historyContainer.innerHTML = "";
      for (const call of callHistory) {
        const div = document.createElement("div");
        div.classList.add("w-full", "flex", "items-center", "justify-between", "bg-[#FAFAFA]", "p-[16px]");
        div.innerHTML = `
          <div>
            <h1 class="text-[18px] font-bold">${call.name}</h1>
            <p class="text-[18px]">${call.number}</p>
          </div>
          <div>
            <h1 class="text-[18px]">${call.date}</h1>
          </div>
        `;
        historyContainer.appendChild(div);
      }

      // Alert user
      alert(`Calling to: ${serviceName.innerText} - ${serviceNumber.innerText}`);

    } else {
      // Not enough coins
      alert("Alert! Your coin is less than 20");
    }
  });
});

// Clear button feature
document.getElementById("btn-clear").addEventListener('click', function () {
  document.getElementById("call-history-content").innerHTML = "";
  callHistory = [];
});
