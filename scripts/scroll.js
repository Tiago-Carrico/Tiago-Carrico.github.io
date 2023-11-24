document.addEventListener('DOMContentLoaded', function() {
  (function() {
    var oldScroll = 0;

    var sections = document.querySelectorAll('section')
    
    var onScroll = function() {
      var windowHeight = window.innerHeight;
      var offset = window.pageYOffset;
      if (offset <= oldScroll) {
        return;
      };

      sections.forEach(function(section) {
        var sectionOffset = section.offsetTop + section.offsetHeight;
        var calc = -1 * (offset + windowHeight - sectionOffset);
        section.style.transform = 'translateX(' + (calc >= 0 ? calc : 0) + 'px)';
      });

      oldScroll = offset;
    }

    //To stop the animation from mucking up the mobile view, one day I'll find a way to actually fix it but for now? it's 1:25 AM and I got class at 9
    if (window.matchMedia("(min-width: 1000px)").matches) {
        window.addEventListener('scroll', onScroll);
        onScroll();
    }
    
    
  })();
  
});