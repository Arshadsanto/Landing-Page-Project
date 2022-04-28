
const navBarList = document.getElementById('navbar__list');

const sections = document.querySelectorAll('section');

    function navMenuActive(){
        for (let i = 0; i < sections.length; i++) {
            let listNav = document.createElement("ul");
            listNav.style.padding = "10px";
            listNav.style.fontSize = "20px";
            listNav.style.float= "left";
            listNav.innerHTML = `<a href="#${sections[i].getAttribute('id')}">${sections[i].getAttribute('data-nav')}</a>`;
            navBarList.appendChild(listNav);
        
        }
    }
    navMenuActive();
   
// adding the active and remove active class with color

function viewPortActiveRemove(active, section){
    if(active == true){
        section.classList.add('your-active-class');
        section.style.backgroundColor = "red";
    }else if(active == false){
        section.classList.remove('your-active-class');
        section.style.backgroundColor = "transparent";
    }

}
 viewPortActiveRemove();

 // scrolling nav bar with 

navBarList.scrollIntoView({
    behavior: "smooth",
    block: "end", 
    inline: "nearest"}
    );

 function scrolling(){
    navBarList.addEventListener('click', (nav) => {
            for(i = 0 ; i<sections.length ; i++){
                sections[i].addEventListener("scroll",(nav));
            }
    });
}

scrolling();

// Position selected area
document.addEventListener('scroll', function sectionActiveMode(){
    for (let i = 0; i < sections.length; i++) {
        const highlightedArea = parseFloat(sections[i].getBoundingClientRect().top);
            function onscroll(){
            for(let i = 0; i<sections.length; i++){
                if(window.scrollY<=100 || window.scrollY>=100) {
                    return highlightedArea<100 && highlightedArea >- 100;
                }
            }
        }
     viewPortActiveRemove(onscroll(), sections[i]);
    }
})
