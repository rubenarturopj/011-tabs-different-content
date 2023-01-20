const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
// about    es el gran contenedor de todo lo que esta debajo de la imagen

const articles = document.querySelectorAll('.content');

about.addEventListener("click", function(event){
    // console.log(event.target.dataset.id);
    const id = event.target.dataset.id;
    if (id) {
        // remove 'active' from other buttons
        btns.forEach(function(button){
            button.classList.remove("active");
            event.target.classList.add("active");
        });
        // hide other articles and display the one with the matching ID
        articles.forEach(function(article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});

// esto les quita la clase active a tdos y se la pone solo al que se hace click