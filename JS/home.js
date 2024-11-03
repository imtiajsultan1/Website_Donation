lightGreenColor('btn-blog');
lightGrayColor('balance-text');
offWhite('nav-bar');
lightGrayColor10('container-1');
lightGrayColor10('container-2');
lightGrayColor10('container-3');

lightGrayColor('p-text-1');
lightGrayColor('p-text-2');
lightGrayColor('p-text-3');


inputFieldEdit('input-1');
inputFieldEdit('input-2');
inputFieldEdit('input-3');

btnStyle('btn-1');
btnStyle('btn-2');
btnStyle('btn-3');

lightGreenColor('btn-1');
lightGreenColor('btn-2');
lightGreenColor('btn-3');

lightGreenColor('main-btn-1');



mainBtnStyle('main-btn-2');
mainBtnStyle('main-btn-1');

offWhite('footerID');


document.getElementById('btn-1').addEventListener('click',function(){
    const returnedValue = parseFloat(getInputValue('input-1'));
    let innerTextValueOfMyBalance =  parseFloat(document.getElementById('my-balance').innerText);
    if(returnedValue > 0 && innerTextValueOfMyBalance >= returnedValue){
        let innerTextValue =  parseFloat(document.getElementById('d-balance-1').innerText);
        innerTextValue += returnedValue;
        document.getElementById('d-balance-1').innerText = innerTextValue;
        
        innerTextValueOfMyBalance -= parseFloat(returnedValue);
        document.getElementById('my-balance').innerText = innerTextValueOfMyBalance;

        let getModal = document.getElementById('modal-container');
        getModal.classList.remove('hidden');

    }
    else{
        alert('Invalid Donation Amount');
    }
})

document.getElementById('btn-2').addEventListener('click',function(){
    const returnedValue = parseFloat(getInputValue('input-2'));
    let innerTextValueOfMyBalance =  parseFloat(document.getElementById('my-balance').innerText);
    if(returnedValue > 0 && innerTextValueOfMyBalance >= returnedValue){
        let innerTextValue =  parseFloat(document.getElementById('d-balance-2').innerText);
        innerTextValue += returnedValue;
        document.getElementById('d-balance-2').innerText = innerTextValue;
        
        innerTextValueOfMyBalance -= parseFloat(returnedValue);
        document.getElementById('my-balance').innerText = innerTextValueOfMyBalance;

        let getModal = document.getElementById('modal-container');
        getModal.classList.remove('hidden');
    }
    else{
        alert('Invalid Donation Amount');
    }
})

document.getElementById('btn-3').addEventListener('click',function(){
    const returnedValue = parseFloat(getInputValue('input-3'));
    let innerTextValueOfMyBalance =  parseFloat(document.getElementById('my-balance').innerText);
    if(returnedValue > 0 && innerTextValueOfMyBalance >= returnedValue){
        let innerTextValue =  parseFloat(document.getElementById('d-balance-3').innerText);
        innerTextValue += returnedValue;
        document.getElementById('d-balance-3').innerText = innerTextValue;
        
        innerTextValueOfMyBalance -= parseFloat(returnedValue);
        document.getElementById('my-balance').innerText = innerTextValueOfMyBalance;

        let getModal = document.getElementById('modal-container');
        getModal.classList.remove('hidden');
    }
    else{
        alert('Invalid Donation Amount');
    }
})


document.getElementById('close-modal').addEventListener('click',function(){
    let getModal = document.getElementById('modal-container');
        getModal.classList.add('hidden');
})