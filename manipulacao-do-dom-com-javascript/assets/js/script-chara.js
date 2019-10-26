const larguraDaTela = window.screen.availWidth;
let position = 0;
let aumentar = true;

let animacaoFrame = 0;

const animacaoUrso = [
	'../assets/images/chara-1.png',
	'../assets/images/chara-2.png',
	'../assets/images/chara-3.png',
];

setInterval( () => {

	if (position > (larguraDaTela + 200)) {
		return false;
	}
	document.getElementById("urso-img").src = animacaoUrso[animacaoFrame];
	document.getElementById("urso-img").style = "left: " + position + "px;";
	position += 2;
	animacaoFrame++;
	if (animacaoFrame > 2) {
		animacaoFrame = 0;
	}
	if (window.screen.availWidth < position) position = 0;
}, 100);