const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach( (button) => {
    button.addEventListener('click', function(e) {
        if(e.target.id === 'grey')
        {
            body.style.backgroundColor = e.target.id;
            // body.style.backgroundColor = 'grey';
        }
        if(e.target.id === 'green')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'purple')
        {
            body.style.backgroundColor = e.target.id;
        }
    });
});
