 $(function(){
 	$(window).scroll(function() {
 		if($('body').scrollTop() > 100 ){
 			$('.logo').addClass('chucam');
 		}
 		else 
 			$('.logo').removeClass('chucam');

 	})
})  
 