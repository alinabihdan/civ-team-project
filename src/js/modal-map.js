$(document).ready(function () {
        $('.popup-youtube, .popup-gmaps').magnificPopup({
          disableOn: 320,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
      });  