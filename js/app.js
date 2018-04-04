$(document).foundation();

$('.title-a').on('sticky.zf.stuckto:top', function () {
    $('.top-bar').addClass('shrink');
}).on('sticky.zf.unstuckfrom:top', function () {
    $('.top-bar').removeClass('shrink');
});

// Video
var videoPlayButton,
    videoWrapper = document.getElementsByClassName('video-wrapper')[0],
    video = document.getElementsByTagName('video')[0],
    videoMethods = {
        renderVideoPlayButton: function () {
            if (videoWrapper.contains(video)) {
                console.log("weeeee")
                this.formatVideoPlayButton()
                video.classList.add('has-media-controls-hidden')
                videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
                videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
            }
        },

        formatVideoPlayButton: function () {
            videoWrapper.insertAdjacentHTML('beforeend', '\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ')
        },

        hideVideoPlayButton: function () {
            video.removeAttribute('loop muted')
            console.log("whatata")
            video.volume = 0.5
            video.muted = false
            video.loop = false
            video.currentTime = 0
            video.play()
            videoPlayButton.classList.add('is-hidden')
            video.classList.remove('has-media-controls-hidden')
            video.setAttribute('controls', 'controls')
            video.setAttribute('onClick', 'togglePlay()')
            video.addEventListener('ended', videoEnd)
        }
    };

videoMethods.renderVideoPlayButton();

var togglePlay = function () {
    return video.paused ? video.play() : video.pause();
};
var videoEnd = function () {
    video.muted = true;
    video.loop = true;
    video.removeAttribute('onClick', 'togglePlay()');
    video.play();
    videoMethods.renderVideoPlayButton();
};

// JavaScript for label effects only
$(document).ready(function () {
    $(".input-effect input, .input-effect textarea").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("has-content");
        } else {
            $(this).removeClass("has-content");
        }
    })
});

// textarea auto-expand
$(document)
    .on('focus.textarea', '.autoExpand', function () {
        var savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.textarea', '.autoExpand', function () {
        var minRows = this.getAttribute('data-min-rows') | 0,
            rows;
        this.rows = minRows;
        console.log(this.scrollHeight, this.baseScrollHeight);
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 29.25);
        this.rows = minRows + rows;
    });
