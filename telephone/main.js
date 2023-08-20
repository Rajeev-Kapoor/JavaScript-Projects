var str = []
document.addEventListener("keypress", function(event)
{
var number = event.key; 

number = str + number
if(number.length===4){
    var comb =number;

    combination(comb);
}
str=[]
if(number.length>10)
{
document.getElementById("telno").innerHTML= "This Mobile No-"+ number+ " is Invalid"
setTimeout( ()=> { document.getElementById("telno").innerHTML= "Dail No: " }, 2000);

}
else {
str.push(number);
document.getElementById("new").innerHTML=number;   

}


}
)


function combination(comb)
{
    const telmap=[
        { 
         "telno": "2",
         "telaph1": "a", 
         "telaph2":"b",
         "telph3": "c"
            },
            {
                telno: "3",
                telaph1: "d", 
                telaph2:"e",
                telph3: "f"
                       
            },
            {
                telno: "4",
                telaph1: "g", 
                telaph2:"h",
                telph3: "i"
                       
            },
            {
                telno: "5",
                telaph1: "j", 
                telaph2:"k",
                telph3: "l"
                       
            },
            {
                telno: "6",
                telaph1: "m", 
                telaph2:"n",
                telph3: "o"
                                  
            },
            {
                telno: "7",
                telaph1: "p", 
                telaph2:"q",
                telph3: "r",
                telph4: "s"
            },
            {
                telno: "8",
                telaph1: "t", 
                telaph2:"u",
                telph3: "v"
                       
            },
            {
                telno: "9",
                telaph1: "w", 
                telaph2:"x",
                telph3: "y",
                telph4: "z"
                       
            }
        ]
        var step1 = Object.values(telmap[comb[0]-2]);
        var step2 = Object.values(telmap[comb[1]-2]);
        var step3 = Object.values(telmap[comb[2]-2]);
        var step4 = Object.values(telmap[comb[3]-2]);
var combinat1= [];
var combinat2=[];
var combinat3=[]
var combinat4=[]

for(i=1; i<step1.length;i++){
            combinat1.push(step1[i]);
                    }
                    
                    for(i=0; i<((step2.length)-1);i++){
                        combinat2.push(combinat1[i]+step2[1])
                        combinat2.push(combinat1[i]+step2[2])
                        combinat2.push(combinat1[i]+step2[3])       
                    }
 
                    
                    for(i=0; i<((combinat2.length)-1);i++){
                        combinat3.push(combinat2[i]+step3[1])
                        combinat3.push(combinat2[i]+step3[2])
                        combinat3.push(combinat2[i]+step3[3])       
                    }
                    for(i=0; i<((combinat3.length)-1);i++){
                        combinat4.push(combinat3[i]+step4[1])
                        combinat4.push(combinat3[i]+step4[2])
                        combinat4.push(combinat3[i]+step4[3])       
                    }

    document.getElementById("combi").innerHTML= combinat4;

                    return
}