const faqContainer = document.getElementsByClassName('faq-container');
const faqElements = document.querySelectorAll('.faq-element')

for (faqPosition of faqElements){
    // faqElement.classList.remove('active');
    faqPosition.addEventListener('click', function(){
        console.log('clicked');
        this.classList.toggle('active')
    }) 
}
