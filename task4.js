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

    
   

  