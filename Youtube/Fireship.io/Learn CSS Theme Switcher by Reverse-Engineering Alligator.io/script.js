const themeCollections = Array.from(document.querySelectorAll('.dropdown-item'));
const body = document.querySelector('body');


themeCollections.forEach(themeBtn => {
    themeBtn.addEventListener('click',()=>{
        const themeClass = themeBtn.querySelector('a').id
        body.className = themeClass
    })
});