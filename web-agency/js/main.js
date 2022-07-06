// cusomers slider
window.addEventListener('load', function(){ 
    new Glider(document.querySelector('#customers--slider'), {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: {
            prev: '#customers-prev',
            next: '#customers-next'
        }
    })
})