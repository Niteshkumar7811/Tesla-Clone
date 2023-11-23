// document.lastScrollPosition = 0;
// document.lastCentered = 0;
// document.onWayTo = null;

// document.addEventListener('scroll',()=>{
//     const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
//     const section = [...document.querySelectorAll('section')];

//     if(document.onWayTo === null){
//         const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered +1;
//         if(destIndex >= 0 && destIndex < section.length){
//         document.onWayTo = destIndex;
//         window.scroll(0, section[destIndex].offsetTop);
//     }
//     }

//     section.forEach(section,index => {
//         if(window.pageYOffset === section.offsetTop){
//             document.lastCentered = index;
//             section.className = 'active';
//             if(document.onWayTo === index){
//                 document.onWayTo = null;
//             }
//         }
//         else{
//             section.className = '';
//         }
//     });
//     document.lastScrollPosition = window.pageYOffset
// })

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
    const direction = window.scrollY - document.lastScrollPosition > 0 ? 'down' : 'up';
    const sections = [...document.querySelectorAll('section')];

    if (document.onWayTo === null) {
        const destIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;
        if (destIndex >= 0 && destIndex < sections.length) {
            document.onWayTo = destIndex;
            window.scroll(0, sections[destIndex].offsetTop);
        }
    }

    sections.forEach((section, index) => {
        // const isScrolledIntoView = window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight;
        const isScrolledIntoView = window.scrollY >= section.offsetTop && window.pageYOffset < section.offsetTop + window.innerHeight;

        if (isScrolledIntoView) {
            document.lastCentered = index;
            section.classList.add('active');
            if (document.onWayTo === index) {
                document.onWayTo = null;
            }
        } else {
            section.classList.remove('active');
        }
    });

    document.lastScrollPosition = window.scrollY;
});
