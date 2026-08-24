(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var toggle = document.querySelector('.nav-toggle');
        var links = document.querySelector('.nav-links');
        var backdrop = document.querySelector('.nav-backdrop');
        if (!toggle || !links) return;

        function closeMenu() {
            toggle.classList.remove('nav-open');
            links.classList.remove('nav-open');
            if (backdrop) backdrop.classList.remove('nav-open');
            document.body.style.overflow = '';
        }

        function openMenu() {
            toggle.classList.add('nav-open');
            links.classList.add('nav-open');
            if (backdrop) backdrop.classList.add('nav-open');
            document.body.style.overflow = 'hidden';
        }

        toggle.addEventListener('click', function () {
            if (links.classList.contains('nav-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        if (backdrop) backdrop.addEventListener('click', closeMenu);

        links.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 880) closeMenu();
        });
    });
})();
