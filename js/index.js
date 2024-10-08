// move to blog html function:

elementById("home").addEventListener('click',function(){
    window.location.href='./blog.html'
})


// create  getElementById function:

function elementById(id){
  return  document.getElementById(id);
}

// create  innertext function:

function innerText(id){
    return  parseFloat(document.getElementById(id).innerText);
}


// history:

const historyTab = elementById("history");
const donationTab = elementById("donation");

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
    document.getElementById("history-container").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
    document.getElementById("footer").classList.add("hidden");

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
    document.getElementById("card-container").classList.remove("hidden");
    document.getElementById("history-container").classList.add("hidden");

}
)
   

//    Common function to handle donations


function handleDonation(e) {
    const sourceName = e.querySelector('#source-name').innerText;
    const inputValueElement = e.querySelector('#input-value');
    const totalDonationElement = e.querySelector('#total-donation');
    
    const inputValue = parseFloat(inputValueElement.value);
    const totalDonation = parseFloat(totalDonationElement.innerText);
    const accountBalanceElement = elementById('account-balance');
    const accountBalance = parseFloat(accountBalanceElement ? accountBalanceElement.innerText : 0);

   
    if (inputValue <= 0 || isNaN(inputValue)||inputValue>accountBalance) {
inputValueElement.value = '';

        alert('Wrong input value');
        return;
        
    }
   
    const newTotal = totalDonation + inputValue;
    const newBalance = accountBalance - inputValue;
    
    totalDonationElement.innerText = newTotal.toFixed(2);
    if (accountBalanceElement) {
        accountBalanceElement.innerText = newBalance.toFixed(2);
    }

    inputValueElement.value = '';

    const historyItem = document.createElement('div');
    historyItem.className = "border rounded-xl p-8 mb-8";
    historyItem.innerHTML = `
        <p class="text-secondary text-base font-bold pb-4">${inputValue} Taka donated to ${sourceName}</p>
        <p class="text-xs text-gray-500">Date: ${new Date().toString()}</p>
    `;
    const historyContainer = elementById("history-container");
        historyContainer.appendChild(historyItem);
        
    my_modal_1.showModal()
}

document.addEventListener('click', function (event) {
    if ( event.target.id === 'donation-btn') {
        const parentSection = event.target.closest('section'); 
        handleDonation(parentSection);  
    }
});


