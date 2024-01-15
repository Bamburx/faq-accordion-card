const faqContainer = document.getElementsByClassName('faq-container');
const faqElements = document.querySelectorAll('.faq-element')

for (faqPosition of faqElements){
    faqPosition.addEventListener('click', function(){
        console.log('clicked');
        this.classList.toggle('active')
    }) 
}
