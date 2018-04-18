
var nutphai = document.querySelector('.nuts b.phai'),
	nuttrai = document.querySelector('.nuts b.trai'),
	slides = document.querySelectorAll('.slides ul li'),
	chiSoHienTai = 0,
	trangthai = 'dangDungYen';
	soLuongSlide = slides.length;

var chuyenSlideChoNutPhai = function(){		
	if(trangthai == 'dangChuyenDong') {return false;}
	trangthai = 'dangChuyenDong';
	var trangThai2CD = 0;
	var phanTuHienTai = slides[chiSoHienTai];
	// if(chiSoHienTai < soLuongSlide - 1)
	// {
	// 	chiSoHienTai ++;
	// }
	// else {
	// 	chiSoHienTai = 0;
	// } 
	chiSoHienTai = chiSoHienTai < soLuongSlide - 1 ? chiSoHienTai +1 : chiSoHienTai = 0;
	var phanTuTiepTheo = slides[chiSoHienTai]; 
	console.log(phanTuHienTai);
	console.log(phanTuTiepTheo);	
	phanTuHienTai.classList.add('bienMatKhiAnNext');
	phanTuTiepTheo.classList.add('diVaoKhiAnNext');

	var xuLyHienTaiKetThuc = function(){
		phanTuHienTai.classList.remove('dangxem');
		phanTuHienTai.classList.remove('bienMatKhiAnNext');
		trangThai2CD++;
		if(trangThai2CD == 2)
			trangthai = 'dangDungYen';

	}
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThuc);

	var xuLyTiepTheoKetThuc = function(){
		this.classList.remove('diVaoKhiAnNext');
		this.classList.add('dangxem');
		trangThai2CD++;
		if(trangThai2CD == 2)
			trangthai = 'dangDungYen';	
	}
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThuc);

};

nutphai.addEventListener('click',chuyenSlideChoNutPhai);

var chuyenSlideChoNutTrai = function(){
	if(trangthai == 'dangChuyenDong'){return false;}
	trangthai = 'dangChuyenDong';
	var trangThai2CD = 0;
	var phanTuHienTai = slides[chiSoHienTai];
	// if(chiSoHienTai > 0 )
	// 	chiSoHienTai--;
	// else{
	// 	chiSoHienTai = soLuongSlide - 1;
	// }
	chiSoHienTai = chiSoHienTai > 0 ? chiSoienTai-1 :soLuongSlide - 1;
	phanTuTiepTheo = slides[chiSoHienTai];
	console.log(phanTuHienTai);
	console.log(phanTuTiepTheo);

	var xuLyHienTaiKetThuc = function(){
		this.classList.remove('dangxem');
		this.classList.remove('bienMatKhiAnPrev');
		trangThai2CD++;
		if(trangThai2CD == 2)
			trangthai = 'dangDungYen';
	}
	var xuLyTiepTheoKetThuc = function(){
		this.classList.add('dangxem');
		this.classList.remove('diVaoKhiAnPrev');
		trangThai2CD++;
		if(trangThai2CD == 2)
			trangthai = 'dangDungYen';
	}
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThuc);//bắt trạng thái khi kết thúc
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThuc);
	phanTuHienTai.classList.add('bienMatKhiAnPrev');
	phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
}

nuttrai.addEventListener('click',chuyenSlideChoNutTrai);