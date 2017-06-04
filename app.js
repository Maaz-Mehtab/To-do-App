var ol = document.getElementById('ol');

function mufuns() {

    var input = document.getElementById('myInput').value;
    if (myInput.value == '') {
        alert("Please Enter someThing");
    } else {
        var li = document.createElement('li');
        var img = document.createElement('img');

        img.src = "del-icon.png";
        img.onclick = function() {
            var dli = this.parentNode;
            var dol = dli.parentNode;
            dol.removeChild(dli);


        };
        var inputnode = document.createTextNode(input);
        li.appendChild(inputnode);
        li.appendChild(img);
        ol.appendChild(li);
        document.getElementById('myInput').value = '';

    }
}

function delAllItems() {
    ol.innerHTML = '';
}