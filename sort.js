
 function a1()
 {
    array1.sort(function (a, b) {
        if(a.name < b.name) 
        {
            return -1;
        }
        else if(a.name > b.name)
        {
            return 1;
        }

        return 0;
    });
    loarddata1(array1)
 }
 function a2()
 {

    array1.sort(function (a, b) {
        if(a.name > b.name) 
        {
            return -1;
        }
        else if(a.name < b.name)
        {
            return 1;
        }

        return 0;
    });
    loarddata1(array1)
 }

 function sort1()
 {
     let  val = document.getElementById("sorting").value;
     if(val == "Ascending")
     {
         a1();
     }
     if(val == "Descending")
     {
         a2();
     }
    
 }