const ringButtons = document.querySelectorAll('.ring-button');
for(let i=0;i<ringButtons.length;i++){
    const ringBtn = ringButtons[i];
    ringBtn.addEventListener("click",function (event){
        event.target.classList.add('border-purple-600');
        
    })

}