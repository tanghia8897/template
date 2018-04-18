document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementById('nuthieuung');
	var khoi = document.getElementById('kcd');
	var trangthai = "Lan1";
	nut.onclick = function(){
		if(trangthai== "Lan1")
		{
			console.log("ban vua click vao lan 1");
			trangthai = "Lan2";
			//khoi.classList.remove("ko-dong");
			khoi.classList.add("chieuso1");
		}
		else if(trangthai == "Lan2")
		{
			console.log("ban vua click vao lan 2");
			trangthai = "Lan1";
			khoi.classList.remove("chieuso1");
			khoi.classList.add("chieu2");
		}
		
	}
},false)