let img=document.getElementById("animation")

    setInterval(()=>{
        if( img.style.display=="none"){
            img.style.display="block"
            img.style.transition="0.3s"
        }
        else{
            img.style.display="none"
            img.style.transition="0.3s"
        }
    },3000)


    window.onscroll = function() {myFunction()}

    var navbar = document.getElementById("top-nav");
    var sticky = navbar.offsetTop;
    function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}