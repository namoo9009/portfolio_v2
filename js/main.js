window.onload = () => {

    // scroll이 about bottom에 위치할 경우 project 위로 올라오기
    const header = document.querySelector('.header-inner');
    const sectionAbout = document.querySelector('#about');
    const sectionProject = document.querySelector('#projects');

    const aboutHeading = document.querySelector('.about-inner h1');
    const introduce = document.querySelector('.introduce');
    
    let aboutH;
    let sectionAboutH;
    let scrollY;
    let aboutTop;
    let aboutBottom;
    let aboutBottomScroll;
    let projectTop;
    let projectMove;
    let aboutHeadingTopScroll;
    const aboutMoveDistance = 400;

    
    
    function setProperty() {
        windowH = window.innerHeight;
        sectionAboutScrollTop = sectionAbout.offsetHeight - windowH;
        scrollY = window.scrollY;
        aboutH = sectionAbout.getBoundingClientRect().height;
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
    
    // 스크롤을 내리면 header가 위로 사라짐 
    function headerFadeOut() {
        setProperty();
        if(scrollY > 70) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }
    }

/* ------------------------------------------------------------------*/
// about

    const jsMove = document.querySelector('.js-move');



    // 스크롤을 내리면 h1의 위치가 위로 서서히 올라감
    function aboutHeadingMoveUp() {
        setProperty();
        aboutHeading.style.transform = `translateY(${-scrollY * 0.15}px)`;
    }

    // about 섹션을 벗어나면 scroll-circle이 사라짐
    function scrollCircleFadeOut() {
        setProperty();
        if(scrollY > sectionAboutScrollTop) {
            sectionAbout.classList.add('active');
        } else {
            sectionAbout.classList.remove('active');
        }
    };
    
    // JS Icon의 위치를 마우스의 좌표값으로 설정
    sectionAbout.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        jsMove.style.transform = `translateX(${-x / 5}px) translateY(${-y / 4}px)`;
    });




/* ------------------------------------------------------------------*/
// projects

    //
    function projectMoveUp() {
        setProperty();
        const parallaxStartValue = 300;
        const aboutScrollPercent = scrollY / aboutH;
        
        const scrollDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * aboutScrollPercent)))

        console.log(scrollDistance);
        sectionProject.style.transform = `translateY(${scrollDistance}px)`;
    }




    window.addEventListener('scroll', () => {
        setProperty();
        headerFadeOut();
        aboutHeadingMoveUp();
        scrollCircleFadeOut();
        projectMoveUp();
        
    });

    window.addEventListener('resize', () => {
        setProperty();
    });

    function init() {
        setProperty();
    };

    init();

}; //window.onload