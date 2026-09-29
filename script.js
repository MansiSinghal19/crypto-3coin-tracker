async function getCryptoPrices() {

    const urls = {
        bitcoin: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
        ethereum: "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",
        dogecoin: "https://api.binance.com/api/v3/ticker/price?symbol=DOGEUSDT"
    };

    try {

        const bitcoinResponse = await fetch(urls.bitcoin);
        const ethereumResponse = await fetch(urls.ethereum);
        const dogecoinResponse = await fetch(urls.dogecoin);

        const bitcoinData = await bitcoinResponse.json();
        const ethereumData = await ethereumResponse.json();
        const dogecoinData = await dogecoinResponse.json();

        document.getElementById("bitcoin-price").innerText =
            "$" + Number(bitcoinData.price).toLocaleString();

        document.getElementById("ethereum-price").innerText =
            "$" + Number(ethereumData.price).toLocaleString();

        document.getElementById("dogecoin-price").innerText =
            "$" + Number(dogecoinData.price).toLocaleString();

    } catch (error) {

        console.log("Error fetching crypto prices:", error);

    }
}

getCryptoPrices();

document.getElementById("bitcoin-coin").addEventListener("click", getBitcoinPrice);
document.getElementById("ethereum-coin").addEventListener("click", getEthereumPrice);
document.getElementById("dogecoin-coin").addEventListener("click", getDogecoinPrice);

function getBitcoinPrice() {
    getCryptoPrices();
}

function getEthereumPrice() {
    getCryptoPrices();
}

function getDogecoinPrice() {
    getCryptoPrices();
}