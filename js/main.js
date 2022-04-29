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
        if(scrollY > 0) {
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
        
        const scrollDistance = Math.max(parallaxStartValue - parallaxStartValue, Math.min(parallaxStartValue, parallaxStartValue - (parallaxStartValue * aboutScrollPercent)));

        sectionProject.style.transform = `translateY(${scrollDistance}px)`;
    }

    //mobile-project--기기 옆에서 나타나기
    function project4SlideShow() {
        setProperty();
        
        const project4 = document.querySelector('.project-4');
        const project4Device = document.querySelector('.project-4 .project-img figure')
        const project4Num = document.querySelector('.project-4 .num')
        const slideStartValue = 5000;
        const project4ScrollPercent = scrollY / (scrollY + project4.getBoundingClientRect().top);
        const scrollDistance = Math.max(slideStartValue - slideStartValue, Math.min(slideStartValue, slideStartValue - (slideStartValue * project4ScrollPercent)));
        
        project4Device.style.transform = `translateX(${-scrollDistance}px)`
        project4Num.style.transform = `translateX(${-scrollDistance * 0.3}px)`
    }
    function project5SlideShow() {
        setProperty();
        
        const project5 = document.querySelector('.project-5');
        const project5Device = document.querySelector('.project-5 .project-img figure')
        const project5Num = document.querySelector('.project-5 .num')
        const slideStartValue = 5000;
        const project5ScrollPercent = scrollY / (scrollY + project5.getBoundingClientRect().top);
        const scrollDistance = Math.max(slideStartValue - slideStartValue, Math.min(slideStartValue, slideStartValue - (slideStartValue * project5ScrollPercent)));
        
        console.log(scrollDistance)
        project5Device.style.transform = `translateX(${scrollDistance}px)`
        project5Num.style.transform = `translateX(${scrollDistance * 0.3}px)`
    }



/* ------------------------------------------------------------------*/

    window.addEventListener('scroll', () => {
        setProperty();
        headerFadeOut();
        aboutHeadingMoveUp();
        scrollCircleFadeOut();
        projectMoveUp();
        project4SlideShow();
        project5SlideShow();
        
    });

    window.addEventListener('resize', () => {
        setProperty();
    });

    function init() {
        setProperty();
    };

    init();

}; //window.onload