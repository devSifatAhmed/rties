let timer = document.getElementById("timer");
let count = $("#timer").attr("data-time");
$("iframe").click(function(){
    console.log("Cliked");
});
$(iframe).click(function(){
    const inter = setInterval(() => {
        count--;
        timer.innerHTML = count;
        if (count <= -1) {
            clearInterval(inter);
            timer.innerHTML = "👍";
        }
    }, 1000);
});

// ভিডিও উপাদানের রেফারেন্স নিতে একটি ইভেন্ট লিস্টেনার যোগ করুন
var videoElement = document.querySelector("iframe");
// আপনার ভিডিও ইউটিউব এম্বেড কোডের ইউআরএল
var embeddedVideoUrl = "https://www.youtube.com/watch?v=tU40ypO6Ohw&t";
// ভিডিও ইউআরএল সেট করুন
videoElement.src = embeddedVideoUrl;

videoElement.addEventListener("load", function() {
    var isVideoPlaying = !videoElement.paused;
    
    if (isVideoPlaying) {
        console.log("ভিডিও চলছে!");
    } else {
        console.log("ভিডিও আটকে আছে অথবা প্লে হয়নি।");
    }
});
