document.addEventListener("DOMContentLoaded", async function loadData() {
  const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
  const response = await fetch(url);
  const data = await response.json();

  window.challenge = data.challenges;

  renderChallenge();
})

function renderChallenge() {
  let ul = document.getElementById("challenges-list");
  for (let i = 0; i < challenge.length; i++) {
    let item = `<li class="challenges-item">
    <img class="challenge-picture" src=${challenge[i].image} />
    <h3 class="challenge-title">${challenge[i].title} (${challenge[i].type})</h3>
    <div class="challenge-meta">
        <ul class="challenge-rating">
            <li class="challenge-rating-star on"></li>
           <li class="challenge-rating-star on"></li>
           <li class="challenge-rating-star on"></li>
           <li class="challenge-rating-star on"></li>
           <li class="challenge-rating-star off"></li>
       </ul>
       <small class="challenge-size">${challenge[i].minParticipants}-${challenge[i].maxParticipants} participants </small>
    </div>
       <p class="challenge-description">
       ${challenge[i].description}
    </p>
   <a class="challenge-cta" href="#">Book this room</a>
   </li>
    `;
    ul.innerHTML += item;
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
document.querySelector('.main-nav-toggle').addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});