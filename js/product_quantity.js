let qty = document.querySelector("#quantity_number").textContent;

document.querySelector("#button_minus").addEventListener("click", function() {
    let qty = document.querySelector("#quantity_number").textContent;
    if (qty > 1) {
        qty--;
    document.querySelector("#quantity_number").textContent = qty;
    }
}
);

document.querySelector("#button_plus").addEventListener("click", function() {
    let qty = document.querySelector("#quantity_number").textContent;
    qty++;
    document.querySelector("#quantity_number").textContent = qty;
}
);