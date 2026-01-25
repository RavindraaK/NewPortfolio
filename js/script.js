// navigation bar effect on scroll

window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// service section

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtns, i) => {
    learnmoreBtns.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

// projects section

const projectsModals = document.querySelectorAll(".projects-model");
const imgCards = document.querySelectorAll(".img-card");
const projectsCloseBtns = document.querySelectorAll(".projects-close-btn");

var projectsModal = function(modalClick){
    projectsModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectsModal(i);
    });
});

projectsCloseBtns.forEach((projectsCloseBtn) => {
    projectsCloseBtn.addEventListener("click", () => {
        projectsModals.forEach((projectsModalView) => {
            projectsModalView.classList.remove("active");
        });
    });
});

//   website dark/light theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
}
if (savedIcon) {
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// scroll to top button

const scrollTopBtn =  document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", this.window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let ids = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const activeLink = document.querySelector(".nav-items a[href*='" + ids + "']");
            if (activeLink) activeLink.classList.add("active");
        } else {
            const activeLink = document.querySelector(".nav-items a[href*='" + ids + "']");
            if (activeLink) activeLink.classList.remove("active");
        }
    });
});

// Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
});

// scroll reveal animations
// common reveal options to create reveal animations;
ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 100
 });

// target elements, and specify options to create reveal animations
 ScrollReveal().reveal('.home .info h2, .animation-text, .section-title-01, .section-title-02', {delay: 500, origin: 'left' });
 ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 600, origin: 'right' });
 ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom' });
 ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left' , interval: 200 });
 ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom' });
 ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right' });
 ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval:200 });
 ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700, origin: 'left' });
 ScrollReveal().reveal('.experience-card, .service-card, .education, .projects .img-card', {delay: 800, origin: 'bottom', interval: 200 });
 ScrollReveal().reveal('footer .group', {delay: 500, origin: 'top', interval: 200 }); 


//  multiple text effect (guard in case Typed.js isn't yet loaded)
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Software Engineer', 'Editor', 'Chess player'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
} else {
    // Typed not available — don't throw, continue script execution
    console.warn('Typed.js not available — skipping multiple-text initialization.');
}

// Read More (per experience card) — collapse other cards first, toggle only clicked card
document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.experience-card');
        if (!card) return;

        // Collapse all other cards
        document.querySelectorAll('.experience-card').forEach(otherCard => {
            if (otherCard === card) return;
            const otherDots = otherCard.querySelector('.dots');
            const otherMore = otherCard.querySelector('.more');
            const otherBtn = otherCard.querySelector('.read-more-btn');

            if (otherDots) otherDots.style.display = 'inline';
            if (otherMore) otherMore.style.display = 'none';
            if (otherBtn) otherBtn.innerText = 'Read more';
        });

        // Toggle the clicked card
        const dots = card.querySelector('.dots');
        const more = card.querySelector('.more');

        if (!dots || !more) return;

        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            btn.innerText = 'Read more';
            more.style.display = 'none';
        } else {
            dots.style.display = 'none';
            btn.innerText = 'Read less';
            more.style.display = 'inline';
        }
    });
});

/* PCB color picker logic */
(function () {
    const colorInput = document.getElementById('pcbColor');
    const resetBtn = document.querySelector('.pcb-reset-btn');
    const indicator = document.querySelector('.pcb-indicator');
    const root = document.documentElement;
    const LS_KEY = 'pcb-accent';

    // fallback defaults
    const DEFAULT_HEX = '#6a59d1';

    function hexToRgb(hex) {
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(h => h + h).join('');
        const num = parseInt(hex, 16);
        return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
    }

    function setPcbColor(hex) {
        if (!hex) return;
        root.style.setProperty('--pcb-accent', hex);
        const [r, g, b] = hexToRgb(hex);
        root.style.setProperty('--pcb-accent-rgb', `${r}, ${g}, ${b}`);
        if (indicator) indicator.style.background = hex;
        if (colorInput) colorInput.value = hex;
        localStorage.setItem(LS_KEY, hex);
    }

    // init from storage -> css var, then update UI
    try {
        const saved = localStorage.getItem(LS_KEY);
        const computed = getComputedStyle(root).getPropertyValue('--pcb-accent').trim() || '';
        const initial = saved || computed || DEFAULT_HEX;
        setPcbColor(initial);
    } catch (e) {
        setPcbColor(DEFAULT_HEX);
    }

    if (colorInput) {
        colorInput.addEventListener('input', (e) => setPcbColor(e.target.value));
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem(LS_KEY);
            setPcbColor(DEFAULT_HEX);
        });
    }
})();

/* Open Gmail compose (uses mailto: href if present) */
;(function () {
	const emailLink = document.getElementById('emailLink');
	if (!emailLink) return;

	const fallbackMail = 'mailto:4500ravindra@gmail.com';

	function openGmailCompose(href) {
		let target = href;
		if (href && href.startsWith('mailto:')) {
			const mail = href.slice(7);
			const [addr, q] = mail.split('?');
			const params = new URLSearchParams(q || '');
			const to = addr || '';
			const subject = params.get('subject') || '';
			const body = params.get('body') || '';
			target = 'https://mail.google.com/mail/?view=cm&fs=1'
				+ (to ? '&to=' + encodeURIComponent(to) : '')
				+ (subject ? '&su=' + encodeURIComponent(subject) : '')
				+ (body ? '&body=' + encodeURIComponent(body) : '');
		}
		// open compose in new tab (user can sign in to Gmail if needed)
		window.open(target, '_blank');
	}

	emailLink.addEventListener('click', (e) => {
		if (e && typeof e.preventDefault === 'function') e.preventDefault();
		const mailHref = emailLink.getAttribute('href') || fallbackMail;
		openGmailCompose(mailHref);
	});

	// keyboard activation (Enter / Space)
	emailLink.addEventListener('keydown', (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			const mailHref = emailLink.getAttribute('href') || fallbackMail;
			openGmailCompose(mailHref);
		}
	});
})();
