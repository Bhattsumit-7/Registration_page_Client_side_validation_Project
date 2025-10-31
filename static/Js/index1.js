function Test_case1(){
    var F_name=document.getElementById("A").value;
    var L_name=document.getElementById("B").value;
    var username=document.getElementById("C").value;
    var p1=document.getElementById("D").value;
    var p2=document.getElementById("E").value;
    var mobile_number=document.getElementById("F").value;
    var mail=document.getElementById("G").value;
    var my_gender=document.getElementsByName("gender");
    var checkbox=document.getElementsByName("language");
    var select_1=document.getElementById("a");
    var select_2=document.getElementById("b");
    var select_3=document.getElementById("c");

    // Regex Object for Fields are as below 
    var obj1=F_name.match(/[A-Z]{1}[a-z]*/g);
    var obj2=L_name.match(/[A-Z]{1}[a-z]*/g);
    var obj3=username.match(/[A-Z]{1}[a-z]*[_]{1}[0-9]{4}/g);
    var obj4=p1.match(/[A-Z]{1}[a-z]*[^A-z a-z 0-9]{1}[0-9]*[^A-z a-z 0-9]{1}/g);
    var obj5=p2.match(/[A-Z]{1}[a-z]*[^A-z a-z 0-9]{1}[0-9]*[^A-z a-z 0-9]{1}/g);
    var obj6=mobile_number.match(/[+]{1}[9]{1}[1]{1}-[6-9]\d{9}/g);
    var obj7=mail.match(/\w[A-Za-z0-9._]*@gmail[.]com/g);

    // F_name Validation
    if(F_name==""||F_name==null){
        window.alert("Dear user : First name is required!");
        document.getElementById("XYZ").innerHTML="*** Dear User : First name is required!***";
        return false;
    }
    else if(obj1==""||obj1==null){
        window.alert("Dear user : First name is invalid!");
        document.getElementById("XYZ").innerHTML="Dear User your First name is: "+F_name+" - it should be ex:-Rahul***";
        return false;
    }

    // L_name Validation
    if(L_name==""||L_name==null){
        window.alert("Dear user : Last name is required!");
        document.getElementById("XYZ").innerHTML="*** Dear User : Last name is required!***";
        return false;
    }
    else if(obj2==""||obj2==null){
        window.alert("Dear user : Last name is invalid!");
        document.getElementById("XYZ").innerHTML="Dear User your Last name is: "+L_name+" - it should be ex:-Sharma***";
        return false;
    }

    // username Validation
    if(username==""||username==null){
        window.alert("Dear user : Username is required!");
        document.getElementById("XYZ").innerHTML="*** Dear User : Username is required!***";
        return false;
    }
    else if(obj3==""||obj3==null){
        window.alert("Dear user : Username is invalid!");
        document.getElementById("XYZ").innerHTML="Dear User your Username is: "+username+" - it should be ex:-Rahul_2000***";
        return false;
    }

    // Password Validation
    if(p1=="" || p2==""){
        window.alert("Dear user : Password fields cannot be empty!");
        document.getElementById("XYZ").innerHTML="*** Dear User : Password fields cannot be empty!***";
        return false;
    }
    else if(obj4 && obj5){ // both match regex-object
        if(p1 === p2){
            // continue normal flow after this
        }
        else{
            window.alert(p1+" -- "+p2+" : Passwords do not match");
            document.getElementById("XYZ").innerHTML="***Dear User: Passwords do not match***";
            return false;
        }
    }
    else{
        window.alert("Invalid Password Format!\nPassword must have:\n• One Uppercase\n• One Lowercase\n• One Number\n• One Special Character\n• Minimum 8 Characters");
        document.getElementById("XYZ").innerHTML=p1 + " - Is_Invalid_Password should be Ex: Rahul@2341!";
        return false;
    }

    // mobile_number Validation
    if(mobile_number==""||mobile_number==null){
        window.alert("Dear user : Mobile_number is required!");
        document.getElementById("XYZ").innerHTML="*** Dear User : Mobile_number is required!***";
        return false;
    }
    else if(obj6==""||obj6==null){
        window.alert("Dear user : Mobile_number is invalid!");
        document.getElementById("XYZ").innerHTML="Dear User your Mobile_number is: "+mobile_number+" - it should be ex:- +91-9090123123***";
        return false;
    }

    // mail Validation
    if(mail==""||mail==null){
        window.alert("Dear user : Mail_id is required!");
        document.getElementById("XYZ").innerHTML="*** Dear User : Mail_id is required!***";
        return false;
    }
    else if(obj7==""||obj7==null){
        window.alert("Dear user : Mail_id is invalid!");
        document.getElementById("XYZ").innerHTML="Dear User your Mail_id is: "+mail+" - it should be ex:- Rahul_7@gmail.com***";
        return false;
    }

    // radio button validation
    else if (my_gender[0].checked==false && my_gender[1].checked==false){
        window.alert("Dear User : Verify either you are Male or Female");
        document.getElementById("XYZ").innerHTML="***Dear User : Verify either you are Male or Female***";
        return false;
    }

    // Check Box Validation
    else if(checkbox[0].checked==false && checkbox[1].checked==false && checkbox[2].checked==false && checkbox[3].checked==false){
        window.alert("Dear User : Select atleast one option in checkbox");
        document.getElementById("XYZ").innerHTML="***Dear User : Select atleast one option in checkbox***";
        return false;
    }

    // Select tag validation 
    if(select_1.selectedIndex==""){
        window.alert("Dear User : City is required");
        document.getElementById("XYZ").innerHTML="***Dear User : City is required***";
        return false;
    }
    else if(select_2.selectedIndex==""){
        window.alert("Dear User : State is required");
        document.getElementById("XYZ").innerHTML="***Dear User : State is required***";
        return false;
    }
    else if(select_3.selectedIndex==""){
        window.alert("Dear User : Country is required");
        document.getElementById("XYZ").innerHTML="***Dear User : Country is required***";
        return false;
    }

    return true; // if validation pass it get submit
}

function Test_case2(){
    document.getElementById("XYZ").innerHTML=" ";
}
