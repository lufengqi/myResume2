FastClick.attach(document.body);
//->动态设定REM的根植
~function (desW) {
    var winW = document.documentElement.clientWidth;
    if (winW > desW) {
        var oMain = document.querySelector(".swiper-container");
        oMain.style.margin = "0 auto";
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);

//->音频自动播放
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music musicMove";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);

new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlideChangeEnd: function (swipe) {
        var n = swipe.activeIndex,
            slideAry = swipe.slides;
        [].forEach.call(slideAry, function (item, index) {
            if (index == n) {
                if (index == 0 || index == slideAry.length - 1) {
                    if (index == 0) {
                        item.id = "page4";
                        return
                    } else if (index == slideAry.length - 1) {
                        item.id = "page1";
                        return
                    }
                }
                item.id = "page" + index;
                return;
            }
            item.id = null;
        });
    }
});

