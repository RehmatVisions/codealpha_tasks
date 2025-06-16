
const display=document.getElementById("display");
 const appendValue=(value)=>{
display.value+=value;
   
 
 }
 const clearDisplay=()=>display.value="";
 const calculateResult=()=>{
    try {
           display.value = eval(display.value);
    } catch (error) {
        display.value="error"
    }
 }
 
 
 document.addEventListener("keydown",(e)=>{
const key=e.key;
 
if("1234567890+-/*".includes(key)){
    appendValue(key)
}else if(key==="Backspace"){
    display.value=display.value.slice(0,-1)
}
else if(key==="Escape"){
    clearDisplay();
}
else if(key==="Enter"){
    calculateResult();
}
 })