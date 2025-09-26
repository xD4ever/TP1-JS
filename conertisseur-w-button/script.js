document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('converter');
    const input1 = document.getElementById('EuroInput');
    const input2 = document.getElementById('USDInput');
    const input3 = document.getElementById('AUDInput');

    button.addEventListener('click', function() {
        const euroValue = parseFloat(input1.value);
        const usdValue = parseFloat(input2.value);
        const audValue = parseFloat(input3.value);

        // Convert from Euro
        if (!isNaN(euroValue) && euroValue !== 0) {
            input2.value = (euroValue * 1.1).toFixed(2);
            input3.value = (euroValue * 1.5).toFixed(2);
        } else if (isNaN(euroValue)) {
            input1.value = '';
            input2.value = '';
            input3.value = '';
        }

        // Convert from USD
        if (!isNaN(usdValue) && usdValue !== 0) {
            input1.value = (usdValue * 0.91).toFixed(2);
            input3.value = (usdValue * 1.36).toFixed(2);
        } else if (isNaN(usdValue) && euroValue === 0) {
            input2.value = '';
        }

        // Convert from AUD
        if (!isNaN(audValue) && audValue !== 0) {
            input1.value = (audValue * 0.67).toFixed(2);
            input2.value = (audValue * 0.74).toFixed(2);
        } else if (isNaN(audValue) && euroValue === 0 && usdValue === 0) {
            input3.value = '';
        }
    });
});