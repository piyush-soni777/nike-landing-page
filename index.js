// ========== MOBILE MENU =========
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.navbar .menu');

if (hamburger) {
	hamburger.addEventListener('click', function() {
		hamburger.classList.toggle('active');
		menu.classList.toggle('active');
	});

	// Close menu when a link is clicked
	document.querySelectorAll('.navbar .menu a').forEach(link => {
		link.addEventListener('click', function() {
			hamburger.classList.remove('active');
			menu.classList.remove('active');
		});
	});
}

// ========== SLIDER FUNCTIONALITY =========
let slideIndex = 0;

let slider = document.getElementById('slider')

let slides = slider.getElementsByClassName('slide')

let slideControl = document.getElementById('slide-control')

let slideControlItems = slideControl.getElementsByClassName('slide-control-item')


slider.style.marginTop = '-' + slideIndex + '00vh'

setTimeout(() => {
	slideControlItems[slideIndex].classList.add('active')
	slides[slideIndex].classList.add('active')
}, 500)


chooseProduct = (index) => {
	if (index === slideIndex) return

	slideIndex = index

	let currSlideControl = slideControl.querySelector('.slide-control-item.active')
	currSlideControl.classList.remove('active')

	let currSlide = slider.querySelector('.slide.active')
	currSlide.classList.remove('active')

	setTimeout(() => {
		slider.style.marginTop = '-' + slideIndex + '00vh'
		slideControlItems[slideIndex].classList.add('active')
		slides[slideIndex].classList.add('active')
	}, 1500)
	
}

Array.from(slideControlItems).forEach((el, index) => {
	el.onclick = function() {
		chooseProduct(index)
	}
})

let modal = document.getElementById('modal')

let closeBtn = document.getElementById('modal-close')
// piyush
closeBtn.onclick = () => {
	modal.style.display = 'none'
}

let moreImages = document.getElementsByClassName('more-images-item')

let previewImages = document.getElementsByClassName('img-preview')

Array.from(moreImages).forEach((el) => {
	el.onclick = () => {
		let imgItems = el.parentNode.getElementsByTagName('img')

		Array.from(imgItems).forEach((item, index) => {
			previewImages[index].src = item.src
		})

		let img = el.querySelector('img')
		modal.style.display = 'block'

		let modalContent = modal.querySelector('.modal-content')
		modalContent.src = img.src

		let temp = modalContent.cloneNode(true)
		modalContent.parentNode.replaceChild(temp, modalContent)
	}
})
// piyush-soni777
// ========== SMOOTH SCROLL ENHANCEMENT =========
document.documentElement.style.scrollBehavior = 'smooth';

// ========== KEYBOARD NAVIGATION =========
document.addEventListener('keydown', function(event) {
	if (event.key === 'ArrowRight') {
		let nextIndex = (slideIndex + 1) % slides.length;
		chooseProduct(nextIndex);
	} else if (event.key === 'ArrowLeft') {
		let prevIndex = (slideIndex - 1 + slides.length) % slides.length;
		chooseProduct(prevIndex);
	} else if (event.key === 'Escape' && modal.style.display === 'block') {
		modal.style.display = 'none';
	}
});

// ========== CLOSE MODAL ON OUTSIDE CLICK =========
window.onclick = function(event) {
	if (event.target === modal) {
		modal.style.display = 'none';
	}
}
