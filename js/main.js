window.onload = () => {

    const jsIcon = document.querySelector('.about-inner .icon-js');
    const jsIconH = jsIcon.getBoundingClientRect().height;
    const jsIconW = jsIcon.getBoundingClientRect().width;
    const aboutChange = document.querySelectorAll('.about-inner .change');
    const aboutScroll = document.querySelector('.about-inner .scroll');


    aboutChange.forEach((item) => {
        item.addEventListener('mouseover', () => {
            console.log('마우스오버')
            jsIcon.style.opacity = '1'
        })
        item.addEventListener('mouseout', () => {
            console.log('마우스오버')
            jsIcon.style.opacity = '0'
        })
    })

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        jsIcon.style.transform = `translateX(${-x / 3}px) translateY(${-y / 3}px)`;

    })
    window.addEventListener('scroll', () => {
        console.log(scrollY)
        // aboutScroll.style.transform = `translateX(${-x / 3}px) translateY(${-y / 3}px)`;
    })

}; //window.onload