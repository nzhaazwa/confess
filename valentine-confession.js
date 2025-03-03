$(document).ready(function() {
    let audio = document.getElementById("backsound");

    $("#messageState").on("change", function() {
        $(".message").removeClass("openNor closeNor");

        if ($(this).is(":checked")) {
            $(".message").removeClass("closed no-anim").addClass("openNor");
            $(".heart").removeClass("closeHer openedHer").addClass("openHer");
            $(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
            console.log("Opening");

            // Memulai backsound
            audio.play();
        } else {
            $(".message").removeClass("no-anim").addClass("closeNor");
            $(".heart").removeClass("openHer openedHer").addClass("closeHer");
            $(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
            console.log("Closing");

            // Menghentikan dan mengulang backsound
            audio.pause();
            audio.currentTime = 0;
        }
    });

    $(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if ($(".message").hasClass("closeNor"))
            $(".message").addClass("closed");
        $(".message").removeClass("openNor closeNor").addClass("no-anim");
    });

    $(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        console.log("Animation End");
        if (!$(".heart").hasClass("closeHer"))
            $(".heart").addClass("openedHer beating");
        else
            $(".heart").addClass("no-anim").removeClass("beating");
        $(".heart").removeClass("openHer closeHer");
    });
});
