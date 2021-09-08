/**********************
 CREATE DROPDOWN FOR LINK USER SIGN UP/SIGN IN*/ 
 const user = document.querySelector(".login_sign_up_icon_dd");
 const dd = document.createElement('div');
 const ddChild = document.createElement('div');
 const ddChild2 = document.querySelector('.dd_child2');
 user.appendChild(dd);
 dd.appendChild(ddChild);
 dd.appendChild(ddChild2);

 dd.style.position ='absolute';
 dd.style.width ='2.5em';
 dd.style.height ='3em';
 user.style.position ='relative';
 dd.style.transform='scaleY(0)';   
 dd.style.transformOrigin='center center';   
 ddChild.style.background='white';
 ddChild2.style.background='#fff';
 ddChild.style.position ='absolute';
 ddChild2.style.position ='absolute';
 ddChild2.style.right ='0';
 ddChild2.style.top ='2.5em';
 ddChild2.style.bottom ='0';
 ddChild.style.bottom ='0';
 ddChild2.style.width ='150px';
 ddChild2.style.height ='max-content';
 ddChild.style.width ='15px';
 ddChild.style.height ='15px';
 ddChild2.style.borderRadius ='5px';
 ddChild.style.transform ='rotate(45deg)';
 dd.style.transition ='transform .3s ease-out';
 dd.style.visibility='hidden';
 
 
 
 //add event listener 'mouseover' on variabel const user & create dropdown element
 user.addEventListener('mouseover',showDropdown);
 user.addEventListener('mouseleave',hideDropdown);
 function showDropdown(e){
     dd.style.transform ='scaleY(100%)';
     dd.style.visibility ='visible';
 };
 function hideDropdown(){
        dd.style.transform ='scaleY(0)';
        dd.style.visibility ='hidden';
 }



 /**********************
 CREATE DROPDOWN FOR OTHER LINK */ 
 const Links ={
     all : document.querySelectorAll('.dd'),
     appendAll: function(){
        const dd = [document.createElement('div'),
                    document.createElement('div'),
                    document.createElement('div'),
                    document.createElement('div'),
                    document.createElement('div'),
                    document.createElement('div')];
        const dropdown = document.querySelectorAll('.dropdown');
         for(let i = 0; i < this.all.length; i++){
             for(let l = 0; l < dd.length; l++){
                 if(i === l){
                     this.all[i].appendChild(dd[l]);
                     dd[l].setAttribute('class','hidden-cont');
                     dd[l].style.height ='1.5em';
                    //  dd[l].style.background ='yellow';
                     dd[l].style.paddingTop ='1.4em';
                     dd[l].style.position ='absolute';
                     dd[l].style.left ='0';
                     dd[l].style.right ='0';
                     dd[l].style.transform ='scaleY(0)';
                     dd[l].style.transition ='transform .3s ease-in-out, opacity .2s';
                     dd[l].style.opacity ='0'
                     dd[l].style.zIndex ='500';
                     dd[l].appendChild(dropdown[l]);
                     if(dd[l] === dd[4]){
                         dd[l].style.width = '150px';
                         dd[l].style.left ='unset'
                         dd[l].style.right ='unset'
                         dd[l].style.transform ='translateX(-.5cm)'
                         dd[l].style.transform ='scaleY(0)';
                     }
                     this.all[i].addEventListener('mouseover', function(){
                         
                        if(dd[l] === dd[4]){
                            dd[l].style.transform ='translateX(-1.25cm) scaleY(100%)';
                            dd[l].style.opacity ='1';
                         }else{
                            dd[l].style.transform ='scaleY(100%)';
                            dd[l].style.opacity ='1';
                         }

                     });
                     this.all[i].addEventListener('mouseleave', function(){
                        if(dd[l] === dd[4]){
                            dd[l].style.transform ='translateX(-1.25cm) scaleY(0)';
                            dd[l].style.opacity ='0';
                         }else{
                            dd[l].style.transform ='scaleY(0)';
                            dd[l].style.opacity ='0';
                         };
                     })

                 }
             };
         };
        
     },
     
 };
 Links.appendAll();





