let value;
let challenge;
ratingFrom = 0;
ratingTo = 5;

addEventListener("load", async function loadData() {
  challenges = "https://lernia-sjj-assignments.vercel.app/api/challenges";
  const response = await fetch(challenges);
  const data = await response.json();

  console.log(data);
  challenge = data.challenges;
  renderChallenge(challenge);
});

// starrating from
document.addEventListener("DOMContentLoaded", () => {
  stars_from = document.querySelectorAll(".rating_from li");

  stars_from.forEach(item => {
      item.addEventListener("click", function () {
          let rating_from = this.getAttribute("star_rating_from");
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

  stars_to.forEach(item => {
      item.addEventListener("click", function () {
          let rating_to = this.getAttribute("star_rating_to");
          ratingTo = rating_to;
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
};

// return value to array from "type" if checked 
let typeBoxes = document.querySelectorAll(".cb-type");
let typeArray = []

typeBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    typeArray =
      Array.from(typeBoxes)
        .filter(i => i.checked)
        .map(i => i.value)

    let data = searchData(value, challenge);
    console.log(typeArray)
    renderChallenge(data);
  })
});

// return value to array from "labels" if checked 
let labelBoxes = document.querySelectorAll(".cb-label");
let labelArray = []

labelBoxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    labelArray =
      Array.from(labelBoxes)
        .filter(i => i.checked)
        .map(i => i.value)

    let data = searchData(value, challenge);

    console.log(labelArray)
    renderChallenge(data);
  })
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

  for (var i = 0; i < data.length; i++) {
    let value = inputData.value;
    let title = data[i].title.toLowerCase();
    let description = data[i].description.toLowerCase();
    let labels = data[i].labels;
    let rating = data[i].rating;
    let type = data[i].type;

   console.log(ratingFrom)

    if (rating >= ratingFrom && rating <= ratingTo) {
      if (type.includes(typeArray) || typeArray.length == 2) {
        if (labelArray.every(v => labels.includes(v))) {
          if (title.includes(value) || description.includes(value)) {
            filteredData.push(data[i]);
          }
        }
      }
    }
  }
  console.log(filteredData)
  return filteredData;
}

// display challenges
function renderChallenge(data) {
  let ul = document.getElementById("challenges-list");
  ul.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    rating = data[i].rating;

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
    <a class="challenge-cta" href="#">Book this room</a>
    `;

    const li = document.createElement("li");
    li.innerHTML = item;
    li.querySelector(".challenge-cta").addEventListener;
    li.classList.add("challenges-item");
    ul.append(li);
  }
}

// mobile menu
document.querySelector(".main-nav-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");

});

// toggle filters 
document.querySelector('.filter-btn').addEventListener('click', () => {
      document.querySelector('.filter-btn').classList.toggle('close'),
      document.querySelector('#search').classList.toggle('open');
  });
  document.querySelector('.close-filter').addEventListener('click', () => {
    document.querySelector('.filter-btn').classList.remove('close'),
    document.querySelector('#search').classList.remove('open');
});

