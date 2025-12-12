


document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll(
        ".fade-left, .fade-right, .fade-top, .fade-bottom"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {

                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    animatedItems.forEach((item) => observer.observe(item));
});













let intelligenceSwiper = new Swiper(".produce-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    pagination: {
        el: ".produce-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".produce-button-next",
        prevEl: ".produce-button-prev",
    },
});









document.addEventListener("DOMContentLoaded", () => {
    const items  = document.querySelectorAll(".features__item");
    const panels = document.querySelectorAll(".features__panel");

    function setActive(tab) {
        items.forEach(i => i.classList.toggle("is-active", i.dataset.tab === tab));
        panels.forEach(p => p.classList.toggle("is-active", p.dataset.panel === tab));
    }

    items.forEach(item => {
        const btn = item.querySelector(".features__btn");
        if (!btn) return;

        btn.addEventListener("click", () => {
            setActive(item.dataset.tab);
        });
    });
});









$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu-faq').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }

    let accordion = new Accordion($('#accordion'), false);
});
