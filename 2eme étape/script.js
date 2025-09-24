document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('EuroInput');
    const input2 = document.getElementById('USDInput');
    const input3 = document.getElementById('AUDInput');

    let lastEdited = null;

    function updateConversions() {
        const euroValue = parseFloat(input1.value);
        const usdValue = parseFloat(input2.value);
        const audValue = parseFloat(input3.value);

        if (lastEdited === input1 && !isNaN(euroValue) && euroValue !== 0) {
            input2.value = (euroValue * 1.1).toFixed(2);
            input3.value = (euroValue * 1.5).toFixed(2);
        } else if (lastEdited === input2 && !isNaN(usdValue) && usdValue !== 0) {
            input1.value = (usdValue * 0.91).toFixed(2);
            input3.value = (usdValue * 1.36).toFixed(2);
        } else if (lastEdited === input3 && !isNaN(audValue) && audValue !== 0) {
            input1.value = (audValue * 0.67).toFixed(2);
            input2.value = (audValue * 0.74).toFixed(2);
        } else if (isNaN(euroValue) || isNaN(usdValue) || isNaN(audValue)) {
            if (lastEdited) lastEdited.value = '';
            input1.value = '';
            input2.value = '';
            input3.value = '';
            lastEdited = null;
        }
    }

    input1.addEventListener('input', function() { lastEdited = input1; updateConversions(); });
    input2.addEventListener('input', function() { lastEdited = input2; updateConversions(); });
    input3.addEventListener('input', function() { lastEdited = input3; updateConversions(); });
});