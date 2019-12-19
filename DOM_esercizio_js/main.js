const ulTag = document.querySelector("ul");
const btnAdd = document.getElementById("add");
const btnSave = document.getElementById("saveBtn");
let el = document.getElementById("textToAdd");
let i = 0;
const campoInserisci = document.getElementById("campoTestoInserisci");

el.onclick = event =>{
    document.getElementById("textToAdd").value = "";
}
btnAdd.onclick = event => {
    AppendToList(el.value);
    btnSave.style.backgroundColor = "rgb(27, 165, 230)";
    btnSave.style.color = "black";
}

btnSave.onclick = event => {
    
    addLocalStorageData();
    btnSave.style.backgroundColor = "red";
    btnSave.style.color = "white";
}

el.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

function addLocalStorageData(){

}

function getLocalStorageData(){

}

function data(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1;
    let yyyy = today.getFullYear();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    if(h<10) 
    {
        h='0'+h;
    } 
    
    if(m<10) 
    {
        m='0'+m;
    }
    if(s<10) 
    {
        s='0'+s;
    } 
    
    let dataOggi = dd+'/'+mm+'/'+yyyy;
    let OraOggi = h+":"+m+":"+s;

    today = dataOggi +" "+OraOggi;
    return today;
}


function AppendToList(text){
    if(text==""){
        alert("Inserisci qualcosa");
    }
    else{
    let elementToAdd = document.createElement("tr");
    let buttonDelete = document.createElement("button");
    let buttonDone = document.createElement("button");
    let buttonFields = document.createElement("td");
    let dateField = document.createElement("td");
    let valueField = document.createElement("td");
    let a = data().toString();

    buttonDelete.id = "deleteButton";
    buttonDone.id = "doneButton";
    
    valueField.style.fontSize = "24px";
    valueField.style.width = "84%";
    valueField.style.maxWidth = "84%";
    valueField.style.borderTop = "0.3px solid black";
    valueField.style.borderLeft = "0.3px solid black";
    valueField.style.paddingLeft = "5px";
    //valueField.style.borderBottom = "0.3px solid black";
    dateField.style.borderTop = "0.3px solid black";
    dateField.style.borderRight = "0.3px solid black";
    dateField.style.borderLeft = "0.3px solid black";
    dateField.style.paddingLeft = "10px";
    //dateField.style.borderBottom = "0.3px solid black";
    buttonFields.style.display = "inline-block";
    
    dateField.style.backgroundColor = "white";
    valueField.style.backgroundColor = "white";

    valueField.style.paddingRight = "100px";
    dateField.style.paddingRight = "30px";

    valueField.append(text);
    dateField.append(a);
    buttonFields.appendChild(buttonDelete);
    buttonFields.appendChild(buttonDone);
    
    buttonDelete.addEventListener("click", event=>{
        ulTag.removeChild(elementToAdd);
        ulTag.removeChild(buttonDelete);
        ulTag.removeChild(buttonDone);
       })

    buttonDone.addEventListener("click", event=>{
        if(i%2 == 0){
            valueField.style.fontWeight = "bold";
            valueField.style.textDecoration = "line-through";
            valueField.style.backgroundColor = "greenyellow";
            i++;
        }
        else{
            valueField.style.textDecoration = "none";
            valueField.style.backgroundColor = "white";
            valueField.style.fontWeight = "normal";
            i++;
        }
       })

    
    //elementToAdd.appendChild(document.createTextNode(text));
    buttonDelete.innerHTML = '<i class="fa fa-trash"></i>';
    buttonDelete.style.backgroundColor = "red";
    buttonDelete.style.zoom = "100%";
    buttonDone.innerHTML = '<i class="fa fa-check-circle"></i>';
    buttonDone.style.backgroundColor = "greenyellow";
    buttonDone.style.zoom = "100%";


    
    elementToAdd.appendChild(valueField);
    elementToAdd.appendChild(dateField);
    elementToAdd.appendChild(buttonFields);
    ulTag.appendChild(elementToAdd);
    document.getElementById("textToAdd").value = "";
    
    //location.reload();
    };
};
