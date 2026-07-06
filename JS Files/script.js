function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}
function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (!isNaN(key) || key === '.') appendToDisplay(key);
    if (key === '+' || key === '-' || key === '%' || key === '/') appendToDisplay(key);
    if (key === '*') appendToDisplay('×');
    if (key === 'Enter' || key === '=') calculate();
    if (key === 'Backspace') deleteLast();
    if (key === 'Escape') clearDisplay();
});
