const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const sliderDot = Array.from(document.getElementsByClassName('slider__dot'));
const sliderNext = document.querySelector('.slider__arrow_next');
const sliderPrev = document.querySelector('.slider__arrow_prev');
sliderNext.onclick = function () {
	for (let i = 0; i < sliderItems.length; i++) {
		let slide = document.querySelector('.slider__item_active');
		if (slide == sliderItems[sliderItems.length - 1]) {
			slide.classList.remove('slider__item_active');
			sliderDot[sliderItems.length - 1].classList.remove('slider__dot_active');
			slide = sliderItems[0];
			slide.classList.add('slider__item_active');
			sliderDot[0].classList.add('slider__dot_active');
			break;


		} else if (slide == sliderItems[i]) {
			slide.classList.remove('slider__item_active');
			sliderDot[i].classList.remove('slider__dot_active');
			slide = sliderItems[i + 1];
			slide.classList.add('slider__item_active');
			sliderDot[i + 1].classList.add('slider__dot_active');
			break;
		}
	}
}

sliderPrev.onclick = function () {
	for (let i = sliderItems.length; i > 0; i--) {
		let slide = document.querySelector('.slider__item_active');
		if (slide == sliderItems[0]) {
			slide.classList.remove('slider__item_active');
			sliderDot[0].classList.remove('slider__dot_active');
			slide = sliderItems[sliderItems.length - 1];
			slide.classList.add('slider__item_active');
			sliderDot[sliderItems.length - 1].classList.add('slider__dot_active');
			break;


		} else if (slide == sliderItems[i]) {
			slide.classList.remove('slider__item_active');
			sliderDot[i].classList.remove('slider__dot_active');
			slide = sliderItems[i - 1];
			slide.classList.add('slider__item_active');
			sliderDot[i - 1].classList.add('slider__dot_active');
			break;
		}
	}
}

