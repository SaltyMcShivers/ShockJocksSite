var mainImage;

window.onload = function(){
	mainImage = document.getElementById("MainDisplayImage");
};

function ChangeImageSource(source){
	var currentChoice = document.getElementsByClassName("selected");
	if(currentChoice.size != 0) currentChoice[0].className = "";
	mainImage.src = source.src;
	source.className = "selected";
}