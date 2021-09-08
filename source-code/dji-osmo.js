// !===making burger button start===
const spanParent =document.querySelector('section.homepage-header .burger');
const span = document.querySelectorAll('section.homepage-header .burger span');
const burgerDropdown = spanParent.nextElementSibling;
console.log(burgerDropdown);
// add classlist 'normal' to each span element
span.forEach(e =>{
    e.classList.toggle('normal');
})

// add even listener on spanParent
spanParent.addEventListener('click', ()=>{
    //add classlist to rotate down, to scale down and rotate up
    span[0].classList.add('rotate-down');
    span[1].classList.add('scale-down');
    span[2].classList.add('rotate-up');
    //add classlist toggle to show and hide class'normal'
    span.forEach(e =>{
        e.classList.toggle('normal');
    })
    // ==== burger dropdown show/hide start=====
        burgerDropdown.classList.toggle('hide');
    // ==== burger dropdown show/hide end=====
});

// !===making burger button End===


// !=====sub dropdown for consumer list item start=====
const consumer = document.querySelector('section.homepage-header .consumer');
const childrenConsumer = [consumer.children[0],consumer.children[1],consumer.children[2]]; // fallback
consumer.addEventListener('click', (e)=>{
    if(e.target == consumer.children[0] || e.target == consumer.children[1] || e.target ==consumer){
        consumer.classList.toggle('change-bg');
        childrenConsumer[2].classList.toggle('grow-dropdown');
        childrenConsumer[1].classList.toggle('rotate180-deg');
        const burgerDD = document.querySelector('section.homepage-header  .burger-dropdown');
        console.log(burgerDD);
        // if(childrenConsumer[2].className.includes('grow-dropdown')){
        //     burgerDD.classList.toggle('max--content');
        // }else{
        //     burgerDD.classList.toggle('max--content');
        // }
    };

})
// !=====sub dropdown for consumer list item End=====

// !===dropdown mavic series start====
const mavicSeries = document.querySelector('.cd--item .mavic-series');
mavicSeries.addEventListener('click', (e)=>{
    if(e.target.nodeName === 'H1' || e.target.nodeName === 'SPAN' ||e.target.nodeName === 'IMG' || e.target == mavicSeries){
        const dropdownMS = mavicSeries.children[2];
        dropdownMS.classList.toggle('grow-height');
        const angleDown = mavicSeries.children[1];
        console.log(angleDown);
        angleDown.classList.toggle('rotate180-deg');
}

})
// !===dropdown mavic series end====



