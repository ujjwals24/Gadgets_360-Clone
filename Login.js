let Lsdata = JSON.parse(localStorage.getItem("userData")) || [];
      let form = document.querySelector("form");
     

     form.addEventListener("submit", function(e){
      e.preventDefault();
      let email = document.getElementById("email");
      let password = document.getElementById("password");

      let inputData = {
        email :form.email.value,
        password :form.password.value,
      }
       Lsdata.forEach(element => {
         if(element.email == inputData.email && element.password == inputData.password){
            
          swal("Login Successful!", "You clicked the button!", "success")

          setTimeout(()=>{
           window.location.href = "./index.html"
          },2000)

         }
        else{
           
            swal("Worng Details!", "Please try again!", "error")
         }
      });
     });

     let home = document.getElementById("home");
     home.addEventListener("click",() => {
        window.location.href = "./index.html"
     })