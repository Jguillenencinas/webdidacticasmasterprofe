let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

function changeVideo(videoId) {
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
    videoFrame.style.opacity = 100;
}

function changePic(picId) {
    const picFrame = document.getElementById('pic-frame');
    const pic = document.getElementById('pic-Src');
    pic.src = `./img/${picId}`;
    picFrame.style.opacity = 100;
    picFrame.style.width = picFrame.src.style.width;
    picFrame.style.height = picFrame.src.style.height;
}

function changeLink(linkId) {
    const linkFrame = document.getElementById('link-frame');
    const linkDiv = document.getElementById('link-div');
    linkFrame.href = `https://${linkId}`;
    linkDiv.style.opacity = 100;
}