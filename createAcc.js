let userdata = [];
      let myform = document.querySelector("form");
      myform.addEventListener("submit",function(e){
        e.preventDefault();
        let formData = {
          name : myform.name.value,
          email : myform.email.value,
          password : myform.password.value,
         
        }
       

        if(formData.name == "" || formData.email == "" || formData.password == "" ){
           
            // swal("Please fill all the Details")
            swal("Please fill all the Details!", "Retry!", "warning")

        }
        else{
          userdata.push(formData);
          localStorage.setItem("userData",JSON.stringify(userdata));
          // alert("Account Created!" + " " +  "Welcome To Booking.Com!" + " " + "success");
          swal({
           title: "Account Created!",
           text: "WE COME TO BOOKING.COM!",
           icon: "success",
           button: "ok!",
});
        
         setTimeout(()=>{
            window.location.href = "./login.html"
         },2500)
        }
      });
      
      let home = document.getElementById("home");
      home.addEventListener("click",() => {
         window.location.href = "./index.html"
      })
