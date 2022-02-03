(function() {

    const slides = [
                `<article class="product">
                    <img class="product__img" src="img/baby-yoda.svg" alt="Baby Yoda">
                    <h3 class="product__title">Baby Yoda</h3>
                    <p class="product__description">Lorem ipsum .....</p>
                    <div class="product__buttons">
                        <button class="button button-card">Info</button>
                        <button class="button button-card">10.99 - Buy</button>
                    </div>
                </article>`,
                `<article class="product">
                    <img class="product__img" src="img/banana.svg" alt="Banana">
                    <h3 class="product__title">Banana</h3>
                    <p class="product__description">Lorem ipsum .....</p>
                    <div class="product__buttons">
                        <button class="button button-card">Info</button>
                        <button class="button button-card">9.99 - Buy</button>
                    </div>
                </article>`,
                `<article class="product">
                    <img class="product__img" src="img/girl.svg" alt="Girl">
                    <h3 class="product__title">Girl</h3>
                    <p class="product__description">Lorem ipsum .....</p>
                    <div class="product__buttons">
                        <button class="button button-card">Info</button>
                        <button class="button button-card">8.99 - Buy</button>
                    </div>
                </article>`,
                `<article class="product">
                    <img class="product__img" src="img/viking.svg" alt="Viking">
                    <h3 class="product__title">Viking</h3>
                    <p class="product__description">Lorem ipsum .....</p>
                    <div class="product__buttons">
                        <button class="button button-card">Info</button>
                        <button class="button button-card">6.99 - Buy</button>
                    </div>
                </article>`
    ];

    let currentSlideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.products__carousel-slide-container');
        slideContainer.innerHTML = slides[currentSlideIdx];
        if (window.innerWidth >= 640) {
            const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.innerWidth >= 960) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];    
            }
        }
    }

    function showNextSlide() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        showCurrentSlide();
    }

    function showPrevSlide() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.products__carousel-forward')
         .addEventListener('click', showNextSlide);

    document.querySelector('.products__carousel-back')
         .addEventListener('click', showPrevSlide);

    setInterval(showNextSlide, 3000);

    window.addEventListener('resize', showCurrentSlide);
})();