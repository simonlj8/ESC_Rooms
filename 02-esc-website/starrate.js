
/* starrating from */
document.addEventListener("DOMContentLoaded", () => {
    stars_from = document.querySelectorAll(".rating_from li");
  
    stars_from.forEach(item => {
        item.addEventListener("click", function () {
            let rating_from = this.getAttribute("star_rating_from");
            return SetRatingStar(rating_from, stars_from);
        });
    });
});
  
/* starrating to */
document.addEventListener("DOMContentLoaded", () => {
stars_to = document.querySelectorAll(".rating_to li");

stars_to.forEach(item => {
    item.addEventListener("click", function () {
        let rating_to = this.getAttribute("star_rating_to");
        return SetRatingStar(rating_to, stars_to);
        });  
    });
});
  
/* render stars before the star which got "click" and return rating value */
function SetRatingStar(rating, stars) {
let len = stars.length;

    for (let i = 0; i < len; i++) {
        if (i < rating) {
            stars[i].innerHTML = '<i class="fas fa-star"></i>';
        } else {
            stars[i].innerHTML = '<i class="far fa-star"></i>';
        }
    }
};