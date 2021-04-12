window.onload = function () {
    const modal = document.getElementsByClassName('modal')[0];
    const appsBtn = document.getElementsByClassName('moreApps')[0];

    appsBtn.addEventListener('click', openModal);
    
    window.addEventListener('click', outsideClick);
    
    function openModal() {
        modal.style.display = 'block';
    }

    function outsideClick(e) {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    }
}