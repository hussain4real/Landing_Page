window.onscroll = ()=>{
   scrollFunction();
}

const scrollFunction = () =>{
   if (document.body.scrollTo > 130 || document.documentElement.scrollTop>130) {
      document.getElementById('myBtn').style.display='block'; 
   } else {
      document.getElementById('myBtn').style.display='none';
      
   }
}

const topFunction =()=>{
   document.body.scrollTop=0;
   document.documentElement.scrollTop=0;
}