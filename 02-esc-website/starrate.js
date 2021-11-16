document.addEventListener("DOMContentLoaded", () => {
    stars_from = document.querySelectorAll(".rating_from li");

    stars_from.forEach(item => {
        item.addEventListener("click", function () {
            let rating_from = this.getAttribute("star_rating_from");
            return SetRatingStar_from(rating_from, stars_from);
        });
    });
});

function SetRatingStar_from(rating_from, stars_from) {
    let len = stars_from.length;
    console.log(rating_from);
    /* document.querySelector('#rate_from').innerText = rating */

    for (let i = 0; i < len; i++) {
        if (i < rating_from) {
            stars_from[i].innerHTML = '<i class="fas fa-star"></i>';
        } else {
            stars_from[i].innerHTML = '<i class="far fa-star"></i>';
        }
    }
};


document.addEventListener("DOMContentLoaded", () => {
    stars_to = document.querySelectorAll(".rating_to li");

    stars_to.forEach(item => {
        item.addEventListener("click", function () {
            let rating_to = this.getAttribute("star_rating_to");
            return SetRatingStar_to(rating_to, stars_to);
        });
    });
});

function SetRatingStar_to(rating_to, stars_to) {
    let len = stars_to.length;
    console.log(rating_to);
    /* document.querySelector('#rate_from').innerText = rating */

    for (let i = 0; i < len; i++) {
        if (i < rating_to) {
            stars_to[i].innerHTML = '<i class="fas fa-star"></i>';
        } else {
            stars_to[i].innerHTML = '<i class="far fa-star"></i>';
        }
    }
};