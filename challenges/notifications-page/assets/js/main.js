window.addEventListener("load", () => {
    const btn = document.querySelector("#btn-mark");
    const unreadCount = document.querySelector("#unread-count");
    let unreadElem = document.querySelectorAll(".notifications-list>li.unread");

    document.querySelector("#btn-mark").addEventListener("click", () => {

        const listElems = document.querySelectorAll(".notifications-list>li");
        btn.disabled = true;
        

        listElems.forEach(function(e) {
            e.classList.remove("unread");
        });

        unreadElem = document.querySelectorAll(".notifications-list>li.unread");
        unreadCount.textContent = unreadElem.length;
    })
    

    if(unreadElem.length == 0) {
        btn.disabled = true;
    };

    unreadCount.textContent = unreadElem.length;

});