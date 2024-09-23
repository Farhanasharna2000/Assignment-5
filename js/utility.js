document.getElementById("home").addEventListener('click',function(){
    window.location.href='/blog.html'
})
const historyTab = document.getElementById("history");
const donationTab = document.getElementById("donation");

historyTab.addEventListener('click',function(){
    historyTab.classList.add(
        "bg-primary",
       "text-secondary"
    );
    historyTab.classList.remove("bg-white","text-secondary2");
    donationTab.classList.remove(
        "bg-primary",
       "text-secondary"
    );
    donationTab.classList.add("bg-white","text-secondary2");
}
)

donationTab.addEventListener('click',function(){
    donationTab.classList.add(
        "bg-primary",
       "text-secondary"
    );
    donationTab.classList.remove("bg-white","text-secondary2");
    historyTab.classList.remove(
        "bg-primary",
       "text-secondary"
    );
    historyTab.classList.add("bg-white","text-secondary2");
}
)

// card-1

const donationBtn = document.getElementById('donation-btn').addEventListener('click',function () {
    const accountBalance = parseFloat(document.getElementById('account-balance').innerText);
    const totalDonation = parseFloat(document.getElementById('total-donation').innerText);

    const inputValue = parseFloat (document.getElementById('input-value').value);
    if (inputValue<=0 || isNaN(inputValue)) {
        document.getElementById("my_modal_5").classList.add('hidden');
       return alert('wrong input value');

    }

     document.getElementById('close').addEventListener('click',function (){

        document.getElementById('input-value').value = ""; 
    })
   
    const total = totalDonation + inputValue;
    const balance = accountBalance - inputValue;
    const totalAmount = document.getElementById('total-donation')
    totalAmount.innerText = total.toFixed(2);
    const remainingBalance = document.getElementById('account-balance')
    remainingBalance.innerText = balance.toFixed(2);

 

})

   // card-2

  