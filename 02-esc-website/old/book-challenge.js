let btns = document.querySelectorAll('.challenge-cta');

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    document.querySelector('.modal').classList.toggle('open'),
    document.querySelector('.overlay').classList.toggle('active');
  });
});

document.querySelector('.modal-btn').addEventListener('click', () => {
    let valueDate = document.getElementById('date').value;

    if (!valueDate) {
        alert("Input must not be empty");
        return false;
    }
    else {
        document.querySelector('.modal-step1').classList.toggle('close', true),
        document.querySelector('.modal-step2').classList.toggle('open', true);
    }
});

document.querySelector('.modal-btn2').addEventListener('click', () => {
    let valueName = document.getElementById('name').value;
    let valueEmail = document.getElementById('email').value;
    let valueTime = document.getElementById('time').value;
    let valueNumber = document.getElementById('number').value;

    if (!valueName || !valueEmail || !valueTime || !valueNumber) {
        alert("Input must not be empty");
        return false; 
    }
    else {
    document.querySelector('.modal-step2').classList.toggle('close'),
    document.querySelector('.modal-step3').classList.toggle('open');
    }
});