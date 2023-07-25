document.addEventListener("DOMContentLoaded", function(){
    const progressBarInner = document.querySelector(".progress-bar");

    window.addEventListener('scroll', function(){
        let h = this.document.documentElement;

        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;

        let percent = st / (sh - h.clientHeight) * 100;
        let roundedPercent = Math.round(percent);

        progressBarInner.style.width = roundedPercent + "%";
        progressBarInner.innerText = roundedPercent + "%";
    })
})