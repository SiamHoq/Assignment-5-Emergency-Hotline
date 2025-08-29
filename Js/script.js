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

// call button

let coins = 100;
let callHistory = [];

const coinDisplay = document.getElementById("coin-number");


const callButtons = document.querySelectorAll(".call-btn");

callButtons.forEach(button => {
  button.addEventListener("click", function () {
    if (coins >= 20) {
      coins -= 20;
      coinDisplay.innerText = coins;

      const parentDiv = this.closest(".parent-div");
      const serviceName = parentDiv.querySelector("h1");

    const serviceNumber = parentDiv.querySelector(".service-number");

      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
      const callHistoryObj = {
        name: serviceName.innerText,
        number: serviceNumber.innerText,
        date: now.toLocaleTimeString([], options).toUpperCase(),
      };

      callHistory.push(callHistoryObj);

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


      alert(`Calling to: ${serviceName.innerText} - ${serviceNumber.innerText}`);

    } else {
      alert("Alert! Your coin is less than 20");
    }
  });
});


// Clear button feature
document.getElementById("btn-clear").addEventListener('click', function () {
  document.getElementById("call-history-content").innerHTML = "";
  callHistory = [];
});


let copyClickCounter = 0; 

const copies = document.getElementsByClassName("copy-btn");  

for (const copy of copies){  
  copy.addEventListener("click", function () {  

    copyClickCounter++;
    document.getElementById("copy-count").innerText = copyClickCounter;  

    const parentDiv = this.parentElement.parentElement;  

    const serviceNumber = parentDiv.querySelector(".service-number").innerText; 

    navigator.clipboard.writeText(serviceNumber);  

    alert("Service Number Copied")  
 
  })
}
