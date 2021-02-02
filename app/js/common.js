$(function() {
    
    let video = document.querySelector('video')

    video.addEventListener('click', function () {
        video.setAttribute("controls", "controls")        
    })

});