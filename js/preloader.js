const chars = document.querySelectorAll('.brand-text-wrapper .char');
const logo = document.querySelector('.logo-wrapper');
const totalDuration = 2.2;
const loadingBar = document.querySelector('.loading-bar');
const loadingBarWidth = loadingBar.offsetWidth; // Get actual widt
gsap.timeline({
    onComplete: () => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // Match the transition duration
    }
})
.from(logo, {
    opacity: 0,
    y: -20,
    duration: 0.5,
    ease: 'power2.out'
}, 0)
.from(chars, {
    opacity: 0,
    y: 10,
    duration: 0.4,
    stagger: 0.2,
    ease: 'power4.out'
}, 0.3)
.to('.loading-progress', {
    width: loadingBarWidth, // Use actual width instead of fixed value
    duration: totalDuration,
    snap: 30,
    ease: 'linear'
}, 0)
.from('.brand-text-wrapper .char.red', {
    scale: 1.2,
    duration: 0.4,
    ease: 'elastic.out(1, 0.3)',
    repeat: 1,
    yoyo: true
}, '-=0.5');
