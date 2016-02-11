(function(){
  document.addEventListener('DOMContentLoaded', function(){

			/* JS HTML Sortable */
			$('.row-sortable').sortable({
				forcePlaceholderSize: true,
				items: 'section' ,
				cursor: 'pointer',
  				placeholder: '<section>&nbsp;</section>'
			});

			/* Manage Watchlist Delete */
			$(".delbutton").click(function(){

			//Save the link in a variable called element
			var element = $(this);

			//Find the id of the link that was clicked
			var del_id = element.attr("id");

			//Built a url to send
			var info = 'id=' + del_id;

	         $(this).parents(".record").animate({ backgroundColor: "#fbc7c7" },1000)
			.animate({ opacity: "hide" }, 1000);

			return false;

			});


  });
})();