const block = document.querySelector('.block');

let sum = 0;
const plus = function (leftBlock) {
	sum++;
	block.style.left = `${sum}px`;
	if (sum < 50) {
		return plus();
	} else if (sum > 349) {
		sum = 0;
	} else {
		sum	+=50;
	}
	leftBlock();
}
block.addEventListener('click', plus);
let a = 'asd'