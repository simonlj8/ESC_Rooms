let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let selectTime = document.getElementById("time");
let selectNumber = document.getElementById("number");
let valueDate = document.getElementById("date").value;

addEventListener("load", async function loadData() {
    const challenges = "https://lernia-sjj-assignments.vercel.app/api/challenges";
    const response = await fetch(challenges);
    const data = await response.json();
    
    challenge = getTopChallenges(data.challenges, 3)
    renderChallenge(challenge);
  });

    function getTopChallenges(data, count){
    const sortedData = data.sort((a, b) => a.rating > b.rating ? -1 : 1);
    
    const sliceend = count
    const topChallenges = sortedData.slice(0, sliceend)
    return topChallenges;
  }
  
  function renderChallenge(data) {
    let ul = document.getElementById("challenges-list");
    ul.innerHTML = "";
  
    for (let i = 0; i < data.length; i++) {
      rating = data[i].rating;
      let type = data[i].type;
    
      const starsTotal = 5;
      const starPercentage = (rating / starsTotal) * 100;
      const starPercentageRounded = Math.round(starPercentage / 10) * 10 + "%";      
  
      let item = `
    <img class="challenge-picture" src=${data[i].image} />
    <h3 class="challenge-title">${data[i].title} (${data[i].type})</h3>
    <div class="challenge-meta">
        <ul class="challenge-rating">
            <div class="stars-outer">
            <div class="stars-inner" style=width:${starPercentageRounded}>
            </div>
            </div>
       </ul>
       <small class="challenge-size">${data[i].minParticipants}-${data[i].maxParticipants} participants </small>
    </div>
       <p class="challenge-description">${data[i].description}</p>    
    `;

    let bookBtn1 = `<a class="challenge-cta" href="#">Book this room</a>`; 
    let bookBtn2 = `<a class="challenge-cta" href="#">Take challenge online</a>`;
    const li = document.createElement("li");
    
    if (type == "online") {
      li.innerHTML = item+bookBtn2;
    } else 
    {
      li.innerHTML = item+bookBtn1;
    }

    li.querySelector(".challenge-cta").addEventListener(
      "click",

      function () {
        let select = document.getElementById("number");
        let min = Number(`${data[i].minParticipants}`);
        let max = Number(`${data[i].maxParticipants}`);

        while (min <= max) {
          select.options[select.options.length] = new Option(
            min + " participants"
          );
          min++;
        }
        document.querySelector(".RoomName1").innerHTML = `${data[i].title}`;
        document.querySelector(".RoomName2").innerHTML = `${data[i].title}`;
        modal.classList.toggle("open");
        overlay.classList.toggle("active");
      }
    );
    li.classList.add("challenges-item");
    ul.append(li);
   
  }
}

document.querySelector(".modal-btn").addEventListener("click", () => {
  let valueDate = document.getElementById("date").value;
  let today = new Date ()
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  var datePlusYear = today.getFullYear()+1+'-'+(today.getMonth()+1)+'-'+today.getDate();

  console.log(datePlusYear)

  if (valueDate < date) {
    alert("Date must be after todays date");
    return false;
  }

  if (valueDate > datePlusYear) {
    alert("Date can not exceed 1 year from todays date");
    return false;
  }

  if (!valueDate) {
    alert("Input must not be empty");
    return false;
  } else {

    async function datefunction () {
      avalibleDate = "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date="+valueDate;
      let response = await fetch(avalibleDate);
      let dateArray = await response.json();

      for (let i = 0; i < dateArray.slots.length; i++) {
        selectTime.options[selectTime.options.length] = new Option(
          dateArray.slots[i]);
      }
  }
    datefunction();

    document.querySelector(".modal-step1").classList.toggle("close", true),
      document.querySelector(".modal-step2").classList.toggle("open", true);
  }
});

document.querySelector(".modal-btn2").addEventListener("click", () => {
  let valueName = document.getElementById("name").value;
  let valueEmail = document.getElementById("email").value;
  let valueDate = document.getElementById("date").value;
  let valueTime = document.getElementById("time").value;
  let valueNumber = document.getElementById("number").value;

  let booking = {name:valueName, email:valueEmail, date:valueDate, time:valueTime, participants: parseInt(valueNumber) };

  console.log(booking)

  if (!valueName || !valueEmail || !valueTime || !valueNumber) {
    alert("Input must not be empty");
    return false;
  } else {

    fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(booking),
})
.then(response => response.json())
.then(booking => {
  console.log('Success:', booking);
})
.catch((error) => {
  console.error('Error:', error);
});
    document.querySelector(".modal-step2").classList.toggle("close"),
    document.querySelector(".modal-step3").classList.toggle("open");
  }
});

//toggle modal
function removeOptions(selectTime, selectNumber) {
  let i, L = selectTime.options.length - 1;
  for(i = L; i >= 0; i--) {
     selectTime.options.remove(i);
  }
  let j, F = selectNumber.options.length - 1;
  for(j = F; j >= 0; j--) {
     selectNumber.options.remove(j);
  }
  document.getElementById("date").value = "";
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
}

function toggleClose() {
document.querySelector(".overlay").classList.toggle("active", false);
document.querySelector(".modal").classList.toggle("open", false);
document.querySelector(".modal-step1").classList.toggle("close", false);
document.querySelector(".modal-step2").classList.toggle("close", false);
document.querySelector(".modal-step2").classList.toggle("open", false);
document.querySelector(".modal-step3").classList.toggle("open", false);

removeOptions(selectTime, selectNumber);
}

document.querySelector(".close-modal").addEventListener("click", function E() {
  toggleClose();
})

document.querySelector(".modal-btn3").addEventListener("click", function F() {
  toggleClose();
})

// mobile menu
document.querySelector(".main-nav-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});