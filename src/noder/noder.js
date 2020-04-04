//const openNodeDivs = document.querySelectorAll('[data-node-target]');
//const closeNodeButtons = document.querySelectorAll('[data-close-button]');
//const overlay = document.getElementById('overlay');


//openNodeDivs.forEach(div => {
//	div.addEventListener("click", () => {
//		const node = document.querySelector(div.dataset.modalTarget);
//		openNode(node);
//	})
//})

//closeNodeButtons.forEach(div => {
//	div.addEventListener("click", () => {
//		const node = button.closest(".popup");
//		closeNode(node);
//	})
//})

//function openNode(node){
//	if (node == null) return;
//	node.classList.add("active");
//	overlay.classList.add("active");
//}

//function closeNode(node){
//	if (node == null) return;
//	node.classList.remove("active");
//	overlay.classList.remove("active");
//}


var openButtons = document.querySelectorAll("[data-node-target]");
var closeButtons = document.querySelectorAll("data-close-button");
var overlay = document.getElementById("overlay");


openButtons.forEach(div, function(){
	div.addEventlistener("click", function(){
		const node = document.querySelector(div.dataset.nodeTarget);
		openNode(node);
	});
});

closeButtons.forEach(button, function(){
	button.addEventlistener("click", function(){
		const node = button.closest(".popup");
		closeNode(node);
	});
});

function openNode(node){
	if (node == null) return;
	node.classList.add("active");
	overlay.classlist.add("active");
};

function closeNode(node){
	if (node == null) return;
	node.classList.remove("active");
	overlay.classlist.remove("active");
};
