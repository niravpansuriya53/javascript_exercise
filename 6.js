
function updateForm(index){

    document.getElementById('f1').reset();
    document.getElementById('name').value = arr[index].name;
    document.getElementById('email').value = arr[index].email;
    if(arr[index].gender == "male"){
        document.getElementById('male').checked = true;
    }else if(arr[index].gender == "female"){
        document.getElementById('female').checked = true;
    }
   
    if(arr[index].hobby.includes("reading") == true){
        document.getElementById('reading').checked = true;
    }
     if(arr[index].hobby.includes("travelling")== true){
        document.getElementById('travelling').checked = true;
    }
     if(arr[index].hobby.includes("sports")== true){
        document.getElementById('sports').checked = true;
    }

    document.getElementById('age').value = arr[index].age;
    document.getElementById('country').value = arr[index].country;
  
    selectState(arr[index].country);
    document.getElementById('state').value = arr[index].state;
    selectCity(arr[index].state);
    document.getElementById('city').value = arr[index].city;




    arr[index].name = document.getElementById('name').value;
    arr[index].email = document.getElementById('email').value;
    arr[index].gender = document.querySelector('input[name="gender"]:checked').value;
    let hobby = document.getElementsByName('hobbies');
    let hobbyArray = [];
    for(let i = 0; i < hobbies.length;i++){
        if(hobbies[i].checked == true){
            hobbyArray.push(hobbies[i].value)
        }
    }
    arr[index].hobbies = hobbyArray;
    arr[index].age = document.getElementById('age').value;
    arr[index].country = document.getElementById('country').value;
    arr[index].state = document.getElementById('state').value;
    arr[index].city = document.getElementById('city').value;
}