(function(){
	let projects = document.getElementsByClassName('project-title');
	[...projects].map(project => {
		let btn = project.querySelector('button');
		let target = project.nextElementSibling;
		btn.onclick = () => {
			let expaneded = btn.getAttribute('aria-expanded') === 'true';
			btn.setAttribute('aria-expanded', !expaneded);
			target.hidden = expaneded;
		}
	})
})()
// MENU FUNCTIONS
let menuButton = document.getElementById('menu-button');
let menuList = document.getElementById('menu');
let menuItems = menuList.children;
//menu visible <->invisible
menuButton.addEventListener('click',function(){
	if(menuList.style.width != '100%'){
		this.classList.add('menu-button_open');
		menuList.style.width = '100%';
	}else{
		this.classList.remove('menu-button_open');
		menuList.style.width = '0';
	}
} );
//hide menu after click on link
const hideAfter = function(){
	menuButton.classList.remove('menu-button_open');
	menuList.style.width = '0';
};
for (let i = 0; i<menuItems.length; i++){
	menuItems[i].addEventListener('click', hideAfter, false);
}

// function toggleClass(object){
// 	var classes = object.getAttribute('class');
// 	var output;
// 	output = classes.replace('invisible','visible');
// 	if(output == classes)
// 		output = classes.replace('visible','invisible');
// 	object.setAttribute('class',output);
// }
