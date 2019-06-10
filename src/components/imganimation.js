function resetBgFade(direction, bgColor, opacity, bgImgZoom, imgHolder) {
    bgImgZoom.classList.add('bgImgFade');
    imgHolder.classList.add('imgHolderFade');
    bgImgZoom.style.webkitAnimationDirection = direction;
    imgHolder.style.webkitAnimationDirection = direction;
    bgImgZoom.style.webkitAnimationPlayState = "running";
    imgHolder.style.webkitAnimationPlayState = "running";
    setTimeout(function() {
        bgImgZoom.style.backgroundColor = bgColor;
        imgHolder.style.opacity = opacity;
        bgImgZoom.classList.remove('bgImgFade');
        imgHolder.classList.remove('imgHolderFade');
        bgImgZoom.style.webkitAnimationPlayState = "paused";
        imgHolder.style.webkitAnimationPlayState = "paused";
    }, 301);
}

export default resetBgFade