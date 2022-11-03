var firstChar;
function display(num){
    firstChar = document.getElementById('displayValue').value += num;
    if(firstChar.charAt(0)=='%'||firstChar.charAt(0)=='/'||firstChar.charAt(0)=='*'||
                    firstChar.charAt(0)=='+'||firstChar.charAt(0)=='-'){
        document.getElementById('error').style.display="block";
    }
}
function remove(){
    firstChar = document.getElementById('displayValue').value = firstChar.slice(0,firstChar.length-1);
    if(firstChar.charAt(0)==""){
        document.getElementById('error').style.display="none";
    }
}
function cl(){
    document.getElementById('error').style.display="none";
    document.getElementById('displayValue').value ="";
}
function ans(){
    let total = document.getElementById('displayValue').value;
    try {
        document.getElementById('error').style.display="none";
        document.getElementById('displayValue').value = eval(total);
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById('error').style.display="block";
            document.getElementById('error').innerHTML ="Symbol can't find";
        }
    }
}