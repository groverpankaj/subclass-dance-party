$(document).ready(function() {
  window.dancers = [];

  var bodyWidth = $(window).width();
  var bodyHeight = $(window).height() - 50;

  let dancerOneX = 30;
  let dancerOneY = 50;


  $('#addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );

    if (dancerOneX < bodyHeight) {

      var dancer = new dancerMakerFunction(
        dancerOneX,
        dancerOneY,
        Math.random() * 5000
      );

      dancerOneX += 150;

      dancers.push(dancer);

      $('body').append(dancer.$node);

      addHoverOnDancers();
    }


  });

  let dancerTwoX = 30;
  let dancerTwoY = bodyWidth - 150;

  $('#addSecondButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    // var dancer = new dancerMakerFunction(
    //   $("body").height() * Math.random(),
    //   $("body").width() * Math.random(),
    //   Math.random() * 1000
    // );
    // $('body').append(dancer.$node);


    if (dancerTwoX < bodyHeight) {

      var dancer = new dancerMakerFunction(
        dancerTwoX,
        dancerTwoY,
        Math.random() * 5000
      );

      dancerTwoX += 150;

      dancers.push(dancer);

      $('body').append(dancer.$node);

      addHoverOnDancers();
    }
  });

  let linePosX = bodyHeight / 2;
  let linePosY = 100;
  // let linePosY = bodyWidth / 2;

  $('#lineUp').on('click', function(event) {
    for (let i = 0; i < dancers.length; i++) {
      // let temp = linePosY + linePosY *  (-1)**i * i;
      dancers[i].lineUp.call(dancers[i], linePosX, linePosY);
      linePosY += 150;
    }
    linePosY = bodyHeight / 2;
  });

  let addHoverOnDancers = function() {

    $('.dancer').hover(function(eve) {
      //eve.css({'display': 'none'});
      $(this).css({'border': '2px solid #ffffff', 'width': '150px', 'height': '150px'});


    });
  };

});





