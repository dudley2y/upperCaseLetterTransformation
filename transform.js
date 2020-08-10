function transform(){
    var text = document.getElementById("input_text").value.toLowerCase().split('');
    var transformed = [];
    text.forEach(function (value, i ){
        value!= " " ? i%2==0 ? transformed.push(value.toUpperCase()) : transformed.push(value) : transformed.push(value)
    });
    
    var copyText = transformed.join('');
    document.getElementById("return").innerHTML = copyText;
    
    document.getElementById("copied").innerHTML = "copied to clipboard!";
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = copyText;
    temp.select();
    document.execCommand("copy");
    
    var textArea = document.getElementsByTagName("textarea");
    while(textArea.length) textArea[0].parentNode.removeChild(textArea[0]);
    
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', transform);      
});
