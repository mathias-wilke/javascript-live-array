let array = ["Turing", "Lovelace", "Knuth"];
displayArray();

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
    const removedValue = array.shift();
    displayArray();
    document.getElementById('indexOutput').innerText = "Output: " + (removedValue !== undefined ? removedValue : 'Array is empty');
}

function removePop() {
    const removedValue = array.pop();
    displayArray();
    document.getElementById('indexOutput').innerText = "Output: " + (removedValue !== undefined ? removedValue : 'Array is empty');
}

function getValueAtIndex() {
    const index = parseInt(document.getElementById('indexInput').value);
    const value = array[index];
    document.getElementById('indexOutput').innerText = "Output: " + (value !== undefined ? value : 'Index out of bounds');
}

function displayArray() {
    document.getElementById('output').innerText = "[ " + array.join(', ') + " ]";
}
