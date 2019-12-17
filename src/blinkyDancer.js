var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  makeDancer.call(this, top, left, timeBetweenSteps );
  // debugger;
  // blinkyDancer = new makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //this.oldStep = this.stepFunc;
  // debugger;


  // return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);


makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // debugger;
  //this.oldStep();
  makeDancer.prototype.step.call(this, arguments);
  // this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};