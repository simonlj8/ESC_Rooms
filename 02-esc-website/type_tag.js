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
let web = document.getElementById("web");
let linux = document.getElementById("linux");
let cryptography = document.getElementById("cryptography");
let coding = document.getElementById("coding");
let other_tag = document.getElementById("other_tag");
let final_tag = document.getElementById("final_tag");

web.addEventListener("click", () => {
    web.value = web.checked;
    if (web.checked == true) {
        console.log("web");
      } else {
        console.log("not web");
      }
    });

linux.addEventListener("click", () => {
    linux.value = linux.checked;
    if (linux.checked == true) {
        console.log("linux");
      } else {
        console.log("not linux");
      }
    });

cryptography.addEventListener("click", () => {
    cryptography.value = cryptography.checked;
    if (cryptography.checked == true) {
        console.log("cryptography");
      } else {
        console.log("not cryptography");
      }
    });

coding.addEventListener("click", () => {
    coding.value = coding.checked;
    if (coding.checked == true) {
        console.log("coding");
      } else {
        console.log("not coding");
      }
    });

javascript.addEventListener("click", () => {
    this.value = other_tag.checked;
    if (other_tag.checked == true) {
        console.log("other_tag");
      } else {
        console.log("not other_tag");
      }
    });

ssh.addEventListener("click", () => {
    this.value = final_tag.checked;
    if (final_tag.checked == true) {
        console.log("final_tag");
      } else {
        console.log("not final_tag");
      }
    });

    /*let checkboxes = document.querySelectorAll(".cb-tag");

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
*/