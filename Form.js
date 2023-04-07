function myfun  (){
    let name = document.getElementById("n1").value
    let name1=/^[a-zA-Z]+$/.test(name)


    if(name==null||name==""){
        document.getElementById("n2").innerHTML="please enter a name"

    }
     else if(!name1){
         document.getElementById("n2").innerHTML="please enter vaild name"


    }
    else{
        document.getElementById("n2").innerHTML=""
    }
    
        let lname = document.getElementById("n3").value
        let lname1=/^[a-zA-Z]+$/.test(lname)
    
    
        if(lname==null||lname==""){
            document.getElementById("n4").innerHTML="please enter a name"
    
        }
         else if(!lname1){
             document.getElementById("n4").innerHTML="please enter vaild name"
    
    
        }
        else{
            document.getElementById("n4").innerHTML=""
        }
        let pname = document.getElementById("n5").value
        let pname1= /^\d{10}$/.test(pname)
    
    
        if(pname==null||pname==""){
            document.getElementById("n6").innerHTML="please enter a number"
    
        }
         else if(!pname1){
             document.getElementById("n6").innerHTML="please enter vaild number"
    
    
        }
        else{
            document.getElementById("n6").innerHTML=""
        }


        let ename = document.getElementById("n7").value
        let ename1= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ename)
    
    
        if(ename==null||ename==""){
            document.getElementById("n8").innerHTML="please enter a mail id"
    
        }
         else if(!ename1){
             document.getElementById("n8").innerHTML="please enter vaild mail id"
    
    
        }
        else{
            document.getElementById("n8").innerHTML=""
        }


       
        let iname = document.getElementById("n9").value
        let iname1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if(iname==""){
            document.getElementById("n10").innerHTML="please enter your password"
        }
        else if(!iname1.test(iname)){
            document.getElementById("n10").innerHTML="please enter valid password"
   
   
       }
        else{
            document.getElementById("n10").innerHTML=""
        }


        let cname = document.getElementById("n11").value

        if(cname==""){
            document.getElementById("n12").innerHTML="please enter confirm password"
        }
        else if(iname!=cname){
            document.getElementById("n12").innerHTML=" password does not match"
        }
        else{
            document.getElementById("n12").innerHTML=""
        }

        const j=document.getElementById("country").value;
    if(j==""){
        document.getElementById("coun").innerHTML="Select One !!";
        document.getElementById("con").style.border="Solid red";     
}
}









