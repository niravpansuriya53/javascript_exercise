const st =
{   
    "india":{
                "gujrat":["surat","vapi","valsad","vadodra","ahmdabad"],
                "maharashtra":["mumbai","pune","nagpur","thane","nashik"],
                "uttar_Pradesh":["kanpur","lucknow","ghaziabad","agra","amroha"],
                "rajasthan":["udaipur","jodhpur","ambala","mountabu","jaisalmer"],
                "bihar": ["patna","gaya","purnia","mehsi","danapur"]
            },
    "germany":{

                    "bavaria":["munich","nurembreg","augsburg","furth"],
                    "bremen":["Melbourne","Geelong","Ballarat","Bendigo","Bendingo"],
                    "saarland":["Broome","Bunbury","Busselton","Coolgardie","Dampier"],
                    "thuringia":["Ali Curung","Alice Springs","Alpurrurulam","Alyangula","Amoonguna"],
                    "berlin":["Gold Coast","Cairns","Brisbane","Toowoomba","Logan city"]
                },
    "japan":    {
                    "aichi": ["Gamagōri", "Hekinan", "Komaki", "Nagoya", "Okazaki"],
                    "hokkaido": ["Chitose", "Hakodate", "Kushiro", "Obihiro", "Tomakomai", "Yūbari"],
                    "kanagawa": ["Chigasaki", "Hiratsuka", "Miura", "Yokohama", "Odawara"]
    }
}
var array1=[
            {   name:"nirav",
                email:"nirav@gmail.com",
                gender:"male",
                hobbies:"sports",
                age:18,
                country:"india",
                state:"gujrat",
                city:"surat"
            },
            {   name:"ram",
                email:"ram@gmail.com",
                gender:"male",
                hobbies:"reading",
                age:48,
                country:"japan",
                state:"aichi",
                city:"Komaki"
            },
            {   name:"eeta",
                email:"sheeta@gmail.com",
                gender:"female",
                hobbies:"travelling",
                age:46,
                country:"india",
                state:"maharashtra",
                city:"mumbai"
            }
    
        ]
        function loarddata()
        {
            let table = document.getElementById("tbody");
            table.innerHTML=""

            for(let i in array1)
                {
                let row = table.insertRow(-1);

                    let c1 = row.insertCell(0);
                    let c2 = row.insertCell(1);
                    let c3 = row.insertCell(2);
                    let c4 = row.insertCell(3);
                    let c5 = row.insertCell(4);
                    let c6 = row.insertCell(5);
                    let c7 = row.insertCell(6);
                    let c8 = row.insertCell(7);
                    let c9 = row.insertCell(8);
                    let c10 = row.insertCell(9)
                    
                    c1.innerText = array1[i].name;
                    c2.innerText = array1[i].email;
                    c3.innerText = array1[i].gender;
                    c4.innerText = array1[i].hobbies;
                    c5.innerText = array1[i].age;
                    c6.innerText = array1[i].country;
                    c7.innerText = array1[i].state;
                    c8.innerText = array1[i].city;
                    c9.innerHTML = `<button id='updateid' onclick="update(${i})">Edit</button>`;
                    c10.innerHTML = "<button  onclick='myfunction(this)';>Remove</button>";
                }

            let getco= document.getElementById("country")
            getco.innerHTML=""
            getco.innerHTML=`<option value=""> Select Country </option> `;
                for(let y in st)
                {
                    let op1=document.createElement('option')
                    op1.text=y;
                    op1.value=y;
                    getco.appendChild(op1)
                }
            state1()

        }
          loarddata()
        

function state1(val1)
{
    let gets= document.getElementById("state")
    gets.innerHTML=""
    gets.innerHTML=`<option value=""> Select State </option>`;
    for( let x in st[val1] )
    {
        let op= document.createElement('option');
        op.value =x;
        op.text=x;
        gets.appendChild(op)
    }
    city1()
}
function city1(val)
{
    let getc= document.getElementById("city")
    if(val== "")
    {
        getc.innerHTML="";
        getc.innerHTML=`<option value=""> Select City </option>`;
    }
    else
    {
        let coo = document.getElementById("country").value;
        getc.innerHTML="";
        getc.innerHTML=`<option value=""> Select City </option>`
        st[coo][val].forEach(element => {
            let op=document.createElement('option')
            op.value = element;
            op.text= element;
            getc.appendChild(op);
        });
    }
}
function myfunction(r) 
{
        let del =  r.parentNode.parentNode.rowIndex;
      document.getElementById("data").deleteRow(del);
}

   










