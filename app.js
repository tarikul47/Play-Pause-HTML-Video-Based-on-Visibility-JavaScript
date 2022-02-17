//let message = prompt("Enter Your Name:");
//let div = document.querySelector('.title');
//console.log(div);
//div.innerHTML = message;

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
};
// create observer object
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.play();
    } else {
        entry.target.pause();
    }
    });
}, options);

document.querySelectorAll('video').forEach(item => {
    item.muted = true;
    observer.observe(item);
});

