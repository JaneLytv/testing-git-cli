$(function(){
	$(".fancybox").fancybox();
	
	$("#hide").click(function(){
        $(".overlay").hide();
     });
    $('.after a').awesomeCursor('plane', {
    	color: 'white',
    	size: 50
    });
    $('.before a').awesomeCursor('ship', {
    	color: 'white',
    	size: 50
    });

//on click of thumbnail large image displayed in class of full

	$('.after a').on('click',function(event){
		event.preventDefault();
		
		var bigImg = $(this).data('full');
		$.fancybox.open(bigImg);

		//$('.new img').attr('src', bigImg)
	});
	$('.before a').on('click',function(event){
		event.preventDefault();
		
		var bigImg = $(this).data('full');
		$.fancybox.open(bigImg);

		//$('.old img').attr('src', bigImg)
	});
});