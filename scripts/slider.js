$( document ).ready(function() {
    $('.preview').slick({
      dots: true,
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="47" viewBox="131.582 123.303 233.356 595.282" xml:space="preserve"><path d="M340.705 123.303c6.186 0 12.396 3.353 17.135 10.113 9.465 13.471 9.465 35.269 0 48.739L190.047 420.941l167.792 238.802c9.465 13.471 9.465 35.288 0 48.739-9.464 13.47-24.795 13.47-34.257 0L138.679 445.328c-9.464-13.47-9.464-35.288 0-48.739L323.583 133.42c4.723-6.745 10.922-10.117 17.122-10.117z"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="47" viewBox="131.582 123.303 233.356 595.282" xml:space="preserve"><path d="M155.815 718.585c-6.186 0-12.396-3.353-17.135-10.113-9.465-13.471-9.465-35.269 0-48.739l167.792-238.786L138.68 182.145c-9.465-13.47-9.465-35.288 0-48.739 9.464-13.47 24.795-13.47 34.257 0L357.84 396.56c9.464 13.47 9.464 35.288 0 48.739L172.937 708.468c-4.723 6.745-10.922 10.117-17.122 10.117z"/></svg></button>',
    });
  });