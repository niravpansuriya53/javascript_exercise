function click1()
{
    validation()

    let namevalue=document.getElementById("name").value;
    let emailvalue=document.getElementById("email").value
    let gendervalue=document.querySelector('input[name="gender"]:checked').value;
  
    var inputElements = document.getElementsByName('hobbies');
    var checkedValue = []; 
            for(let i=0;i<inputElements.length ; ++i)
            {
                    if(inputElements[i].checked)   
                    {
                        checkedValue.push(inputElements[i].value);
                    
                    }
            } 
    let hobbiesvalue= checkedValue
    let agevalue = document.getElementById("age").value;
    let countryvalue= document.getElementById("country").value;
    let statevalue= document.getElementById("state").value;
    let cityvalue= document.getElementById("city").value;


        if(namevalue && emailvalue && gendervalue && hobbiesvalue != 0 && agevalue && countryvalue && statevalue && cityvalue )
        {
        array1.push({
                name: namevalue,
                email: emailvalue,
                gender: gendervalue,
                hobbies: hobbiesvalue,
                age: agevalue,
                country: countryvalue,
                state: statevalue,
                city: cityvalue
            })
        
        document.getElementById("f1").reset()
        loarddata()
        }
              
            

    return false

}

    
   

  // table = document.getElementById("data")
    // let row = table.insertRow(-1);

    // let c1 = row.insertCell(0);
    // let c2 = row.insertCell(1);
    // let c3 = row.insertCell(2);
    // let c4 = row.insertCell(3);
    // let c5 = row.insertCell(4);
    // let c6 = row.insertCell(5);
    // let c7 = row.insertCell(6);
    // let c8 = row.insertCell(7);
    // let c9 = row.insertCell(8);
    // let c10 = row.insertCell(9)

    // c1.innerHTML = document.getElementById("name").value;
    // c2.innerHTML = document.getElementById("email").value;
    // c3.innerHTML = document.querySelector('input[name="gender"]:checked').value;
    //     var checkedValue = ""; 
    //     var inputElements = document.getElementsByName('checkbox');
    //         for(var i=0; inputElements[i]; ++i)
    //         {
    //                 if(inputElements[i].checked)   
    //                 {
    //                     checkedValue += inputElements[i].value +",";
                    
    //                 }
    //         } 
    // c4.innerHTML = checkedValue;
    // c5.innerHTML = document.getElementById("age").value;
    // c6.innerHTML = document.getElementById("country").value;
    // c7.innerHTML = document.getElementById("state").value;
    // c8.innerHTML = document.getElementById("city").value;
    // c9.innerHTML = `<button id='updateid' onclick='update(${i})';>Edit</button>`;
    // c10.innerHTML = "<button   onclick='myfunction(this)'; >Remove</button>";