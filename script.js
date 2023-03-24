let btn = document.getElementById("btn")
btn.addEventListener("click", ()=>{
    let english = document.getElementById("english").value
    let maths = document.getElementById("maths").value
    let physics = document.getElementById("physics").value
    let chemistry = document.getElementById("chemistry").value
    let computer = document.getElementById("computer").value
    if(english>100 || maths>100|| physics>100||chemistry>100||computer>100){
        return alert("Plase Enter values between 0 to 100")
    }

    if(english<0 || maths<0|| physics<0||chemistry<0||computer<0){
        return alert("Plase Enter values between 0 to 100")
    }

   
    

    let flag = false
    if(english==""){
        english = 0
        flag=true
    }
    if(maths==""){
        maths = 0
        flag = true
    }
    if(physics==""){
        physics = 0
        flag = true
    }
    if(computer==""){
        computer = 0
        flag = true
    }
    if(chemistry==""){
        chemistry = 0
        flag = true
    }
///below 35
    if(english <= 35){
        flag=true
    }
    else if(maths<=35){
        flag = true
    }
    else if(physics<=35){
        flag = true
    }
    else if(computer<=35){
        
        flag = true
    }
    else if(chemistry<=35){
        flag = true
    }

    let total = parseInt(english)+parseInt(maths)+parseInt(physics)+parseInt(chemistry)+parseInt(computer)
    document.getElementById("t").innerHTML = "Total marks : "+total
    let avarageScore = total/5
    document.getElementById("a").innerHTML = "Your Average marks are : "+ avarageScore
        if(flag){
            return document.getElementById("g").innerHTML = "Your Got F Grade"
        }
        if(avarageScore>=90){
            document.getElementById("g").innerHTML = "Your Got A Grade"
        }  
        else if(avarageScore<90 && avarageScore>=80){
            document.getElementById("g").innerHTML = "Your Got B Grade"
        }
        else if(avarageScore<80 && avarageScore>=70){
                document.getElementById("g").innerHTML = "Your Got C Grade"
            }   
        else if(avarageScore<70 && avarageScore>=60){
                document.getElementById("g").innerHTML = "Your Got D Grade"
        }
        else if (avarageScore<60){
                document.getElementById("g").innerHTML = "Your Got F Grade"
        }
})