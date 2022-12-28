function update(idx)
{
    let gets1= document.getElementById("p1")
    gets1.innerHTML=""
    document.getElementById("f1").reset()
    console.log(idx);
    document.getElementById("submit").style.display="none";
   
    // add delete button
    let z= document.getElementById("p1")
    let x= document.createElement("BUTTON")
    let t = document.createTextNode("Cancle")
    x.id="cn"
    x.appendChild(t);
    z.appendChild(x)
    //document.body.appendChild(x)
    document.getElementById("cn").style.color="red"
    //cancle button click add submoite button and remove cancle button and update button
    document.getElementById("cn").onclick = function()
    {
        document.getElementById("f1").reset()
        let mn = document.getElementById("up1")
        mn.remove()    
        document.getElementById("submit").style.display="block";   
        let mm = document.getElementById("cn")
        mm.remove()
    }
   

    

    // document.getElementsById("name").innerHTML= name
        
    // add update button
    let table=document.getElementById("data")
    let y= document.createElement("BUTTON")
    let p = document.createTextNode("Update")
    y.id="up1"
    y.appendChild(p);
    z.appendChild(y)
    

    document.getElementById("name").value=array1[idx].name
    document.getElementById("email").value=array1[idx].email
    if(array1[idx].gender == "male")
    {
        document.getElementById("gender1").checked = true
    }
    else if(array1[idx].gender == "female")
    {
        document.getElementById("gender2").checked = true
    }
    if(array1[idx].hobbies == "reading")
    {
        document.getElementById("reading").checked = true
    }
    if(array1[idx].hobbies == "travelling")
    {
        document.getElementById("travelling").checked = true
    }
    if(array1[idx].hobbies == "sports")
    {
        document.getElementById("sports").checked = true
    }
   
    document.getElementById("age").value=array1[idx].age
    document.getElementById("country").value= array1[idx].country
    state1(array1[idx].country)
    document.getElementById("state").value= array1[idx].state
    city1(array1[idx].state)
    document.getElementById("city").value= array1[idx].city

    
    document.getElementById("up1").onclick = function()
    {

        array1[idx].name= document.getElementById("name").value;
        array1[idx].email= document.getElementById("email").value
        array1[idx].gender=document.querySelector('input[name="gender"]:checked').value;
        var inputElements = document.getElementsByName('hobbies');
        let checkedValue=""
            for(var i=0; inputElements[i]; ++i)
            {
                    if(inputElements[i].checked)   
                    {
                        checkedValue += inputElements[i].value;
                    
                    }
            } 
        array1[idx].hobbies = checkedValue
        array1[idx].age= document.getElementById("age").value
        array1[idx].country=document.getElementById("country").value
        array1[idx].state=document.getElementById("state").value
        array1[idx].city=document.getElementById("city").value
        if(array1[idx].name && array1[idx].email && array1[idx].gender && array1[idx].hobbies != 0 && array1[idx].age && array1[idx].country && array1[idx].state && array1[idx].city )
        {
        
            loarddata()
            document.getElementById("f1").reset()
        }
            
    }


    event.preventDefault()
}

