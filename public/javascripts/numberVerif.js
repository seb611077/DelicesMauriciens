// ---- number ferif ---- //

function getRandomNumber(min, max) {
    let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0]
    randomNumber = randomNumber / 4294967296
    return Math.floor(randomNumber * (max - min + 1)) + min;
  }
  let randomResult = (getRandomNumber(10, 1000));
  
  //- Injection du code dans l'HTML -//
  document.getElementsByName('form-number')[0].innerHTML = `entrer le nombre : ${randomResult}`;
  
  //- comparaison des nombres -//
  
  const getInputNumber = () => {
    let form = document.getElementById('send')
    
    form.addEventListener("submit", (e) => {
      let nbrInput = e.target[3].value
       if (verifNumber(nbrInput) == false) {
          e.preventDefault()
          alert("veuillez entrer le bon nombre !")
       }
    })
  }
  
  function verifNumber(nbrInput) {
    return (nbrInput != randomResult)  ? false : true
  }
  
  getInputNumber()
  
  
  // ---- fin number ferif ---- //
  