document.querySelector("add").onclick = function summation(){  
    var data_1 = document.getElementById("folder").value
    console.log(data_1)
    var data_2 = document.getElementById("lfooter").value  
    console.log(data_2)
    var data_3 = document.getElementById("mfooter").value 
    console.log(data_3)
    var data_4 = document.getElementById("rfooter").value 
    console.log(data_4)
    data = eel.path_adder(data_1)
    eel.path_adder(data,data_2,data_3,data_4,folder)
}  

console.log("erer")