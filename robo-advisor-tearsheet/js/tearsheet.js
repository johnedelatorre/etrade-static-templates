(function(){
  document.addEventListener('DOMContentLoaded', function(){

  var w = window;
  var d = document;
  var wizard = d.querySelector('.wizard');
  var pageWrapper = d.querySelector('.page-wrapper');
  var footerEl = d.querySelector('footer');
  var windowWidth = window.innerWidth;

  // add animation for 2sec
  function addAnimation(){
    var animateFadein = 'animate-fadein';
    if(! (wizard.className.indexOf('result') > -1)){     
      var body = d.querySelector('body')
      body.classList.add(animateFadein);
      w.setTimeout(function(){body.classList.remove(animateFadein)}, 2000);
    }
  }
  addAnimation();

  // fadeout page 
  function fadeout(){
    var animateFadeout = 'animate-fadeout';
    d.querySelector('.next').addEventListener('click', function(){
      wizard.classList.add(animateFadeout);
      w.setTimeout(function(){wizard.classList.remove(animateFadeout)}, 1500);
    });
  }
  fadeout();

  // Footer: Help tooltip
  function showTooltip (){
    d.querySelector('footer .question').addEventListener('click', function(e){           
      var footerPopup = d.querySelector('footer .popover');
      footerPopup.classList.add('show');
      var closeButton = d.querySelector('footer .popover.show .close');
      closeButton.addEventListener('click', function(){
        footerPopup.classList.remove('show');
      });
    });
  }
  showTooltip();

  // Activate the panel on click
  function activetePanel(){
    var option = d.querySelectorAll('.option');
    var formWrapper = d.querySelector('.form-wrapper');
    var goalInput = d.querySelector('.goal input');
    var optionWrapper = d.querySelector('.option-wrapper');
    var next = d.querySelector('.next');
    [].forEach.call(option, function(el){
      el.addEventListener('click', function(){
        el.classList.add('active');
        el.parentNode.classList.add('selected');
        if(el.parentNode.className.indexOf('q1') > -1){
          formWrapper.classList.add('selected');
          goalInput.value = el.getAttribute('data-input-val');
        }
        next.disabled = false;
        next.classList.add('expand');
      });
    });
  }
  activetePanel();

  });
})();