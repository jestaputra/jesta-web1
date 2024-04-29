let showLi = document.getElementById('showLi')
let list = document.getElementById('list')
document.addEventListener('DOMContentLoaded', function() {
    // Mengambil semua tautan dalam navigasi
    const navLinks = document.querySelectorAll('nav ul li a');

    // Menambahkan event listener untuk setiap tautan
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Mencegah default behavior dari tautan
            event.preventDefault();

            // Mengambil target dari tautan yang diklik
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Menggulir ke bagian yang sesuai dengan animasi smooth
            smoothScroll(targetSection);
        });
    });

    // Fungsi untuk menggulir ke bagian target dengan animasi
    function smoothScroll(target) {
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset || window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Durasi animasi dalam milidetik
        let start = null;

        // Fungsi animasi scroll
        function animation(currentTime) {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Fungsi untuk mengatur kecepatan animasi
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        // Mulai animasi scroll
        requestAnimationFrame(animation);
    }
});

list.onclick = function(){
    showLi.classList.toggle('show-ul')
}

