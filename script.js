async function getCryptoPrices() {

    const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";

    try {

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("bitcoin-price").innerText =
            "$" + data.bitcoin.usd;

        document.getElementById("ethereum-price").innerText =
            "$" + data.ethereum.usd;

        document.getElementById("dogecoin-price").innerText =
            "$" + data.dogecoin.usd;

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