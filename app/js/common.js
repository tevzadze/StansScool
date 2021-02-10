$(function() {
    //video play

    let playButton = document.querySelectorAll('.play')
    let videos = document.querySelectorAll('video')

    for (let i = 0; i < playButton.length; i++) {
        playButton[i].addEventListener('click', function() {
            videos[i].setAttribute("controls", "controls")
            videos[i].play()
            playButton[i].classList.add('inactive')
        })
    }


    let questionMarks = document.querySelectorAll('.animationWrapper img')
    let questionsWrapper = document.querySelector('.animationWrapper')
    let wrapperWidth = questionsWrapper.getBoundingClientRect().width
    let activeDrop = true

    //random function
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    
    function questionMarksRotate() {
        if (activeDrop) {
            activeDrop = false
            for (let i = 0; i < questionMarks.length; i++) {
                let rotateVariables = randomInteger(50, 100) * 10

                setTimeout(() => {
                    questionMarks[i].style.transform = `rotate(${rotateVariables}deg)`
                    questionMarks[i].style.bottom = `0rem`;
                    setTimeout(() => {
                        questionMarks[i].style.transition = 'all 0.3s ease'
                        let randomBottom = randomInteger(3, 5)
                        questionMarks[i].style.bottom = `${randomBottom*0.1}rem`;
                        setTimeout(() => {
                            questionMarks[i].style.transition = 'all 0.3s ease-in'
                            questionMarks[i].style.bottom = `0rem`;
                            setTimeout(() => {
                                questionMarks[i].style.transition = 'all 0.2s ease'
                                questionMarks[i].style.bottom = `0.1rem`;
                                setTimeout(() => {
                                    questionMarks[i].style.transition = 'all 0.2s ease-in'
                                    questionMarks[i].style.bottom = `0rem`;
                                }, 200);
                            }, 300);
                        }, 300);
                    }, 2000)
                }, randomInteger(0, 1000));

            }
            
        }
    }
    function questionMarksReset() {
        for ( let i = 0; i < questionMarks.length; i++ ) {
            questionMarks[i].style.transition = 'none'
            questionMarks[i].style.transform = 'rotate(0)'
            questionMarks[i].style.bottom = '200%'
            // console.log(questionMarks[i].getAttribute(style))
            setTimeout(() => {
                questionMarks[i].style.transition = 'all 2s ease-in'
            }, 1000)
        }
    }

    for (let i = 0; i < questionMarks.length; i++) {

        let randomNumber = randomInteger(0, 100)
        let wrapperPart = 0
        if (randomNumber < 60) {
            wrapperPart = 2
        } else if (60 > randomNumber || randomNumber < 80) {
            wrapperPart = 1
        } else {
            wrapperPart = 3
        }
        if (wrapperPart == 1) {
            let randomNumber = randomInteger(0, 20)
            let randomleft = (wrapperWidth / 10000) * randomNumber
            questionMarks[i].style.left = `${randomleft}rem`
        }
        if (wrapperPart == 2) {
            let randomNumber = randomInteger(20, 80)
            let randomleft = (wrapperWidth / 10000) * randomNumber
            questionMarks[i].style.left = `${randomleft}rem`
            questionMarks[i].classList.add('middle')
        }
        if (wrapperPart == 3) {
            let randomNumber = randomInteger(80, 100)
            let randomleft = (wrapperWidth - 15 / 10000) * randomNumber
            questionMarks[i].style.left = `${randomleft}rem`
        }
    }


    // openOS
    function openOsChars() {
        let osButtons = document.querySelectorAll('.os span')
        let osWrappers = document.querySelectorAll('.os-list')
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

    let counter = 2
    let showMoreButton = document.querySelector('.showMore')
    let showMoreButtonText = document.querySelector('.showMore span')
    let allLesions = document.querySelectorAll('.lesson-section-main-element')

    showMoreButton.addEventListener('click', function() {
        if (counter < allLesions.length) {
            counter = counter + 2
            for (let i = 0; i < counter; i++) {
                allLesions[i].classList.add('active')
            }
            if (counter == allLesions.length) {
                showMoreButtonText.innerHTML = 'Show Less'
            }
        } else {
            counter = 2
            for (let i = 2; i < allLesions.length; i++) {
                allLesions[i].classList.remove('active')
            }
            showMoreButtonText.innerHTML = 'Show More'
        }
    })

    //offset from bottom of viewport
    function inViewport(item,min,max) {
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

    function videoScale () {
        let y = heroVideo.getBoundingClientRect().top
        let itemHeight = heroVideo.getBoundingClientRect().height
        let wh = window.innerHeight
        let bot = (-(y - wh)) - itemHeight / 2
        console.log(bot)
        let scale = (bot/3000)+0.8
        if (scale > 0.1 && scale < 1) {
            heroVideo.style.transform = `scale3d(${scale},${scale},1)`
        }
    }

    // let feauters = document.querySelectorAll('.features-section-main-element')

    // function feautersMove (feauter,direction) {
    //     let y = feauter.getBoundingClientRect().top
    //     let itemHeight = feauter.getBoundingClientRect().height
    //     let wh = window.innerHeight
    //     let bot = (-(y - wh)) - itemHeight / 2
    //     let translate = (100-(bot/(wh/300)))*direction
    //     console.log(bot/(wh/100))
    //     let percent = `${translate}%`

    //     if( bot/(wh/100) < 80 ) {
    //         feauter.style.transform = `translateX(${percent})`
    //     }
        
    //     // console.log(bot)
    // }

    let monitor = document.querySelector('.monitor-div')
    let marks = document.querySelector('.advantages-section-pics')

    window.addEventListener('scroll', function() {
        //Big marks

        if (inViewport(marks, 100, 100) && !marks.classList.contains('visible')) {
            marks.classList.add('visible')
        } else if(!inViewport(marks, 100, 100) && marks.classList.contains('visible')){
            marks.classList.remove('visible')
        }

        //monitor drop
        if (inViewport(monitor,0,0) && activeDrop == true) {
            questionMarksRotate() 
            console.log('drop it')
        } else if (!inViewport(monitor, 0, 0) && activeDrop == false){
            activeDrop = true
            questionMarksReset()
            console.log('reset it')
        }

        // video scale
        if (inViewport(heroVideo, 0, 0)) {
            videoScale ()
        }

        // for( let i=0; i<feauters.length; i++) {
        //     if (inViewport(feauters[i], 0, 0)) {
                
        //         if (i == 0 || i == 2) {
        //             feautersMove (feauters[i], 1)
        //         } else {
        //             feautersMove (feauters[i], -1)
        //         }
        //     }
        // }

    })
});