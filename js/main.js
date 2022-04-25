window.onload = () => {

    // scroll이 about bottom에 위치할 경우 project 위로 올라오기
    const header = document.querySelector('.header-inner');
    const sectionAbout = document.querySelector('#about');
    const sectionAboutH = sectionAbout.offsetHeight;
    const sectionAboutInner = document.querySelector('.about-inner');
    const sectionProject = document.querySelector('#projects');
    const aboutHeading = document.querySelector('.about-inner h1');
    const introduce = document.querySelector('.introduce');

    let scrollY;
    let aboutTop;
    let aboutBottom;
    let aboutBottomScroll;
    let projectTop;
    let projectMove;
    let aboutHeadingTopScroll;
    const aboutMoveDistance = 400;

    
    
    function setProperty() {
        scrollY = window.scrollY;
        aboutTop = scrollY + sectionAbout.getBoundingClientRect().top;
        aboutBottom = aboutTop + sectionAbout.offsetHeight;
        aboutBottomScroll = aboutBottom - window.innerHeight;
        projectTop = scrollY + sectionProject.getBoundingClientRect().top;
        projectTopScroll = projectTop - window.innerHeight;
        projectMove = scrollY - projectTopScroll;
        aboutHeadingTopScroll = scrollY + aboutHeading.getBoundingClientRect().top;

        const parallaxStartValue = 0;
        const parallaxSpeed = 200;
        const aboutParallaxBody = window.innerHeight;

        parallaxThisTop = scrollY - parallaxSpeed * 100


        
    }



/* ------------------------------------------------------------------*/
// header
    
    function headerEffect() {
        setProperty();
        console.log(scrollY)
        if(scrollY > 0) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }





/* ------------------------------------------------------------------*/
// about

    const aboutChange = document.querySelectorAll('.about-inner .change');
    const jsMove = document.querySelector('.js-move')

    // 글자 mouseover시 효과
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

    // JS Icon 위치설정
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        jsMove.style.transform = `translateX(${-x / 5}px) translateY(${-y / 5}px)`;
    })




/* ------------------------------------------------------------------*/
// projects

    function projectMoveUp() {
        setProperty();
        aboutHeading.style.transform = `translateY(${-scrollY * 0.3}px)`

        // if(scrollY >= aboutHeadingTopScroll * 2) {
        //     sectionAbout.classList.add('active');
            
        // } else {
        //     sectionAbout.classList.remove('active');
        // }
        // if(scrollY >= aboutBottomScroll + sectionAboutH * 0.3) {
        //     sectionAbout.classList.add('active')
        //     sectionAboutInner.style.transform = `scale(0.9)`
        // } else {
        //     sectionAbout.classList.remove('active')
        //     sectionAboutInner.style.transform = `scale(1)`
        // }
    }


    window.addEventListener('scroll', () => {
        headerEffect();
        projectMoveUp();
        
        
    })

    function init() {
        headerEffect();
        projectMoveUp();
    }

    init();

}; //window.onload