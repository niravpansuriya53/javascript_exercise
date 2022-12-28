function validation()
{
    // name
    let name = document.getElementById("name").value;
    var name_match=/^[a-zA-Z]+$/;
    let namsp = document.getElementById("spname")
    if(name.match(name_match)){
        namsp.innerHTML=""
    }
    else
    {namsp.innerHTML="Please Enter a valide name!!"}

    // email
    let emailsp = document.getElementById("spemail")
    let email = document.getElementById("email").value;
    if(email.length == 0 )
    {emailsp.innerHTML="Please Enter a valide email!!";}
    else{emailsp.innerHTML=""}

    // gender
    let male= document.getElementById("gender1")
    let female= document.getElementById("gender2")
    let gendersp=document.getElementById("spgender")
    if(male.checked == false && female.checked == false)
    {
        gendersp.innerHTML="Please Select Gender!!"
    }
    else{gendersp.innerHTML=""}

    //hobbies
    let reading=document.getElementById("reading")
    let travelling=document.getElementById("travelling")
    let sports = document.getElementById("sports")
    let hobbiessp =document.getElementById("sphobbies")
    if(reading.checked || travelling.checked || sports.checked)
    {hobbiessp.innerHTML=""}
    else
    {hobbiessp.innerHTML="Please Check The Hobbies!!"}

    // age
    let age = document.getElementById("age").value;
    let spage = document.getElementById("spage")
    if(age.length == 0)
    {
        spage.innerHTML="Please Enter Age!! "
    }
    else{spage.innerHTML=""}

    //country
    let csct = document.getElementById("country")
    let copidx = csct.options[csct.selectedIndex].value;
    let spcountry = document.getElementById("spcountry")
    if( copidx == 0)
    {
        spcountry.innerHTML="Please selecet Country!!"
    }
    else{spcountry.innerHTML=""}

    // state
    let ssct = document.getElementById("state")
    let sopidx = ssct.options[ssct.selectedIndex].value;
    let spstate = document.getElementById("spstate")
    if( sopidx == 0)
    {
        spstate.innerHTML="Please selecet State!!"
    }
    else{spstate.innerHTML=""}

    // city
    let ctsct = document.getElementById("city")
    let ctopidx = csct.options[ctsct.selectedIndex].value;
    let spcity = document.getElementById("spcity")
    if( ctopidx == 0)
    {
        spcity.innerHTML="Please selecet City!!"
    }
    else{spcity.innerHTML=""}


}

