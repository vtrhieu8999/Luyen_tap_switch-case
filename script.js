function ifElse()
{
    let value = parseInt(document.getElementById('ifElse').value);
    if (value > 0) {
        alert('1');
    } else {
        if (value < 0)
            alert('-1');
        else {
            alert('0');
        }
    }
}

function switchCase() {
    let value = parseInt(document.getElementById('ifElse').value);
    value= value>0 ? 1: value<0 ? -1: 0;
    alert(value);
}