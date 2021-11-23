let value;
let challenge;
ratingFrom = 0;
ratingTo = 5;
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

addEventListener("load", async function loadData() {
  challenges = "https://lernia-sjj-assignments.vercel.app/api/challenges";
  const response = await fetch(challenges);
  const data = await response.json();
  challenge = data.challenges;
  renderChallenge(challenge);
});

// starrating from
document.addEventListener("DOMContentLoaded", () => {
  stars_from = document.querySelectorAll(".rating_from li");
  stars_from.forEach((item) => {
    item.addEventListener("click", function () {
      let rating_from = this.getAttribute("star_rating_from");

      if (rating_from == 1) {
        this.setAttribute("star_rating_from", 0);
      
      } 
      if (rating_from == 0) {
        this.setAttribute("star_rating_from", 1);
      }

      ratingFrom = rating_from;
      let data = searchData(value, challenge);

      renderChallenge(data);
      return SetRatingStar(rating_from, stars_from);
    });
  });
});

// starrating to
document.addEventListener("DOMContentLoaded", () => {
  stars_to = document.querySelectorAll(".rating_to li");

  stars_to.forEach((item) => {
    item.addEventListener("click", function () {
      let rating_to = this.getAttribute("star_rating_to");

      if (rating_to == true) {
        this.setAttribute("star_rating_to", 0);
      }
      if (rating_to == 0) {
        this.setAttribute("star_rating_to", 1);
      }

      ratingTo = rating_to;
      let data = searchData(value, challenge);

      renderChallenge(data);
      return SetRatingStar(rating_to, stars_to);
    });
  });
});

// render stars before the star which got "click" and return rating value */
function SetRatingStar(rating, stars) {
  for (let i = 0; i < stars.length; i++) {
    if (i < rating) {
      stars[i].innerHTML = '<i class="fas fa-star"></i>';
    } else {
      stars[i].innerHTML = '<i class="far fa-star"></i>';
    }
  }
}

// return value to array from "type" if checked
let typeBoxes = document.querySelectorAll(".cb-type");
let typeArray = [];

typeBoxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    typeArray = Array.from(typeBoxes)
      .filter((i) => i.checked)
      .map((i) => i.value);

    let data = searchData(value, challenge);
    renderChallenge(data);
  });
});

// return value to array from "labels" if checked
let labelBoxes = document.querySelectorAll(".cb-label");
let labelArray = [];

labelBoxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    labelArray = Array.from(labelBoxes)
      .filter((i) => i.checked)
      .map((i) => i.value);

    let data = searchData(value, challenge);
    renderChallenge(data);
  });
});

// key word filter
inputData = document.getElementById("inputSearch");
inputData.addEventListener("keyup", function () {
  let data = searchData(value, challenge);

  renderChallenge(data);
});

// run filter
function searchData(value, data) {
  let filteredData = [];
  document.getElementById('emptyFilter').innerHTML = "";


  for (var i = 0; i < data.length; i++) {
    let value = inputData.value.toLowerCase();
    let title = data[i].title.toLowerCase();
    let description = data[i].description.toLowerCase();
    let labels = data[i].labels;
    let rating = data[i].rating;
    let type = data[i].type;

    if (rating >= ratingFrom && rating <= ratingTo || ratingTo == 0 && ratingFrom == 0) {
      if (type.includes(typeArray) || typeArray.length == 2) {
        if (labelArray.every((v) => labels.includes(v))) {
          if (title.includes(value) || description.includes(value)) {
            filteredData.push(data[i]);
          }
        }
      }
    }
  }
  if (filteredData.length == 0) {
    document.getElementById('emptyFilter').innerHTML = "No room match search";
  }
  return filteredData;
}

// display challenges
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
      li.innerHTML = item + bookBtn2;
    } else {
      li.innerHTML = item + bookBtn1;
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

// mobile menu
document.querySelector(".main-nav-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});

// toggle filters
document.querySelector(".filter-btn").addEventListener("click", () => {
  document.querySelector(".filter-btn").classList.toggle("close"),
    document.querySelector("#search").classList.toggle("open");
});
document.querySelector(".close-filter").addEventListener("click", () => {
  document.querySelector(".filter-btn").classList.remove("close"),
    document.querySelector("#search").classList.remove("open");
    
});

// bookning
document.querySelector(".modal-btn").addEventListener("click", () => {
  let valueDate = document.getElementById("date").value;
  let today = new Date()
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  var datePlusYear = today.getFullYear() + 1 + '-' + (today.getMonth() + 1) + '-' + today.getDate();

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

    async function datefunction() {
      avalibleDate = "https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=" + valueDate;
      const response = await fetch(avalibleDate);
      const dateArray = await response.json();

      let selectTime = document.getElementById("time");

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

  let booking = { name: valueName, email: valueEmail, date: valueDate, time: valueTime, participants: 3 };

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