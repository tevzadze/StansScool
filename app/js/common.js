$(function() {
    //video play
    let main = document.querySelector('main')
    if (main.classList.contains('home')) {
        let playButton = document.querySelectorAll('.play')
        let videos = document.querySelectorAll('video')

        for (let i = 0; i < playButton.length; i++) {
            playButton[i].addEventListener('click', function() {
                videos[i].setAttribute("controls", "controls")
                videos[i].play()
                playButton[i].classList.add('inactive')
            })
        }

        // openOS
        function openOsChars() {
            let osButtons = document.querySelectorAll('.os span')
            let osWrappers = document.querySelectorAll('.os-list')
            let closeButton = document.querySelectorAll('.os-list .close')
            for (let i = 0; i < osButtons.length; i++) {
                osButtons[i].addEventListener('click', function() {

                    if (!osButtons[i].classList.contains('active')) {
                        for (let i = 0; i < osButtons.length; i++) {
                            osWrappers[i].classList.remove('active')
                            osButtons[i].classList.remove('active')
                        }
                        osWrappers[i].classList.add('active')
                        osButtons[i].classList.add('active')
                    } else {
                        for (let i = 0; i < osButtons.length; i++) {
                            osWrappers[i].classList.remove('active')
                            osButtons[i].classList.remove('active')
                        }
                    }
                })
                closeButton[i].addEventListener('click', function() {
                    osButtons[i].classList.remove('active')
                    osWrappers[i].classList.remove('active')
                })
            }
        }

        openOsChars()

        let questions = document.querySelectorAll('.openQuestion')
        let answers = document.querySelectorAll('.contentQuestion')

        for (let i = 0; i < questions.length; i++) {
            questions[i].addEventListener('click', function() {
                answers[i].classList.toggle('active')
                questions[i].classList.toggle('active')
            })
        }

        //offset from bottom of viewport
        function inViewport(item, min, max) {
            let y = item.getBoundingClientRect().top
            let itemHeight = item.getBoundingClientRect().height
            let wh = window.innerHeight
            let bot = (-(y - wh)) - itemHeight / 2
            let top = y + itemHeight / 2

            if (bot > min & top > max) {
                return true
            } else {
                return false
            }
        }

        let heroVideo = document.querySelector('.hero-section-video')

        function videoScale() {
            let y = heroVideo.getBoundingClientRect().top
            let itemHeight = heroVideo.getBoundingClientRect().height
            let wh = window.innerHeight
            let bot = (-(y - wh)) - itemHeight / 2
            console.log(bot)
            let scale = (bot / 1000) + 0.8
            if (scale > 0.1 && scale < 1.1) {
                heroVideo.style.transform = `scale3d(${scale},${scale},1)`
            }
        }

        let feauters = document.querySelectorAll('.features-section-main-element')
        let monitor = document.querySelector('.monitor-div')
        let marks = document.querySelector('.advantages-section-pics')

        let nameIsStan = document.querySelector('.story-section-text')
        let myStory = document.querySelector('.roll-block')
        let cariculum = document.querySelectorAll('.lesson-section-main-element')

        window.addEventListener('scroll', function() {
            //cariculum animation 
            for (let i = 0; i < 2; i++) {

                if (inViewport(cariculum[i], -200, -200)) {
                    cariculum[i].classList.add('visible')
                } else if (cariculum[i].classList.contains('visible')) {
                    cariculum[i].classList.remove('visible')
                }
            }
            // my name is..
            if (inViewport(nameIsStan, -200, -200) && !myStory.classList.contains('visible')) {
                myStory.classList.add('visible')
                console.log('adddded')
            } else if (!inViewport(nameIsStan, -220, -220) && myStory.classList.contains('visible')) {
                myStory.classList.remove('visible')
            }
            // infoInViewport(item)
            //Big marks

            if (inViewport(marks, 100, 100) && !marks.classList.contains('visible')) {
                marks.classList.add('visible')
                console.log('marks move')
            } else if (!inViewport(marks, 100, 100) && marks.classList.contains('visible')) {
                marks.classList.remove('visible')
                console.log('marks reset')
            }

            // video scale
            if (inViewport(heroVideo, 0, 0)) {
                videoScale()
                console.log('videoscale')
            }
        })

        $('#small-dialog .button-wrapper').on("click", function() {
            // preventDefault();
            $.magnificPopup.close();
        });
    }

    if (window.innerWidth < 1024) {
        let enrollLink = document.querySelector('.enrollButton')
        let priceBlock = document.querySelector('#price')
        let scrollDiv = document.querySelector("div[data-scroll]");
        if(enrollLink) {
            enrollLink.addEventListener("click", clickHandler);
        }
        

        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }

});
let preloader = document.querySelector('.preloader')
window.onload = function() {
    setTimeout(function() {
        document.body.classList.add('loaded2');
        setTimeout(function() {
            preloader.remove()
        }, 300)
    }, 1200);
}

$('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
});