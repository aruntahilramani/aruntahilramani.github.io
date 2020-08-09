function validate()
{
    var uname = document.getElementById("uname");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var pass = document.getElementById("pass1");       
    var reenterpass = document.getElementById("pass2");

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    var lbluname = document.getElementById("erruname")
    var lblfname = document.getElementById("errfname");
    var lbllname = document.getElementById("errlname");
    var lblemail = document.getElementById("erremail");
    var lblpass = document.getElementById("errpass");
    var lblrepass = document.getElementById("errrepass");

    if(uname.value.trim() == "")
    {
        lbluname.style.visibility="visible";
        uname.style.border= "2px solid red";
        return false;
    }
    else
    {
        uname.style.border= "2px solid green";
        lbluname.style.visibility="hidden";
    }

    if(fname.value.trim() == "")
    {
        lblfname.style.visibility="visible";
        fname.style.border= "2px solid red";
        return false;
    }
    else
    {
        fname.style.border= "2px solid green";
        lblfname.style.visibility="hidden";
    }

    if(lname.value.trim() == "")
    {
        lbllname.style.visibility="visible";
        lname.style.border = "2px solid red";
        return false;
    }
    else
    {
        lname.style.border = "2px solid green";
        lbllname.style.visibility="hidden";
    }

    if (reg.test(email.value) == false) 
    {
        lblemail.style.visibility="visible";
        email.style.border = "2px solid red";
        return false;
    }
    else
    {
        email.style.border = "2px solid green";
        lblemail.style.visibility="hidden";
    }

    if(pass.value.trim() == "")
    {
        lblpass.style.visibility="visible";
        pass.style.border = "2px red solid";
        return false;
    }
    else
    {
        lblpass.style.visibility="hidden";
        pass.style.border = "2px green solid";
    }
    if(reenterpass.value.trim() == "")
    {
        lblrepass.style.visibility="visible";
        reenterpass.style.border = "2px red solid";
        return false;
    }
    else
    {
        lblrepass.style.visibility="hidden";
        reenterpass.style.border = "2px red solid";
    }    

    if(pass.value.trim() != reenterpass.value.trim())
    {
        pass.style.border = "2px red solid";
        reenterpass.style.border = "2px red solid";
        return false;

    }
    else
        return true;
}