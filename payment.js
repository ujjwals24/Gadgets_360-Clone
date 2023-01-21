


let button=document.querySelector(".confirm_btn")
   button.addEventListener("click", () => {
    let name=document.getElementById("name").value
    let number=document.getElementById("number").value
    let expiry=document.getElementById("expiry").value
    let cvv=document.getElementById("cvv").value
    if(name==""||number==""||expiry==""||cvv==""){
      swal("Please fill all the details","","warning")
    }
    else{
   let otp=Math.floor(Math.random()*10000)
   let enter=otp
    let r=confirm(`Your OTP for Payment is ${otp}`)
   if(r==true) {
      enterotp=prompt("Enter the OTP:")
      if(enterotp==enter){
        swal("Payment Success","","success").then((res)=>{
          window.location.href="index.html"
        })
      }
      else{
        swal("Invalid OTP","","warning")
      }
    }
  }
    });


