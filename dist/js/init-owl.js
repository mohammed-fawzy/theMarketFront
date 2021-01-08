$('#sync1').owlCarousel({
    rtl: true,
    loop: true,
    margin: 0,
    autoplay: false,
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    dots: false,
    nav: true,
    navText: ["<i class='fa fa-angle-left'>", "<i class='fa fa-angle-right'>"],
    responsive: {
       0: {
          items: 1
       },
       600: {
          items: 1
       },
       1000: {
          items: 1
       }
    }
 });