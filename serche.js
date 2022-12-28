function search1()
{
    let data = document.getElementById("inpsearch").value
    if(data !="")
    {
            let a1 = array1.filter(arra=>{
                if(arra.name.toLowerCase().indexOf(data.toLowerCase())>-1)
                return arra;
        })
        loarddata1(a1)
    }
    else
    {
        alert("Please Search Name!!!")
    }
}  
function loarddata1(search)
{
    let table = document.getElementById("tbody");
    table.innerHTML=""
    let leng = search.length
    if(leng == 0)
    {}
    else
    {

        for(let i=0;i< leng;i++)
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
                
                c1.innerText = search[i].name;
                c2.innerText = search[i].email;
                c3.innerText = search[i].gender;
                c4.innerText = search[i].hobbies;
                c5.innerText = search[i].age;
                c6.innerText = search[i].country;
                c7.innerText = search[i].state;
                c8.innerText = search[i].city;
                c9.innerHTML = `<button id='updateid' onclick="update(${i})">Edit</button>`;
                c10.innerHTML = "<button  onclick='myfunction(this)';>Remove</button>";
            }

                    // let getco= document.getElementById("country")
                    // getco.innerHTML=""
                    // getco.innerHTML=`<option value=""> Select Country </option> `;
                    //     for(let y in st)
                    //     {
                    //         let op1=document.createElement('option')
                    //         op1.text=y;
                    //         op1.value=y;
                    //         getco.appendChild(op1)
                    //     }
    }

}