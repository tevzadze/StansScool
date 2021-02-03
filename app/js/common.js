$(function() {
    
    // let video = document.querySelector('video')

    // video.addEventListener('click', function () {
    //     video.setAttribute("controls", "controls")        
    // })

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
            let randomNumber = randomInteger(20, 65)
            let randomleft = (wrapperWidth / 10000) * randomNumber
            questionMarks[i].style.left = `${randomleft}rem`
            questionMarks[i].classList.add('middle')
        }
        if (wrapperPart == 3) {
            let randomNumber = randomInteger(65, 85)
            let randomleft = (wrapperWidth-15 / 10000) * randomNumber
            questionMarks[i].style.left = `${randomleft}rem`
        }
    }
});