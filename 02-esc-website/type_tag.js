/* return value to array from "type" if checked */
let typeBoxes = document.querySelectorAll(".search_type input[type=checkbox]");
let typeArray = []

typeBoxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    typeArray = 
      Array.from(typeBoxes) 
      .filter(i => i.checked)
      .map(i => i.value) 
      
    console.log(typeArray)
    window.typeArray = typeArray;
  })
});


/* return value to array from "labels" if checked */
let labelBoxes = document.querySelectorAll(".search_labels input[type=checkbox]");
let labelArray = []

labelBoxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    labelArray = 
      Array.from(labelBoxes) 
      .filter(i => i.checked)
      .map(i => i.value) 
      
    console.log(labelArray)
    window.labelArray = labelArray;
  })
});

