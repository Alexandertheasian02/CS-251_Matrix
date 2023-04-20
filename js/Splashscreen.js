let intro= document.querySelector('.intro');
let logoname = document.querySelector('.logo-header');
let logonameSpan = document.querySelectorAll('.logoname');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logonameSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1)* 400)
        });
        setTimeout(()=>{
            logonameSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');

                },(idx+1)* 50)
            })

        },2000);
        setTimeout(()=>{
            intro.style.top='-100vh';
        },1500)
    })

})