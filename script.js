let array = [];

function addPush() {
    const input = document.getElementById('input').value;
    array.push(input);
    displayArray();
}

function addUnshift() {
    const input = document.getElementById('input').value;
    array.unshift(input);
    displayArray();
}

function removeShift() {
    array.shift();
    displayArray();
}

function removePop() {
    array.pop();
    displayArray();
}

function displayArray() {
    document.getElementById('output').innerText = array.join(', ');
}
