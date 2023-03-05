
function about()
{
    var h,d,n,p;
    h=document.getElementById("heading").value;
    d=document.getElementById("des").value;
    n=document.getElementById("uname").value;
    p=document.getElementById("profession").value;
    localStorage.setItem("aboutheading",h);
    localStorage.setItem("aboutdes",d);
    localStorage.setItem("aboutname",n);
    localStorage.setItem("aboutprof",p)
}