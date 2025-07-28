document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const siteHeader = document.querySelector('.site-header');

    if (mobileNavToggle && siteHeader) {
        mobileNavToggle.addEventListener('click', () => {
            siteHeader.classList.toggle('nav-open');
            const isNavOpen = siteHeader.classList.contains('nav-open');
            mobileNavToggle.setAttribute('aria-label', isNavOpen ? 'Close menu' : 'Open menu');
        });
    }
});

/* animation for the header */
  // Typewriter effect for the subtitle
                const text = "Welcome to the Love Shayari section, where we celebrate the beauty of love through words.";
                const el = document.getElementById("typewriter-text");
                let i = 0;
                function typeWriter() {
                    if (i < text.length) {
                        el.textContent += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 38);
                    }
                }
                typeWriter();

