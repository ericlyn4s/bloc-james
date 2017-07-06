var pointsArray = document.getElementsByClassName('point');

 var animatePoints = function(points) {
   var revealPoint = function(index) {
     points[index].style.opacity = 1;
     points[index].style.transform = "scaleX(1) translateY(0)";
     points[index].style.msTransform = "scaleX(1) translateY(0)";
     points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
   };

   for (var i = 0; i < points.length; i++) {
     revealPoint(i);
   }
};

window.onload = function() {
  // Automatically animate the points on a tall screen where scrolling can't trigger the animation
     if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }

  window.addEventListener('scroll', function(event) {
    if (pointsArray[0].getBoundingClientRect().top <= 500) {
        animatePoints(pointsArray);
    }
  });
}
