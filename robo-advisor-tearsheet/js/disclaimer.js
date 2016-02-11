(function(){

  var d = document;
  
  //Show footer disclaimer hidden content 
  function footerShowContent (){
    var footerReadMoreBtn = d.querySelector('footer .read-more.details');
    footerReadMoreBtn.addEventListener('click', function(){
      this.parentNode.querySelector('.hidden-content.details').classList.toggle('hide');
    });
  }
  footerShowContent();

  //Mobile: Show disclaimer hidden content 
  function mobileShowContent (){
    var mobileReadDisclaimerBtn = d.querySelector('.page-wrapper .read-more.disclosures');
    var mobileReadDetailsBtn = d.querySelector('.page-wrapper .read-more.details');
    mobileReadDisclaimerBtn.addEventListener('click', function(){
      this.parentNode.querySelector('.hidden-content.disclosures').classList.toggle('hide');
    });
    mobileReadDetailsBtn.addEventListener('click', function(){
      this.parentNode.querySelector('.hidden-content.details').classList.toggle('hide');
    });
  }
  mobileShowContent();
})();