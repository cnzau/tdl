$(document).foundation();

$(document).ready(function() {
  $(window).on("scroll", function() {
    if (Math.round($(window).scrollTop()) > 70) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });
});
//$(document).ready(function () {
//    $(window).on('scroll click', function () {
//        $("body").html('<div class="callout alert text-center"> Ooops!!! Kindly make the down payment for site review. </div>');
//    });
//});
$(document).ready(function() {
  $("#responsive-menu-icon").click(function() {
    var nav = $(".m-nav");
    var navWidth = nav.width();
    if (navWidth < 150) {
      TweenMax.to(nav, 1, {
        width: 150
      });
    } else {
      TweenMax.to(nav, 1, {
        width: 0
      });
    }
  });
  // menu icon jquery
  // when whole menu div is clicked
  $("#responsive-menu-icon").click(function() {
    // if the menu height is not full, transform icon
    var nav = $(".m-nav");
    var navWidth = nav.width();
    if (navWidth < 150) {
      $("#a").addClass("rotate-down");
      $("#responsive-menu-icon").addClass("menu-up");
      $("#b").addClass("disappear");
      $("#c").addClass("rotate-up");
    } else {
      // if it's not less than full height, remove animation classes
      $("#a").removeClass("rotate-down");
      $("#responsive-menu-icon").removeClass("menu-up");
      $("#b").removeClass("disappear");
      $("#c").removeClass("rotate-up");
    }
  });
});

//$('.title-a').on('sticky.zf.stuckto:top', function () {
//    $('.top-bar').addClass('shrink');
//}).on('sticky.zf.unstuckfrom:top', function () {
//    $('.top-bar').removeClass('shrink');
//});

// Video
var videoPlayButton,
  videoWrapper = document.getElementsByClassName("video-wrapper")[0],
  video = document.getElementsByTagName("video")[0],
  videoMethods = {
    renderVideoPlayButton: function() {
      if (videoWrapper.contains(video)) {
        console.log("weeeee");
        this.formatVideoPlayButton();
        video.classList.add("has-media-controls-hidden");
        videoPlayButton = document.getElementsByClassName(
          "video-overlay-play-button"
        )[0];
        videoPlayButton.addEventListener("click", this.hideVideoPlayButton);
      }
    },

    formatVideoPlayButton: function() {
      videoWrapper.insertAdjacentHTML(
        "beforeend",
        '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            '
      );
    },

    hideVideoPlayButton: function() {
      video.removeAttribute("loop muted");
      console.log("whatata");
      video.volume = 0.5;
      video.muted = false;
      video.loop = false;
      video.currentTime = 0;
      video.play();
      videoPlayButton.classList.add("is-hidden");
      video.classList.remove("has-media-controls-hidden");
      video.setAttribute("controls", "controls");
      video.setAttribute("onClick", "togglePlay()");
      //            video.addEventListener('ended', videoEnd)
    }
  };

videoMethods.renderVideoPlayButton();

var togglePlay = function() {
  return video.paused ? video.play() : video.pause();
};
//var videoEnd = function () {
//    video.muted = true;
//    video.loop = true;
//    video.removeAttribute('onClick', 'togglePlay()');
//    video.play();
//    videoMethods.renderVideoPlayButton();
//};

// JavaScript for label effects only
$(document).ready(function() {
  $(".input-effect input, .input-effect textarea").focusout(function() {
    if ($(this).val() != "") {
      $(this).addClass("has-content");
    } else {
      $(this).removeClass("has-content");
    }
  });
});

// textarea auto-expand
$(document)
  .on("focus.textarea", ".autoExpand", function() {
    var savedValue = this.value;
    this.value = "";
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
  })
  .on("input.textarea", ".autoExpand", function() {
    var minRows = this.getAttribute("data-min-rows") | 0,
      rows;
    this.rows = minRows;
    console.log(this.scrollHeight, this.baseScrollHeight);
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 29.25);
    this.rows = minRows + rows;
  });

// form validation passed, form will submit if submit event not returned false
$(document)
  .on("formvalid.zf.abide", function(ev, frm) {
    // ajax post form
    $.ajax({
      type: "POST",
      url: "../php/mail.php",
      data: $("#contact-form").serialize(),
      success: function() {
        $("#contact-form")[0].reset();
        $(".form_result").slideDown("slow", function() {
          $(this)
            .delay(3000)
            .slideUp("slow");
          $(this).fadeOut("slow");
        });
      }
    });
  })
  .on("submit", function(ev) {
    // to prevent form from submitting upon successful validation
    ev.preventDefault();
    console.log("Submit for form id " + ev.target.id + " intercepted");
  });

$(".gss").hover(
  function() {
    $(this)
      .find(".gss_a")
      .hide();
    $(this)
      .find(".gss_b")
      .show();
  },
  function() {
    $(this)
      .find(".gss_b")
      .hide();
    $(this)
      .find(".gss_a")
      .show();
  }
);
