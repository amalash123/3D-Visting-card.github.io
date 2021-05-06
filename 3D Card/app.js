const card1 = document.querySelector(".card1")
const container = document.querySelector(".container")
//
container.addEventListener("mousemove", (e) => {
    let xAxis =(window.innerWidth / 2 - e.pageX) / 25 ;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter", e => {
    card1.style.transform = 'none';
});

//Animate Out
container.addEventListener("mouseleave", e => {
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    card1.style.transition = "all 0.5s ease";
});