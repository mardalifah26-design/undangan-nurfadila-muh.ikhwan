// ================================
// COUNTDOWN
// ================================

const targetDate = new Date("July 16, 2026 10:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const hari = Math.floor(distance / (1000 * 60 * 60 * 24));

    const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const detik = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("timer").innerHTML =
            "<h2>Acara Sedang Berlangsung</h2>";

    }

}, 1000);


// ================================
// SCROLL HALUS SAAT TOMBOL DIKLIK
// ================================

document.querySelector(".button").addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#undangan").scrollIntoView({

        behavior:"smooth"

    });

});


// ================================
// ANIMASI SAAT SCROLL
// ================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";

    observer.observe(section);

});


// ================================
// JUDUL BROWSER BERKEDIP
// ================================

let statusJudul = true;

setInterval(()=>{

    document.title = statusJudul
        ? "💍 The Wedding Of Nurfadila & Ikhwan"
        : "🤍 Kami Menanti Kehadiran Anda";

    statusJudul = !statusJudul;

},2500);
