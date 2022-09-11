const ScrollDown = {
    init() {
        $(".scroll-down").click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 1000);
        });
    }
  }
  
export default ScrollDown