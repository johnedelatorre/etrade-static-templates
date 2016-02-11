// This globally enables placeholder attribute in older browsers
$(function() {
  "placeholder" in document.createElement("input") || $("input[placeholder]").each(function() {
    $(this).val(element.attr("placeholder")).addClass("placeholder")
  }).bind("focus", function() {
    $(this).val() == element.attr("placeholder") && $(this).val("").removeClass("placeholder")
  }).bind("blur", function() {
    "" == $(this).val() && $(this).val(element.attr("placeholder")).addClass("placeholder")
  })
});

// This setsup the clear icon for the clearable input type
(function(b) {
  b.fn.clearable = function() {
    var a = this;
    a.wrap('<div class="clearable-holder" />');
    var c = b('<span class="clearable-icon"></span>');
    a.parent().append(c);
    c.click(function() {
      a.val("")
    })
  }
})(jQuery);
$(".clearable").clearable();