lightGreenColor('btn-blog');
lightGrayColor('balance-text');
// offWhite('nav-bar');
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


const historyAdd = document.getElementById('history-list');

const notification1 = document.getElementById('notification-1').innerText;
const notification2 = document.getElementById('notification-2').innerText;
const notification3 = document.getElementById('notification-3').innerText;


// donate button 1
document.getElementById('btn-1').addEventListener('click',function(){
    const returnedValue = parseFloat(getInputValue('input-1'));
    let innerTextValueOfMyBalance =  parseFloat(document.getElementById('my-balance').innerText);
    if(returnedValue > 0 && innerTextValueOfMyBalance >= returnedValue){
        let innerTextValue =  parseFloat(document.getElementById('d-balance-1').innerText);

         // start creating ...
        const newElement = document.createElement('div');
        newElement.classList.add('p-8', 'border', 'border-gray-300', 'rounded-xl');
        
        const newText = document.createElement('h1');
        newText.classList.add('font-bold', 'text-xl');

        newText.innerText = returnedValue + ' Taka is Donated ' + notification1;

        newElement.appendChild(newText);

        const newParagraph = document.createElement('p');
        newParagraph.classList.add('text-gray-500');
        newParagraph.textContent = `Date : ${new Date().toString()}`;
        
        newElement.appendChild(newParagraph);

        historyAdd.insertBefore(newElement, historyAdd.firstChild);
        // end creating element

        innerTextValue += returnedValue;
        document.getElementById('d-balance-1').innerText = innerTextValue;

        innerTextValueOfMyBalance -= parseFloat(returnedValue);
        document.getElementById('my-balance').innerText = innerTextValueOfMyBalance;

        let getModal = document.getElementById('modal-container');
        getModal.classList.remove('hidden');

        document.getElementById('input-1').value = '';



    }
    else{
        alert('Invalid Donation Amount');
    }
})

// donate button 2
document.getElementById('btn-2').addEventListener('click',function(){
    const returnedValue = parseFloat(getInputValue('input-2'));
    let innerTextValueOfMyBalance =  parseFloat(document.getElementById('my-balance').innerText);
    if(returnedValue > 0 && innerTextValueOfMyBalance >= returnedValue){
        let innerTextValue =  parseFloat(document.getElementById('d-balance-2').innerText);

        // .....
        const newElement = document.createElement('div');
        newElement.classList.add('p-8', 'border', 'border-gray-300', 'rounded-xl');
        
        const newText = document.createElement('h1');
        newText.classList.add('font-bold', 'text-xl');

        newText.innerText = returnedValue + ' Taka is Donated ' + notification2;

        newElement.appendChild(newText);

        const newParagraph = document.createElement('p');
        newParagraph.classList.add('text-gray-500');
        newParagraph.textContent = `Date : ${new Date().toString()}`;
        
        newElement.appendChild(newParagraph);

        historyAdd.insertBefore(newElement, historyAdd.firstChild);
        // ....


        innerTextValue += returnedValue;
        document.getElementById('d-balance-2').innerText = innerTextValue;
        
        innerTextValueOfMyBalance -= parseFloat(returnedValue);
        document.getElementById('my-balance').innerText = innerTextValueOfMyBalance;

        let getModal = document.getElementById('modal-container');
        getModal.classList.remove('hidden');
        document.getElementById('input-2').value = '';
    }
    else{
        alert('Invalid Donation Amount');
    }
})

// donate button 3
document.getElementById('btn-3').addEventListener('click',function(){
    const returnedValue = parseFloat(getInputValue('input-3'));
    let innerTextValueOfMyBalance =  parseFloat(document.getElementById('my-balance').innerText);
    if(returnedValue > 0 && innerTextValueOfMyBalance >= returnedValue){
        let innerTextValue =  parseFloat(document.getElementById('d-balance-3').innerText);

        // .....
        const newElement = document.createElement('div');
        newElement.classList.add('p-8', 'border', 'border-gray-300', 'rounded-xl');
        
        const newText = document.createElement('h1');
        newText.classList.add('font-bold', 'text-xl');

        newText.innerText = returnedValue + ' Taka is Donated ' + notification3;

        newElement.appendChild(newText);

        const newParagraph = document.createElement('p');
        newParagraph.classList.add('text-gray-500');
        newParagraph.textContent = `Date : ${new Date().toString()}`;
        
        newElement.appendChild(newParagraph);

        historyAdd.insertBefore(newElement, historyAdd.firstChild);
        // ....
        innerTextValue += returnedValue;
        document.getElementById('d-balance-3').innerText = innerTextValue;
        
        innerTextValueOfMyBalance -= parseFloat(returnedValue);
        document.getElementById('my-balance').innerText = innerTextValueOfMyBalance;

        let getModal = document.getElementById('modal-container');
        getModal.classList.remove('hidden');

        document.getElementById('input-3').value = '';
    }
    else{
        alert('Invalid Donation Amount');
    }
})


document.getElementById('close-modal').addEventListener('click',function(){
    let getModal = document.getElementById('modal-container');
        getModal.classList.add('hidden');
})

const buttonColorChange = document.getElementById('main-btn-2');
const buttonColorChange2 = document.getElementById('main-btn-1');

document.getElementById('main-btn-2').addEventListener('click', function(){
        document.getElementById('main-container').classList.add('hidden');
        document.getElementById('history-list').classList.remove('hidden');
        
        buttonColorChange.style.backgroundColor= '#B4F461';
        
        buttonColorChange2.style.backgroundColor = '';
})

document.getElementById('main-btn-1').addEventListener('click', function(){
        document.getElementById('main-container').classList.remove('hidden');
        document.getElementById('history-list').classList.add('hidden');
        
        buttonColorChange.style.backgroundColor= '';
        
        buttonColorChange2.style.backgroundColor = '#B4F461';
})


