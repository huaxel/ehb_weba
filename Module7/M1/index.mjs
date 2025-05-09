const calculateButton = document.getElementById("calculateButton");
const products = [
    { id: 1, name: "T-shirt", price: 15, quantity: 2 },
    { id: 2, name: "Jeans", price: 45, quantity: 1 },
    { id: 3, name: "Sokken", price: 5, quantity: 3 },
];

const calculateTotal = (items) => {
    let total = 0;

    for (const item of items) {
            total += item.price * item.quantity;
            //debugger; // Dit is een breakpoint
        

        console.log(
            `Product:' ${item.name}, 'Prijs:' ${item.price}, 'Aantal:' ${item.quantity}`
        );
    }
    return total;
};

calculateButton.addEventListener("click", () => {
    console.log("Producten:", products);
    const totalPrice = calculateTotal(products);
    console.log("Bereken de totale prijs:", totalPrice);
    document.getElementById("total").textContent = totalPrice;
});
