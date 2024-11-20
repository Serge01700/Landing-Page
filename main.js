// document.addEventListener('DOMContentLoaded', => () {
//     const help = document.getElementById('aide') ;
//     console.log(help) ;
// });

const help = document.getElementById('aide') ;
const visible = document.getElementsByClassName('help') ;
const imgHelp = document.getElementById('help-img') ;

console.log(imgHelp) ;

help.addEventListener('click', () => {
    for (let i = 0; i < visible.length; i++) {
       if(visible[i].style.visibility === 'visible'){
        visible[i].style.visibility = 'hidden';
       }else{
        visible[i].style.visibility = 'visible' ;
       }
    }
});

// imgHelp.addEventListener('click' , () => {
//     if(visible.style.visibility === 'visible'){
//         imgHelp.style.visibility = 'hidden' ;
//     };

// });

// imgHelp.addEventListener('click', () => {
//     for (let i = 0; i < visible.length; i++) {
//         if (visible[i].style.visibility === 'visible') {
//              imgHelp.style.visibility = 'hidden';      
      
//     }
// }});
