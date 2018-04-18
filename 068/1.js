document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');	
			var nutkichhoat = this;
			var vitrinut = 0;
			for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {
				//console.log('Biến i là : ' + i);
				//console.log("Nút kích hoạt là : " + nutkichhoat);
			}

			console.log("vị trí nút kích hoạt là : "  + vitrinut);
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				
			}
			slides[vitrinut].classList.add('active');
			

		})
	}


	autoslide();
	function autoslide(){
		var thoigian = setInterval(function(){
			var vitrislide = 0;
			var slidehientai = document.querySelector('.cacslide ul li.active');
			for (vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) {}

			if(vitrislide < slides.length - 1){
				for (var i = 0; i < slides.length; i++) {
			
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slides[vitrislide].nextElementSibling.classList.add('active');
			nut[vitrislide].nextElementSibling.classList.add('kichhoat');
			}
			else {
				for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				nut[i].classList.remove('kichhoat');
			}
			slides[0].classList.add('active');
			nut[0].classList.add('kichhoat');
			}
		},4000);
	}
})	