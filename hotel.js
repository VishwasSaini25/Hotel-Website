const navbtn = document.getElementById('nav-btn');
const cancelbtn = document.getElementById('cancel-btn');
const sidenav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
var box = document.getElementById('cancelbtn');
navbtn.addEventListener("click",function(){
	sidenav.classList.add('show');
	modal.classList.add('showModal');
	// body...
});

cancelbtn.addEventListener('click',function(){
	sidenav.classList.remove('show');
	modal.classList.remove('showModal');
	// body...
});
