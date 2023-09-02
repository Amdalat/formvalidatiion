const btn = document.querySelector('button')

var nam;
var ema;
var pho;
var gen;
var dat;

const namregex = /^[-'\sa-zA-Z]+$/
const emaregex = /^[.@0-9a-zA-Z]+$/
const phoregex = /^[+0-9]+$/

function namvalid() {
    nam = document.querySelector('#name').value
    if (nam == ''){
        alert('Name Field is Empty')
    }
    else if(namregex.test(nam) == false){
        alert('There is an invalid Character in Name Field')
    }
    else{
        return true
    }    
}
function emavalid(){
    ema = document.querySelector('#email').value
    if (ema == ''){
        alert('Email Field is Empty')
    }
    else if(emaregex.test(ema) == false || ema.includes('@') == false || ema.includes('.') == false){
        alert('Invalid Email')
    }
    else{
        return true
    }
}
function phovalid(){
    pho = document.querySelector('#phone').value
    if (pho == ''){
        alert('Phone Field is Empty')
    }
    else if(phoregex.test(pho) == false){
        alert('Invalid Character in Phone Field')
    }
    else if(pho.charAt(0) == '+' || pho.charAt(0) == 0){
        if(pho.charAt(0) == '+' && pho.length != 14){
            alert('The length is over normal')
        }
        else if(pho.charAt(0) == '+' && pho.slice(0,4) != '+234' ){
            alert('Nigerians only')
        }
        else if(pho.charAt(0) == '0' && pho.length != 11){
            alert('The length is over normal')
        }
        else{
            return true
        }
    }
    else{
        alert('Invalid Number')
    }    
}
function genvalid(){
    if(document.querySelector('input[name="gender"]:checked') == null){
        alert('Gender not selected')
    }
    else{
        gen = document.querySelector('input[name="gender"]:checked').value
        return true
    }
}
function datvalid(){
    dat = document.getElementById('dob').value
    if(dat == ''){
        alert('Date input is empty')
    }
    else if(dat.slice(0,4) > 2005 || dat.slice(0,4) < 1990){
        alert('Year isn\'t within the allowed year range')
    }
    else{
        return true
    }
}

btn.addEventListener('click', function(){
    if(namvalid() == true && emavalid() == true && phovalid() == true && genvalid() == true && datvalid() == true){
        console.log(window.nam)
        console.log(window.ema)
        console.log(window.pho)
        console.log(window.gen)
        console.log(window.dat)
        alert('Signup completed')
        document.getElementById('form').reset()
    }
})
