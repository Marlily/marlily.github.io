const Accordion = {
    



    init() {
        let allBtns = document.querySelectorAll('ul.accordion li a.toggler');

        for(let i of allBtns) {
            i.addEventListener('click', function(ev) {
                ev.preventDefault();
                let nextEl = i.nextElementSibling;
                
                if(!i.parentElement.classList.contains("open")) {

                    for(let e of allBtns ) {
                        e.parentElement.classList.remove('open');
                        e.nextElementSibling.style.maxHeight = 0;   
                        
                    }

                    i.parentElement.classList.add('open');
                    nextEl.style.maxHeight = nextEl.scrollHeight + 'px'; 
                    
                } else {
                    i.parentElement.classList.remove('open');
                    nextEl.style.maxHeight = 0;               
                }
                
            })
        }
    }
  }
  
export default Accordion;