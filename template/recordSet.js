
function home()
{
       var fname=document.getElementById("fname").value;
       var lname=document.getElementById("lname").value;
       var message=document.getElementById("message").value;
       localStorage.setItem("fname",fname);
       localStorage.setItem("lname",lname);
       localStorage.setItem("message",message);
}

function contactForm()
{
       var address,email,phone,freelance;
       address=document.getElementById("address").value;
       email=document.getElementById("email").value;
       phone=document.getElementById("phone").value;
       freelance=document.getElementById("freelance").value;
      localStorage.setItem("address",address);
      localStorage.setItem("email",email);
      localStorage.setItem("phone",phone);
      localStorage.setItem("freelance",freelance)

}