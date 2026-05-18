const btnMenu =document.querySelector('.header__btn-menu');
const imgBtnMenu = btnMenu.querySelector('img');
const nav = document.querySelector('.header__nav');


btnMenu.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active');
    btnMenu.classList.toggle('header__btn-menu--active');
    
    


    if ( nav.classList.contains('header__nav--active')){
        imgBtnMenu.src = './images/icon-close.svg';
    } else{
        imgBtnMenu.src = './images/icon-hamburger.svg';
    };
        

 });


 const navLinks = document.querySelectorAll('.header__nav ul li a');

 navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        nav.classList.remove('header__nav--active');
        btnMenu.classList.remove('header__btn-menu--active');
        imgBtnMenu.src = ('./images/icon-hamburger.svg');
    })
 } );

//  const btnFaq = document.querySelectorAll('.btn-faq');
//  const answer1 = document.querySelectorAll('.faq__nav-list-answer');

//  btnFaq.addEventListener('click', () => {
//     answer1.classList.toggle('faq__nav-list-answer--active');
//  });

const btnsFaq = document.querySelectorAll('.btn-faq');

btnsFaq.forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.closest('li').querySelector('.faq__nav-list-answer');
        const isActive = answer.classList.contains('faq__nav-list-answer--active');

        
        document.querySelectorAll('.faq__nav-list-answer').forEach(a => {
            a.classList.remove('faq__nav-list-answer--active');
        });

        
        if (!isActive) {
            answer.classList.add('faq__nav-list-answer--active');
        }
    });
});


const card1 = document.querySelector('.card-1');
const nav1 = document.querySelector ('.nav-list-1');
const card2 = document.querySelector('.card-2');
const nav2 = document.querySelector('.nav-list-2');
const card3 = document.querySelector('.card-3')
const nav3 = document.querySelector('.nav-list-3');


nav1.addEventListener('click', () => {
    nav1.classList.add('nav--active');
    card1.classList.add('card--active');
    card2.classList.remove('card--active');
    nav2.classList.remove('nav--active');
    card3.classList.remove('card--active');
    nav3.classList.remove('nav--active');
});





nav2.addEventListener('click',  () => {
    nav2.classList.add('nav--active');
    card2.classList.add('card--active');
    card1.classList.remove('card--active');
    nav1.classList.remove('nav--active');
    card3.classList.remove('card--active');
    nav3.classList.remove('nav--active');
});

nav3.addEventListener('click', () =>{
    nav3.classList.add('nav--active');
    card3.classList.add('card--active');
    card1.classList.remove('card--active');
    nav1.classList.remove('nav--active');
    card2.classList.remove('card--active');
    nav2.classList.remove('nav--active');
} );