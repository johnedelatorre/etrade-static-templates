$('.child-row, .child-content').hide();
$('.parent-row').click(function(event) {
$(this).next('.child-row').toggle();
$(this).find('.icon-arrow-right').toggleClass('icon-arrow-down');
});
   
$('.content-toggle').click(function(event) {
$(this).next('.child-content').toggle();
$(this).find('.icon-arrow-right').toggleClass('icon-arrow-down');
}); 
