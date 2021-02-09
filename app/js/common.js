$(function() {
    //video play

    let playButton = document.querySelectorAll('.play')
    let videos = document.querySelectorAll('video')

    for( let i = 0; i < playButton.length; i++) {
        playButton[i].addEventListener('click', function() {
            videos[i].setAttribute("controls", "controls") 
            videos[i].play()
            playButton[i].classList.add('inactive')
        })
    }
    

    let questionMarks = document.querySelectorAll('.animationWrapper img')
    let questionsWrapper = document.querySelector('.animationWrapper')
    let wrapperWidth = questionsWrapper.getBoundingClientRect().width

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    
    function questionMarksRotate() {
        
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
    questionMarksRotate()
    
    for (let i = 0; i < questionMarks.length ; i++) {

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
            let randomleft = (wrapperWidth-15 / 10000) * randomNumber
            questionMarks[i].style.left = `${randomleft}rem`
        }
    }
    // openOS
    function openOsChars() {
        let osButtons = document.querySelectorAll('.os span')
        let osWrappers = document.querySelectorAll('.os-list')
        for (let i = 0; i < osButtons.length; i++) {
            osButtons[i].addEventListener('click', function () {

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

    for( let i= 0 ; i < questions.length; i++) {
        questions[i].addEventListener('click', function() {
            answers[i].classList.toggle('active')
            questions[i].classList.toggle('active')
        })
    }

    let counter = 2
    let showMoreButton = document.querySelector('.showMore')
    let showMoreButtonText = document.querySelector('.showMore span')
    let allLesions = document.querySelectorAll('.lesson-section-main-element')

    showMoreButton.addEventListener('click', function () {
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
});