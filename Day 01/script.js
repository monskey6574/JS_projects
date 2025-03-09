function calculateLove(){


  

  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if(name1===" " || name2==" "){
    alert("please enter both names")
  }

  else{
    const lovePrecentage = Math.floor(Math.random() *101)
    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2} s Love Precentage : ${lovePrecentage} %`
  }

  if(lovePrecentage < 30){
    result.innerHTML += "<br> Not a Great match Please break up or forget"
  }else {
    result.innerHTML += "<br> Good Keep it up "
  }









}