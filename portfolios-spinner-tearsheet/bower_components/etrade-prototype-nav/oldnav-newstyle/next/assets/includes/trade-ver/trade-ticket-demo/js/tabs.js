//first tab set
$('.tabset-1 .tab-container').hide();
$('.tabset-1 #tab-1').show();
$('.tabset-1 ul li:first').addClass('active');
$('.tabset-1 ul li a').click(function(){ 
$('.tabset-1 ul li').removeClass('active');
$(this).parent().addClass('active'); 
  var currentTab = $(this).attr('href'); 
  	$('.tabset-1 .tab-container').hide();
  	$(currentTab).fadeIn();
  return false;
  });
  
//second tab set
$('.tabset-2 div').hide();
$('.tabset-2 div:first').show();
$('.tabset-2 ul li:first').addClass('active');
$('.tabset-2 ul li a').click(function(){ 
$('.tabset-2 ul li').removeClass('active');
$(this).parent().addClass('active'); 
  var currentTab = $(this).attr('href'); 
  	$('.tabset-2 div').hide();
  	$(currentTab).fadeIn();
  return false;
  });
  
//third tab set
$('.tabset-3 div').hide();
$('.tabset-3 div:first').show();
$('.tabset-3 ul li:first').addClass('active');
$('.tabset-3 ul li a').click(function(){ 
$('.tabset-3 ul li').removeClass('active');
$(this).parent().addClass('active'); 
  var currentTab = $(this).attr('href'); 
  	$('.tabset-3 div').hide();
  	$(currentTab).fadeIn();
  return false;
  });
