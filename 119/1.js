
var anhs = document.querySelectorAll(' .cacanh img '),
	nenden = document.querySelector('.nenden'),
	donglai = document.querySelector('.donglai'),
	ttanh = document.querySelector('.ttanh'),
	khoicacanh = document.querySelectorAll('.khoicacanh ul li'),
	thuTuCuaActive = 0,
	nphai = document.querySelector('.nphai')
	;
	console.log(anhs);
	console.log(khoicacanh);


nenden.addEventListener('click',function(){
	nenden.classList.remove('ra');
	ttanh.classList.remove('ra');
	var anhActive = document.querySelector('.khoicacanh ul li.active');
		anhActive.classList.remove('active');	
})

for (var i = 0; i < anhs.length; i++) {
		anhs[i].addEventListener('click',function(){	
			nenden.classList.add('ra');	
			ttanh.classList.add('ra');		
			var anhDuocClick = this;
			for (var chiso = 0; anhDuocClick = anhDuocClick.previousElementSibling; chiso++) {}
				khoicacanh[chiso].classList.add('active');
				thuTuCuaActive = chiso;
			
		})
	}	

	var HienTai2 = thuTuCuaActive;
	nphai.addEventListener('click',function(){
		console.log(khoicacanh.length);
		var soLuongAnh = khoicacanh.length;
		var phanTuHienTai = khoicacanh[HienTai2];
		HienTai2 = (HienTai2 < ( soLuongAnh - 1) ) ? (HienTai2 + 1) : 0;
		var phanTuTiepTheo = khoicacanh[HienTai2];
		phanTuHienTai.classList.remove('active');
		phanTuTiepTheo.classList.add('active');
	})