const table = document.querySelector('.table');
let line = document.querySelector('.line');
let player1 = [];
let player2 = [];
let game = [];
let shift = "X";

table.addEventListener('click', (e) => {
	let target = e.target;
	let dataset = e.target.dataset.index;
	if (target.textContent.length === 1) return false;
	if (shift === "X") validate(target, dataset, player1, shift, "X", game)
	else validate(target, dataset, player2, shift, "O", game);
});

const tryAgain = () => window.location.reload();

const validate = (target, dataset, player, shiftParam, playerNum, game) => {
	target.textContent = shiftParam;
	player[parseInt(dataset)] = shiftParam;
	game.push(shiftParam);
	let html = document.getElementsByTagName('HTML');
	let modal = document.querySelector('.modal');
	if (player[0]?.length > 0 && player[1]?.length > 0 && player[2]?.length > 0){
		line.classList.add('line-active', 'active-1');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	} 
	if (player[3]?.length > 0 && player[4]?.length > 0 && player[5]?.length > 0) {
		line.classList.add('line-active', 'active-2');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	}	
	if (player[6]?.length > 0 && player[7]?.length > 0 && player[8]?.length > 0) {
		line.classList.add('line-active', 'active-3');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	}
	if (player[0]?.length > 0 && player[3]?.length > 0 && player[6]?.length > 0) {
		line.classList.add('line-active', 'active-4');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	} 
	if (player[1]?.length > 0 && player[4]?.length > 0 && player[7]?.length > 0) {
		line.classList.add('line-active', 'active-5');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	} 
	if (player[2]?.length > 0 && player[5]?.length > 0 && player[8]?.length > 0) {
		line.classList.add('line-active', 'active-6');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	} 
	if (player[0]?.length > 0 && player[4]?.length > 0 && player[8]?.length > 0) {
		line.classList.add('line-active', 'active-7');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	} 
	if (player[2]?.length > 0 && player[4]?.length > 0 && player[6]?.length > 0) {
		line.classList.add('line-active', 'active-8');
		html[0].style.animation = "flash 2s linear";
		modal.childNodes[3].textContent = `Player: ${playerNum}`;
		setTimeout(() => modal.classList.add('show'), 2000);
		return true;
	}
	if (game.length === 9) tryAgain();
	if (shift === "X") shift = "O"
	else shift = "X";
}