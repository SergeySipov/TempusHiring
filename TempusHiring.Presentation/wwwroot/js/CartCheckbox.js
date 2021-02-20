﻿document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.checkboxInput')
            .forEach(elem => elem.addEventListener("click", OnChangeCheckbox));
});

const OnChangeCheckbox = async function(e) {
    e.target.checked = !!e.target.checked;

    await $.post("/ShoppingCart/ChangeSelection",
        {
            watchId: e.target.value,
            isChecked: e.target.checked
        });

    let promise = await $.get("/ShoppingCart/GetOrderSummary", (data) => {
        return data;
    });
    
    document.querySelector(".order__span__subtotal").innerHTML = `$${(+promise.subTotal).toFixed(2).toString().replace(".", ",")}`;
    document.querySelector(".order__span__shipping").innerHTML = `$${(+promise.shipping).toFixed(2).toString().replace(".", ",")}`;
    document.querySelector(".order__span__count").innerHTML = promise.count;
    document.querySelector(".order__span__total").innerHTML = `$${(+promise.total).toFixed(2).toString().replace(".", ",")}`;
}