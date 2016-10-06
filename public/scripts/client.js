$(document).ready(function(){

  function nextLinkClicked(){
    var currentImageShown = $(".shown");

    var nextImageShown = currentImageShown.next();

    if (nextImageShown.length === 0 ){
      nextImageShown = $(".inner-slider img").first();
    }

    currentImageShown.removeClass("shown").addClass("hidden").css("z-index", -10);

    nextImageShown.addClass("shown").removeClass("hidden").css("z-index", 20);
    $(".inner-slider img").not([currentImageShown, nextImageShown]).css("z-index", 1);

    }

    $(".next-link").on("click", function(e){

        nextLinkClicked();

        e.preventDefault();

    });

    function previousLinkClicked(e){

      var currentImageShown = $(".shown");

      var nextImageShown = currentImageShown.prev();

      if(nextImageShown.length == 0){
        nextImageShown = $(".inner-slider img").last();
      }

      currentImageShown.removeClass("shown").addClass("hidden").css("z-index", -10);

      nextImageShown.addClass("shown").removeClass("hidden").css("z-index", 20);

      $(".inner-slider img").not([currentImageShown, nextImageShown]).css("z-index", 1);

    }

    $(".previous-link").on("click", function(e){

      previousLinkClicked();

      e.preventDefault();

    });

    setInterval(nextLinkClicked, 5000);

    var body = document.querySelector('.home');

    var modal = document.querySelector('.modal');

    var modalLink = document.querySelector('.modal-link');

    modalLink.onclick = function(e){
      modal.style.display = 'block';
      document.getElementsByClassName("outer-slider")[0].style.WebkitFilter='blur(3px)';
      document.getElementsByClassName("icons2")[0].style.WebkitFilter='blur(3px)';
      document.getElementsByClassName("last-half")[0].style.WebkitFilter='blur(3px)';
      e.preventDefault()

      
      // $('body,html').css("background-color", black);
    }

    var closeLink = document.querySelector('.modal-close');

    closeLink.onclick = function(){
      modal.style.display = 'none';
      document.getElementsByClassName("outer-slider")[0].style.WebkitFilter='blur(0px)';
      document.getElementsByClassName("icons2")[0].style.WebkitFilter='blur(0px)';
      document.getElementsByClassName("last-half")[0].style.WebkitFilter='blur(0px)';
    }

});

$(function(){
  $('.burger-button').click(function(event){
    event.preventDefault()
      $('.burger-link').slideToggle('fast')
  })
})