//  ! HOMEPAGE USER GALLERY
(function(){
    const left = document.querySelector('.user-gallery .left');
    const right = document.querySelector('.user-gallery .right');
    const banner = document.querySelector('.banner');
    const images = banner.querySelectorAll('img');
    const photoC = document.querySelector('.photo-credit');
    const credit = ['Photo Credit: Benjamin Everett. Shot on Mavic 2 Pro',
                    'Photo Credit:Benjamin Everett. Shot on Mavic 2 Pro',
                    'Photo Credit: DJI. Shot on Mavic 2 Pro',
                    'Photo Credit: Ling. Shot on Mavic 2 Pro',
                    'Photo Credit：Yumian. Shot on Mavic Air',
                    'Photo Credit：Pat Kay. Shot on Mavic Air','Photo Credit: Kim Jhong Un Shot on Spark'];
    photoC.innerHTML = credit[0];
    const circle = document.querySelectorAll('.list-marks > .fas');
    circle.forEach(e =>{
        if(e == circle[0]){
            e.style.color ='black';
        }else{
            e.style.color ='#c0c0c0';
        };
    })
    let i = 0;
    let h =540;
    
    function sliderLeft(){
        --i;
        if(i <= -1){
            i = images.length -1;
            banner.style.transform =`translateY(-${h * i}px)`;
            photoC.innerHTML = credit[i];
            circle.forEach(e =>{
                if(e == circle[i]){
                    e.style.color ='black';
                }else{
                    e.style.color ='#c0c0c0';
                }
            })

        }
        banner.style.transform  = `translateY(-${h * i}px)`;
        photoC.innerHTML = credit[i];
        circle.forEach(e =>{
            if(e == circle[i]){
                e.style.color ='black';
            }else{
                e.style.color ='#c0c0c0';
            }
        })

    };


    function sliderRight(){
        ++i;
        if(i >= images.length){
            i = 0;
            banner.style.transform =`translateY(-${h * i}px)`;
            photoC.innerHTML = credit[i];
            circle.forEach(e =>{
                if(e == circle[i]){
                    e.style.color ='black';
                }else{
                    e.style.color ='#c0c0c0';
                }
            })

        }
        banner.style.transform  = `translateY(-${h * i}px)`;
        photoC.innerHTML = credit[i];
        circle.forEach(e =>{
            if(e == circle[i]){
                e.style.color ='black';
            }else{
                e.style.color ='#c0c0c0';
            }
        })


    };
    //todo-----add event listener on left and right button---//
    left.addEventListener('click',sliderLeft);
    right.addEventListener('click',sliderRight);
})();

//! MODAL SHOWCASE
(function(){
    const playPause = document.querySelectorAll('.showcase .play-pause');
    const modal = document.querySelector('.showcase .modal');
    playPause.forEach(e => {
        if(e == playPause[0]){
            e.addEventListener('click', ()=>{
                modal.style.transform ='scale(100%)';
                modal.style.opacity ='1';
                modal.children[0].src = 'file:///Users/ardyardian/Desktop/Developtment/Fundamentals/clone-dji-website/videos/modal1.mp4';
                modal.addEventListener('click', function(){
                    if(this === modal){ 
                        modal.style.transform ='scale(0)';
                        modal.style.opacity ='0';
                        modal.children[0].pause();
                    };
                })

            })
        }else if( e == playPause[1]){
            console.log('1');
            e.addEventListener('click', ()=>{
                modal.style.transform ='scale(100%)';
                modal.style.opacity ='1';
                modal.children[0].src = 'file:///Users/ardyardian/Desktop/Developtment/Fundamentals/clone-dji-website/videos/modal2.mp4';
                modal.addEventListener('click', function(){
                    if(this === modal){ 
                        modal.style.transform ='scale(0)';
                        modal.style.opacity ='0';
                        modal.children[0].pause();
                    };
                })
            })
        }else if( e == playPause[2]){
            console.log('2');
            e.addEventListener('click', ()=>{
                modal.style.transform ='scale(100%)'
                modal.style.opacity ='1';
                modal.children[0].src = 'file:///Users/ardyardian/Desktop/Developtment/Fundamentals/clone-dji-website/videos/modal3.mp4';
                modal.addEventListener('click', function(){
                    if(this === modal){ 
                        modal.style.transform ='scale(0)';
                        modal.style.opacity ='0';
                        modal.children[0].pause();
                    };
                })
            })
        }else{
            console.log('3');
            e.addEventListener('click', ()=>{
                modal.style.transform ='scale(100%)';
                modal.style.opacity ='1';
                modal.children[0].src = 'file:///Users/ardyardian/Desktop/Developtment/Fundamentals/clone-dji-website/videos/modal4.mp4';
                modal.addEventListener('click', function(){
                    if(this === modal){ 
                        modal.style.transform ='scale(0)';
                        modal.style.opacity ='0';
                        modal.children[0].pause();
                    };
                })
            });
        }
        
    })
})();



