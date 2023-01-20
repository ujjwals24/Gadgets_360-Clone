let btn=document.querySelector(".button")


btn.addEventListener("click",(e)=>{
    let fname=document.getElementById("firstname").value
let lname=document.getElementById("lastname").value
let addrs=document.getElementById("address").value
let country=document.getElementById("country").value
let zip=document.getElementById("zipcode").value
let city=document.getElementById("city").value
let state=document.getElementById("state").value
if(fname==""||lname==""||addrs==""||country==""||zip==""||city==""||state==""){
    swal("Please fill all fields","","warning")
}else{
    window.location.href="payment.html"
}
})