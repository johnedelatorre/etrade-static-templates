(function(){
  document.addEventListener('DOMContentLoaded', function(){

  	function removeicons(){
  		$('.jk').removeClass('et-icon-help jk after');
  	}
    $('.et-icon-help').on('mouseenter', function(){
    	//If we're going to have a help icon here, why not everywhere?
    	$('*').not('.et-select-wrapper, [class *= "et-icon"], [class *="col-"], .row, .clearfix').addClass('et-icon-help after jk');
    	// window.setTimeout(removeicons, 3000);
    });
    $('.et-icon-help').on('mouseleave', removeicons);
  });
})();