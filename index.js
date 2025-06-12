
        AOS.init({ duration: 800, once: true });

        document.addEventListener("DOMContentLoaded", () => {
            const counters = document.querySelectorAll(".counter");
            counters.forEach(counter => {
                const update = () => {
                    const target = +counter.getAttribute("data-target");
                    let count = +counter.innerText.replace('+','') || 0;
                    const inc = target / 200;
                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + "+";
                        setTimeout(update, 20);
                    }
                };
                new IntersectionObserver(entries => {
                    if (entries[0].isIntersecting) {
                        counter.style.opacity = 1;
                        update();
                        observer.disconnect();
                    }
                }, { threshold: 1 }).observe(counter);
            });
        });
