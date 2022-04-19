window.onload = () => {

    const jsIcon = document.querySelector('.about-inner .icon-js');
    const jsIconH = jsIcon.getBoundingClientRect().height;
    const jsIconW = jsIcon.getBoundingClientRect().width;
    const aboutChange = document.querySelectorAll('.about-inner .change');
    const aboutScroll = document.querySelector('.about-inner .scroll');
    const jsMove = document.querySelector('.js-move')
    // const aboutDiscription = document.querySelector('.about-inner .discription');
    // const aboutDiscriptionH = aboutDiscription.getBoundingClientRect().height;
    // const profileImg = document.querySelector('.profile-img');

    aboutChange.forEach((item) => {
        item.addEventListener('mouseover', () => {
            jsMove.style.opacity = '1';
            jsMove.style.display = 'block';
        })
        item.addEventListener('mouseout', () => {
            jsMove.style.opacity = '0';
            jsMove.style.display = 'none';
        })
    })

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        jsMove.style.transform = `translateX(${-x / 5}px) translateY(${-y / 5}px)`;

    })
    window.addEventListener('scroll', () => {
        console.log(scrollY)
    })

}; //window.onload