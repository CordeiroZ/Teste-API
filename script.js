async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    if (!amount) {
        resultDiv.textContent = 'Por favor, insira um valor.';
        return;
    }

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const converted = (amount * rate).toFixed(2);
        resultDiv.textContent = `${amount} ${fromCurrency} = ${converted} ${toCurrency}`;
    } catch (error) {
        resultDiv.textContent = 'Erro ao converter moedas.';
    }
}
