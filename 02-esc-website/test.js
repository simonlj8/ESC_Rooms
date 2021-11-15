const challenge = [
  {
    Titel: "Room01",
    Beskrivning: "Starwarz Tema",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room02",
    Beskrivning: "Javascript Tema",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room03",
    Beskrivning: "Bla, bla, bla",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room04",
    Beskrivning: "Bla, bla, bla",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room05",
    Beskrivning: "Bla, bla, bla",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room06",
    Beskrivning: "Bla, bla, bla",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    Rating: "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room07",
    Beskrivning: "Bla, bla, bla",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    Rating: "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },

  {
    Titel: "Room08",
    Beskrivning: "Harr",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    Rating: "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },
  {
    Titel: "Room09",
    Beskrivning: "Abborre",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },
  {
    Titel: "Room10",
    Beskrivning: "Gädda",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },
  {
    Titel: "Room11",
    Beskrivning: "Gös",
    Type: "online/onsite",
    "Min antal": "X",
    "Max antal": "X",
    "Rating:": "X",
    "URL IMG": "href",
    Ettiketter: "tags",
  },
];

function Test1() {
  let ul = document.getElementById("challenges-list");
  for (let i = 0; i < challenge.length; i++) {
    let item = `<li class="challenges-item">
    <img class="challenge-picture" src="images/challenge.png" />
    <h3 class="challenge-title">${challenge[i].Titel}</h3>
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
       ${challenge[i].Beskrivning}
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
