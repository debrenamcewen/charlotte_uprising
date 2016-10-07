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
      document.getElementsByClassName("outer-slider")[0].style.WebkitFilter='opacity(10%)';
      document.getElementsByClassName("icons2")[0].style.WebkitFilter='opacity(10%)';
      document.getElementsByClassName("last-half")[0].style.WebkitFilter='opacity(10%)';
      e.preventDefault()
    }

    var closeLink = document.querySelector('.modal-close');

    closeLink.onclick = function(){
      modal.style.display = 'none';
      document.getElementsByClassName("outer-slider")[0].style.WebkitFilter='opacity(100%)';
      document.getElementsByClassName("icons2")[0].style.WebkitFilter='opacity(100%)';
      document.getElementsByClassName("last-half")[0].style.WebkitFilter='opacity(100%)';
    }

});

  $(function(){

    $('.burger-button').click(function(event){

      event.preventDefault()

        $('.burger-link').slideToggle('fast');

    })
    
})
