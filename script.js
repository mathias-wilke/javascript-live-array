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

function getValueAtIndex() {
    const index = parseInt(document.getElementById('indexInput').value);
    const value = array[index];
    document.getElementById('indexOutput').innerText = value !== undefined ? value : 'Index out of bounds';
}

function displayArray() {
    document.getElementById('output').innerText = array.join(', ');
}
