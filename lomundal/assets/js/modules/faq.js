const Faq = {
    init() {

        let allBtns = document.querySelectorAll('.section-accordion-image ul li .toggler');

        for(let i of allBtns) {
            i.addEventListener('click', function(ev) {
                ev.preventDefault();

                let nextEl = i.nextElementSibling;
                
                if(!i.classList.contains("open")) {

                    for(let e of allBtns ) {
                        e.classList.remove('open');
                        e.nextElementSibling.style.maxHeight = 0;   
                        
                    }

                    i.classList.add('open');
                    nextEl.style.maxHeight = nextEl.scrollHeight + 'px'; 
                    
                } else {
                    i.classList.remove('open');
                    nextEl.style.maxHeight = 0;               
                }
                
            })
        }
    }
  }
  
export default Faq