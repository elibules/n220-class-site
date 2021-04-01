var bill = document.getElementById("bill")

function calculator() {
    let beforeTip = Number(bill.value);

    let tip = beforeTip * .2;

    let finalBill = tip + beforeTip;

    console.log("Tip: $" + tip + " " + "Total: $" + finalBill);
}