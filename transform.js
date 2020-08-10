function transform(){
    var text = document.getElementById("input_text").value.toLowerCase().split('');
    var transformed = [];
    text.forEach(function (value, i ){
        value!= " " ? i%2==0 ? transformed.push(value.toUpperCase()) : transformed.push(value) : transformed.push(value)
    });
    
    var copyText = transformed.join('');
    document.getElementById("return").innerHTML = copyText;

    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', transform);      
});