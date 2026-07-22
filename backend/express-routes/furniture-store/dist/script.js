let money = 1000;

const updateMoneyDisplay = () => {
    document.getElementById('moneyValue').textContent = money;
};

updateMoneyDisplay();

document.getElementById('checkPriceBtn').addEventListener('click', async () => {
    const furnitureName = document.getElementById('furnitureInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!furnitureName) {
        resultDiv.textContent = "Please enter a furniture name.";
        resultDiv.style.color = "red";
        return;
    }

    try {
        const response = await fetch(`/priceCheck/${furnitureName}`);
        const data = await response.json();

        if (data.price !== null) {
            resultDiv.textContent = `The price for "${furnitureName}" is $${data.price}`;
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = `Item "${furnitureName}" not found in store.`;
            resultDiv.style.color = "red";
        }
    } catch (error) {
        console.error('Error:', error);
        resultDiv.textContent = "Error communicating with the server.";
        resultDiv.style.color = "red";
    }
});

document.getElementById('buyBtn').addEventListener('click', async () => {
    const buyName = document.getElementById('buyInput').value.trim();
    const buyResultDiv = document.getElementById('buyResult');

    if (!buyName) {
        buyResultDiv.textContent = "Please enter a furniture name to buy.";
        buyResultDiv.style.color = "red";
        return;
    }

    try {
        const priceResponse = await fetch(`/priceCheck/${buyName}`);
        const priceData = await priceResponse.json();

        if (priceData.price === null) {
            buyResultDiv.textContent = `Item "${buyName}" does not exist.`;
            buyResultDiv.style.color = "red";
            return;
        }

        if (money < priceData.price) {
            buyResultDiv.textContent = "You should get a job.";
            buyResultDiv.style.color = "red";
            return; 
        }

        const buyResponse = await fetch(`/buy/${buyName}`);
        
        if (!buyResponse.ok) {
            const errData = await buyResponse.json();
            throw new Error(errData.error);
        }

        const item = await buyResponse.json();

        money -= item.price;
        updateMoneyDisplay();

        buyResultDiv.textContent = `Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`;
        buyResultDiv.style.color = "green";

    } catch (error) {
        console.error('Error:', error);
        buyResultDiv.textContent = error.message || "Error communicating with the server.";
        buyResultDiv.style.color = "red";
    }
});

let lastChairPrice = Infinity;

setInterval(async () => {
    try {
        const response = await fetch('/priceCheck/chair');
        const data = await response.json();
        const currentPrice = data.price;

        if (currentPrice === null) return;

        if (lastChairPrice !== Infinity && currentPrice < lastChairPrice) {
            
            await fetch('/buy/chair');
            console.log("bought chair for less");
            
        } else {
            console.log("still waiting for a price drop...");
        }

        lastChairPrice = currentPrice;

    } catch (error) {
        console.error("Error in price check interval:", error);
    }
}, 3000);
