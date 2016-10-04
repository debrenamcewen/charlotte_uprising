$(document).ready(function(){

  function nextLinkClicked(){
    var currentImageShown = $(".shown");

    var nextImageShown = currentImageShown.next();

    if (nextImageShown.length === 0 ){
      nextImageShown = $(".inner-slider img").first();
    }

    currentImageShown.removeClass(".shown").addClass(".hidden").css("z-index", -10);

    nextImageShown.addClass(".shown").removeClass(".hidden").css("z-index", 20);
    $(".inner-slider img").not([currentImageShown, nextImageShown]).css("z-index", 1);

    }

    $(".next-link").on("click", function(e){

        nextLinkClicked();

        console.log("this link has been clicked")

        e.preventDefault();

    });

    console.log("are you getting here??????")


    function previousLinkClicked(e){

      var currentImageShown = $(".shown");

      var nextImageShown = currentImageShown.prev();

      if(nextImageShown.length == 0){
        nextImageShown = $(".inner-slider img").last();
      }

      currentImageShown.removeClass(".shown").addClass(".hidden").css("z-index", -10);

      nextImageShown.addClass(".shown").removeClass(".hidden").css("z-index", 20);

      $(".inner-slider img").not([currentImageShown, nextImageShown]).css("z-index", 1);

    }

    $(".previous-link").on("click", function(e){

      previousLinkClicked();

      console.log("this link has been clicked")

      e.preventDefault();

    });

    setInterval(nextLinkClicked, 5000);

      console.log("are you getting here??????")

});
