addEventListener("load", async function loadData() {
  const url = "https://lernia-sjj-assignments.vercel.app/api/challenges";
  const response = await fetch(url);
  const data = await response.json();

  window.challenge = data.challenges;

  renderChallenge(challenge);
});

inputData = document.getElementById("inputSearch");

inputData.addEventListener("keyup", function () {
  let value = this.value;

  let data = searchData(value, challenge);
  renderChallenge(data);
});

function searchData(value, data) {
  let filteredData = [];

  for (var i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    let title = data[i].title.toLowerCase();
    let description = data[i].description.toLowerCase();
    let rating = data[i].rating;

    if (title.includes(value) || description.includes(value)) {
      filteredData.push(data[i]);
    }
  }
  return filteredData;
}

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
       <p class="challenge-description">
       ${data[i].description}
    </p>
   <a class="challenge-cta" href="#">Book this room</a>
    `;

    const li = document.createElement("li");
    li.innerHTML = item;
    li.querySelector(".challenge-cta").addEventListener;
    li.classList.add("challenges-item");
    ul.append(li);
  }
}

/* for (let i = 0; i < challenge.length; i++) {
    console.log(challenge[i].Titel);

    function createli() {
        const ul = document.getElementByclass("challenges-list");
        const li = document.createElement("li").className("challenges-item");
        ul.appendChild(li);
    }
}; 
*/

/*
<li class="challenges-item">
 <img class="challenge-picture" src="images/challenge.png" />
 <h3 class="challenge-title">#######</h3>
 <div class="challenge-meta">
     <ul class="challenge-rating">
         <li class="challenge-rating-star on"></li>
        <li class="challenge-rating-star on"></li>
        <li class="challenge-rating-star on"></li>
        <li class="challenge-rating-star on"></li>
        <li class="challenge-rating-star off"></li>
    </ul>
    <small class="challenge-size">######</small>
 </div>
    <p class="challenge-description">
    #########
 </p>
<a class="challenge-cta" href="#">Book this room</a>
</li>
*/

// mobile menu
document.querySelector(".main-nav-toggle").addEventListener("click", () => {
  document.querySelector(".main-nav").classList.toggle("open");
});
