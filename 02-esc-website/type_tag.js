/* checkboxes "by type" */
let online = document.getElementById("online");
let onsite = document.getElementById("onsite");

online.addEventListener("change", () => {
    online.value = online.checked;
    if (online.checked == true) {
        console.log("online");
      } else {
        console.log("not online");
      }
    });

onsite.addEventListener("change", () => {
    onsite.value = onsite.checked;
    if (onsite.checked == true) {
        console.log("onsite");
      } else {
        console.log("not onsite");
      }
    });

/* buttons "by labels" */
  let checkboxes = document.querySelectorAll(".cb-tag");

  for(let checkbox of checkboxes) {
    checkbox.addEventListener('click', function() {
    value = this.value;
    let data = searchData(value, challenge);
    let cbArray = [];

    if(this.checked == true) {
      cbArray.push(value);
      renderChallenge(data);

      console.log(data);

    } else {
      console.log('unchecked');
    }
  })
 console.log(cbArray);
    return cbArray;
}

let tagButtons = document.querySelectorAll(".cb-tag");

tagButtons.forEach(function (i) {
  i.addEventListener('click', function() {
   let value = this.value;
   let data = searchData(value, challenge);
   
   console.log(data);
   renderChallenge(data);
  });
});