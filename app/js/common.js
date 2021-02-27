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


/* Play an animation on each click */


        // let questionMarks = document.querySelectorAll('.animationWrapper img')
        // let questionsWrapper = document.querySelector('.animationWrapper')
        // let wrapperWidth = questionsWrapper.getBoundingClientRect().width
        // let activeDrop = true
        // let resetEnable = true

        // //random function
        // function randomInteger(min, max) {
        //     let rand = min + Math.random() * (max + 1 - min);
        //     return Math.floor(rand);
        // }

        // function randomMarksPosition() {
        //     for (let i = 0; i < questionMarks.length; i++) {

        //         let randomNumber = randomInteger(0, 100)
        //         let wrapperPart = 0
        //         if (randomNumber < 60) {
        //             wrapperPart = 2
        //         } else if (60 > randomNumber || randomNumber < 80) {
        //             wrapperPart = 1
        //         } else {
        //             wrapperPart = 3
        //         }
        //         if (wrapperPart == 1) {
        //             let randomNumber = randomInteger(0, 20)
        //             let randomleft = (wrapperWidth / 10000) * randomNumber
        //             questionMarks[i].style.left = `${randomleft}rem`
        //         }
        //         if (wrapperPart == 2) {
        //             let randomNumber = randomInteger(20, 60)
        //             let randomleft = (wrapperWidth / 10000) * randomNumber
        //             questionMarks[i].style.left = `${randomleft}rem`
        //             questionMarks[i].classList.add('middle')
        //         }
        //         if (wrapperPart == 3) {
        //             let randomNumber = randomInteger(60, 80)
        //             let randomleft = (wrapperWidth / 10000) * randomNumber
        //             questionMarks[i].style.left = `${randomleft}rem`
        //         }
        //     }
        // }
        // randomMarksPosition();

        // function questionMarksRotate() {
        //     if (activeDrop) {
        //         activeDrop = false
        //         for (let i = 0; i < questionMarks.length; i++) {
        //             let rotateVariables = randomInteger(30, 60) * 10
        //             setTimeout(() => {
        //                 questionMarks[i].style.transform = `rotate(${rotateVariables}deg)`
        //                 questionMarks[i].style.bottom = `0rem`;
        //                 setTimeout(() => {
        //                     questionMarks[i].style.transition = 'all 0.3s ease'
        //                     let randomBottom = randomInteger(3, 5)
        //                     questionMarks[i].style.bottom = `${randomBottom*0.1}rem`;
        //                     setTimeout(() => {
        //                         questionMarks[i].style.transition = 'all 0.3s ease-in'
        //                         questionMarks[i].style.bottom = `0rem`;
        //                         setTimeout(() => {
        //                             questionMarks[i].style.transition = 'all 0.2s ease'
        //                             questionMarks[i].style.bottom = `0.1rem`;
        //                             setTimeout(() => {
        //                                 questionMarks[i].style.transition = 'all 0.2s ease-in'
        //                                 questionMarks[i].style.bottom = `0rem`;
        //                                 if (resetEnable == true && i == questionMarks.length - 1) {
        //                                     resetEnable = false
        //                                     console.log('eneble')
        //                                 }

        //                             }, 200);
        //                         }, 300);
        //                     }, 300);
        //                 }, 2000);

        //             }, randomInteger(0, 1000));

        //         }

        //     }
        // }

        // function questionMarksReset() {
        //     for (let i = 0; i < questionMarks.length; i++) {
        //         questionMarks[i].style.transition = 'none'
        //         questionMarks[i].style.transform = 'rotate(0)'
        //         questionMarks[i].style.bottom = '200%'
        //         setTimeout(() => {
        //             questionMarks[i].style.transition = 'all 2s ease-in'
        //         }, 1000)
        //         if (i == questionMarks.length - 1) {
        //             activeDrop = true
        //         }
        //     }
        // }


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

        // let counter = 2
        // let showMoreButton = document.querySelector('.showMore')
        // let showMoreButtonText = document.querySelector('.showMore span')
        // let allLesions = document.querySelectorAll('.lesson-section-main-element')

        // showMoreButton.addEventListener('click', function() {
        //     if(!showMoreButton.classList.contains('less')) {
        //         for (let i = 0; i < allLesions.length; i++) {
        //             allLesions[i].classList.add('active')
        //         }
        //         showMoreButton.classList.add('less')
        //         showMoreButtonText.innerHTML = 'Show Less'
        //     } else {
        //         for (let i = 2; i < allLesions.length; i++) {
        //             allLesions[i].classList.remove('active')
        //         }
        //         showMoreButton.classList.remove('less')
        //         showMoreButtonText.innerHTML = 'Show More'
        //     }
        // })

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

        // function infoInViewport(item) {
        //     let y = item.getBoundingClientRect().top
        //     let itemHeight = item.getBoundingClientRect().height
        //     let wh = window.innerHeight
        //     let bot = (-(y - wh)) - itemHeight
        //     let top = y

        //     if (bot > 0 & top > 0) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }



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
            // console.log(infoInViewport(nameIsStan))

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

            //monitor drop
            // if (inViewport(monitor, -200, -200) && activeDrop == true) {
            //     questionMarksRotate()
            //     console.log('drop it')
            // } else if (!inViewport(monitor, -200, -200) && resetEnable == false) {

            //     resetEnable = true
            //     questionMarksReset()
            //     console.log('reset it')
            // }

            // video scale
            if (inViewport(heroVideo, 0, 0)) {
                videoScale()
                console.log('videoscale')
            }

            // feautersMove (feauters[0], 1)
            // for (let i = 0; i < 4; i++) {
            //     if (inViewport(feauters[i], 0, 0)) {
            //         feautersMove(feauters[i], -1)
            //         if (i == 0 || i == 2) {
            //             feautersMove(feauters[i], 1)
            //         } else {
            //             feautersMove(feauters[i], -1)
            //         }
            //     }
            // }

        })
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
        $('#small-dialog .button-wrapper').on("click", function() {
            // preventDefault();
            $.magnificPopup.close();
        });
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