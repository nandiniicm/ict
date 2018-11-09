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
    var op=document.getElementById("district");
var district=op.options[op.selectedIndex].value;
    console.log(district);
    }

    


    function Largest()
{
    var Num1= document.getElementById("getn1").value;
        
        var Num2= document.getElementById("getn2").value;
        var Num3= document.getElementById("getn3").value;

        var x=parseInt(Num1);
        var y=parseInt(Num2);
        var z=parseInt(Num3);
        if(x>y && x>z)
        {
            console.log(x);
        }
        else if(y>x && y>z)
        {
            console.log(y);
        }
else (z>x && z>y)
{
    console.log(z);
}
}

function smallest()
{
    var Num1= document.getElementById("getn1").value;
        
        var Num2= document.getElementById("getn2").value;
        var Num3= document.getElementById("getn3").value;

        var x=parseInt(Num1);
        var y=parseInt(Num2);
        var z=parseInt(Num3);
        if(x<y && x<z)
        {
            console.log(x);
        }
        else if(y<x && y<z)
        {
            
            console.log(y);
        }
else if(z<x && z<y)
{
    
    console.log(z);

}
else
console.log("error");
}