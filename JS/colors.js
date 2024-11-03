
function lightGreenColor(colorID){
    document.getElementById(colorID).style.backgroundColor = '#B4F461';
}

function lightGrayColor(graycolorID){
    document.getElementById(graycolorID).style.color = 'rgba(17, 17, 17, 0.7)';
}

// color with properties

function lightGrayColor10(graycolorID10){
    const item =  document.getElementById(graycolorID10);
    
    item.style.border = 'solid 2px rgba(17, 17, 17, 0.1) '
    item.style.padding = '32px'
    item.style.borderRadius = '16px'
}

function offWhite(offColor){
    document.getElementById(offColor).style.backgroundColor = '#F9F7F3';
}

// input functions

function inputFieldEdit(inputID){
    const inputIdCOns = document.getElementById(inputID);
    inputIdCOns.style.borderRadius = '8px';
    inputIdCOns.style.height = '57px'
}

// button editing

function btnStyle(btnID){
    const selectBtn = document.getElementById(btnID);
    selectBtn.style.borderRadius = '8px'
    selectBtn.style.height = '57px'
    selectBtn.style.fontSize = '20px'
    selectBtn.style.fontWeight = 'bold'
}

//  two pair button style 

function mainBtnStyle(mainBtn){
    const mainBtnConst = document.getElementById(mainBtn);
    mainBtnConst.style.width = '157px';
    mainBtnConst.style.height = '57px';
    mainBtnConst.style.borderRadius = '8px';
    mainBtnConst.style.border = 'solid 2px rgba(17, 17, 17, 0.3)';
    mainBtnConst.style.fontWeight = 'bold';
}

// history button default color 
document.getElementById('main-btn-2').style.color ='rgba(17, 17, 17, 0.7)';

function getInputValue(inputIdVar){
    return document.getElementById(inputIdVar).value;
}