let menuButton = document.getElementById('menu-button');
let menuList = document.getElementById('menu');
let menuItems = menuList.children;
menuButton.addEventListener('click',function(){
	if(menuList.style.width != '100vw'){
		this.classList.add('menu-button_open');
		menuList.style.width = '100vw';
	}else{
		this.classList.remove('menu-button_open');
		menuList.style.width = '0';
	}
} );
const hideAfter = function(){
	menuButton.classList.remove('menu-button_open');
	menuList.style.width = '0';
};
if(window.innerWidth<1000){
	for (let i = 0; i<menuItems.length; i++){
		menuItems[i].addEventListener('click', hideAfter, false);
	}
}else{
	window.onscroll = function(){
		if(window.scrollY >= 160){
			menuList.classList.add('menu-colored');
		}else{
			menuList.classList.remove('menu-colored');
		}
	}
}