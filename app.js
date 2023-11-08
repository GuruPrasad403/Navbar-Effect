const section =document.querySelectorAll("section");
const trans = document.querySelector(".trans");
const options = {
    threshold :0.5,
};

let observer = new  IntersectionObserver(navScroll, options);
function navScroll(entries){
    entries.forEach(function (entry){
        // /console.log(entry)
        const className= entry.target.className;
const activeLink = document.querySelector("[data-page="+className+"]");
// const elementIndex = entry.getAtteibute("data-index");
const coordinates = activeLink.getBoundingClientRect();
const directions ={
    height : coordinates.height,
    width: coordinates.width,
    top : coordinates.top,
    left : coordinates.left,
};
         if(entry.isIntersecting){
            trans.style.setProperty("height", directions.height+"px")
            trans.style.setProperty("width", directions.width+"px")
            trans.style.setProperty("top", directions.top+"px")
            trans.style.setProperty("left", directions.left+"px")
            trans.style.backgroundColor="blue";

         }
    });
}
section.forEach(function(sections){
    observer.observe(sections)
})