const slides = document.querySelectorAll('.slide')
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})


function slideImage() {
    if (counter == slides.length) {
        counter = 0

    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
    counter += 1


}
setInterval(slideImage, 2000);
