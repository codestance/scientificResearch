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
