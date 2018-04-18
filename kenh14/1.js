document.addEventListener("DOMContentLoaded",function(){
	var menudo = document.querySelector('.menu');
	var trangthaimenudo = "duoi100";
	var chungtoi = document.querySelector('.chungtoi');
	var vtkhoivang = chungtoi.offsetTop;
	var trangthaikhoivang = "duoi";
	var chanduoi = vtkhoivang + 600;
	

	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset > 100 )
		{
			if(trangthaimenudo == 'duoi100')
			{
				trangthaimenudo = "tren100";
				menudo.classList.add('menuden');
			}

		}
		else if(window.pageYOffset < 100 )
		{
			if(trangthaimenudo == 'tren100')
			{
				trangthaimenudo = "duoi100";
				menudo.classList.remove('menuden');
			}
		}
		if(window.pageYOffset > vtkhoivang && window.pageYOffset < chanduoi){
			if(trangthaikhoivang == 'duoi'){
				trangthaikhoivang = "danghienthi";
				chungtoi.classList.add('vangdunglai');
			}
		}
		else if(window.pageYOffset < vtkhoivang  || window.pageYOffset > chanduoi)
		{
			if(trangthaikhoivang == 'danghienthi')
			{
				trangthaikhoivang = "duoi";
				chungtoi.classList.remove('vangdunglai');
			}
		}
	})
},false)