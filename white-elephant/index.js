const okayBtn = document.querySelector('#disclaimerButton');
okayBtn.addEventListener('click', hide);

window.addEventListener('click', function(e){   
    if (document.getElementsByClassName('disclaimer-window')[0].contains(e.target)){
      return;
    } else{
      setTimeout(() => document.querySelector('.disclaimer-container').style.display = 'none', 125);
      sessionStorage.setItem('alreadyClicked', "y");
    }
  });
  
function hide(){
    document.getElementsByClassName('disclaimer-window')[0].style.animation = "fadeOut 500ms";
    setTimeout(() => document.getElementsByClassName('disclaimer-window')[0].style.display = "none", 450);
    setTimeout(() => document.getElementsByClassName('disclaimer-container')[0].style.display = "none", 550);
    sessionStorage.setItem('alreadyClicked', "y");
}

function check(){
  sessionStorage.setItem('alreadyClicked', "n");
  if (sessionStorage.getItem('alreadyClicked') != "y"){
    document.querySelector('.disclaimer-container').style.display = "block";
  } else{
    document.querySelector('.disclaimer-container').style.display = 'none';
  }
}


window.onload = check();
