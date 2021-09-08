// ! DESKTOP VERSION
{
   const menuDD = document.querySelectorAll('.menu-dd');
   const allContentImg = document.querySelectorAll('.content img');
   
   for (const eachM of menuDD) {
      eachM.addEventListener('mouseover',()=> eachM.classList.add('onhover'));
      eachM.addEventListener('mouseleave',()=> eachM.classList.remove('onhover'));
   };
   
   // ! SELECTED ALL CONTENT IMAGE INSIDE THE MAIN DROPDOWN & CHANGE THE SOURCE OF IMAGE OF THOSE.
   allContentImg.forEach((each,i)=>{
      each.src = each.src.replace(`${1}.png`,`${i+1}.jpg`); 
   })
   
}

// ! MOBILE VERSION
{
   function MobileVariables(){
      this.burgerSection = document.querySelector('section.burger');
      this.burgerDd = document.querySelector('main.burger-dropdown');
      this.all_main_list_title = document.querySelectorAll('.list-title');
      this.content_series = document.querySelectorAll('.content-series');
      this.sub_dd_cbd = document.querySelectorAll('.sub-dd-cbd');
      this.title_of_dropdown = document.querySelector('.title');

   }

   MobileVariables.prototype.title_series = document.querySelectorAll('.title-series');
   MobileVariables.prototype.mobile_navbar = document.querySelector('.mobile-navbar');
    const {sub_dd_cbd,title_of_dropdown,burgerSection,burgerDd,
           all_main_list_title,content_series,mobile_navbar,title_series
          } 
    =  new MobileVariables();
    //! mobile-navbar(homepage-container) add event click
      mobile_navbar.addEventListener( 'click' , element => {
         element.target.innerText === 'Mavic series'  ||
         element.target.innerText ==='Phantom series' ||
         element.target.innerText ==='osmo series'
         ? Expanded(element , title_series): '';
         if(element.target.innerText === 'Consumer'){
            element.target.classList.toggle('consumer-expanded');
            title_series.forEach(each => each.classList.remove('expanded'));
            sub_dd_cbd.forEach( each => each.classList.remove('full-height'));
         }
      })

      function Expanded(element, allElements){
         allElements.forEach( each => {
            element.target !== each ? each.classList.remove('expanded'): expanded('expanded');
         });
         function expanded(classList1){
            element.target.classList.toggle(classList1);
            if(element.target.className.includes('expanded')){
               sub_dd_cbd.forEach( each => each.classList.add('full-height'));
            }else{
               sub_dd_cbd.forEach( each => each.classList.remove('full-height'));
            }
         }
      }
   // // ! SELECT SECTION BURGER & TRANSFORM THE ICON
   // burgerSection.addEventListener('click',()=>{
   //    burgerSection.classList.toggle('clicked');
   // });
   // burgerDd.addEventListener('click' ,(el)=> {
   //    el.stopPropagation();
   //    targetConsumer(el);
      
   // });
   // function targetConsumer(search){
   //    if(search.target.innerHTML ==='Consumer'){expand_collapse(search)}
   //    else if(search.target.innerHTML ==='Professional')return expand_collapse(search);
   // }
   // function expand_collapse(search){
   //    sub_dd_cbd.forEach(each =>{
   //       if(sub_dd_cbd){
   //          console.log(sub_dd_cbd);
   //          if(each.className.includes('relative-height')){
   //             each.classList.remove('relative-height');
   //             content_series.forEach(item =>{ 
   //                item.classList.remove('expand');
   //             });
   //          }
         
   //       }else if(sub_dd_cbd){
   //          console.log(sub_dd_cbd);
   //          if(each.className.includes('relative-height')){
   //             each.classList.remove('relative-height');
   //             content_series.forEach(item =>{ 
   //                item.classList.remove('expand');
   //             });
   //          }
   //       }
   //    })
   //    search.target.nextElementSibling.classList.toggle('consumer-expand');
   // }
   // // !TARGET ALL THE MAIN LIST (DROPDOWN) AND ADD EVEN CLICK
   // // add event click
   // all_main_list_title.forEach( each =>{
   //    each.addEventListener('click',()=>{
   //    });
   // });

   // // stop propagation from the parent
   // sub_dd_cbd.forEach(sub);

   // function sub(each){
   //    each.addEventListener('click', stopP);
   // }
   // function stopP(e){
   //    e.target.className === 'title-series'  ? expandDD(e) : e.stopPropagation();
   // }
   // function expandDD(event){
   //    if(event.target.parentElement.parentElement.parentElement.id === 'Consumer'){
   //       console.log(event.target.parentElement.parentElement.parentElement.id)
   //       const content_mavic_series = event.target.nextElementSibling;
   //       content_mavic_series.classList.toggle('expand');
   //       content_mavic_series.className.includes('expand') ? consumerRelativeHeight(sub_dd_cbd) :'';
   //       content_series.forEach(item =>{ 
   //          if(item !== content_mavic_series){
   //             item.classList.remove('expand');
   //          }
   //       })
   //    }else if(event.target.parentElement.parentElement.parentElement.id === 'Professional'){
   //       console.log(event.target.parentElement.parentElement.parentElement.id)
   //       const content_mavic_series = event.target.nextElementSibling;
   //       content_mavic_series.classList.toggle('expand');
   //       content_mavic_series.className.includes('expand') ? consumerRelativeHeight(sub_dd_cbd) :'';
   //       content_series.forEach(item =>{ 
   //          if(item !== content_mavic_series){
   //             item.classList.remove('expand');
   //          }
   //       })
   //    }
   // }
   // function consumerRelativeHeight(element){
   //    element.forEach(e =>{
   //       e.classList.add('relative-height')
   //    });
   // }

}