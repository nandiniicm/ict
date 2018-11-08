function Read(){
    var name= document.getElementById("getname").value;
    console.log(name)
    var RollNo= document.getElementById("getRollNo").value;
    console.log(RollNo)
    var AdNo= document.getElementById("getAdNo").value;
    console.log(AdNo)
    var Age= document.getElementById("getAge").value;
    console.log(Age)
    if(Age>=18)
    {
        console.log("Eligible");
        alert("Eligible");
    }
    
    else{
        console.log("Not Eligible");
        alert("Not Eligible");
    }
    }