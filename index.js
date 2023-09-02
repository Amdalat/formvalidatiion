const btn = document.querySelector('button')

var nam;
var ema;
var pho;
var gen;
var dat;

const namregex = /^[-'\sa-zA-Z]+$/
const emaregex = /^[.@0-9a-zA-Z]+$/
const phoregex = /^[+0-9]+$/

function errmes(id, message){
    a = document.getElementById(id)
    a.innerHTML = '**' + message
}
function noerr(id){
    a = document.getElementById(id)
    a.innerHTML = ''
}

function namvalid() {
    nam = document.querySelector('#name').value
    if (nam == ''){
        errmes('namt', 'Name Field is Empty')
    }
    else if(namregex.test(nam) == false){
        errmes('namt', 'There is an invalid Character in Name Field')
    }
    else{
        noerr('namt')
        return true
    }    
}
function emavalid(){
    ema = document.querySelector('#email').value
    if (ema == ''){
        errmes('emat', 'Email Field is Empty')
    }
    else if(emaregex.test(ema) == false || !/[a-z]/.test(ema.charAt(0))){
        errmes('emat', 'Invalid Email')
    }
    else if(ema.includes('@') == false || ema.includes('.') == false || ema.indexOf('.')-ema.indexOf('@')<5){
        errmes('emat', 'Invalid Email')
    }
    else{
        noerr('emat')
        return true
    }
}
function phovalid(){
    pho = document.querySelector('#phone').value
    if (pho == ''){
        errmes('phot', 'Phone Field is Empty')
    }
    else if(phoregex.test(pho) == false){
        errmes('phot', 'Invalid Character in Phone Field')
    }
    else if(pho.charAt(0) == '+' || pho.charAt(0) == 0){
        if(pho.charAt(0) == '+' && pho.length != 14){
            errmes('phot', 'The length is over normal')
        }
        else if(pho.charAt(0) == '+' && pho.slice(0,4) != '+234' ){
            errmes('phot', 'Nigerians only')
        }
        else if(pho.charAt(0) == '0' && pho.length != 11){
            errmes('phot', 'The length is over normal')
        }
        else{
            noerr('phot')
            return true
        }
    }
    else{
        errmes('phot', 'Invalid Number')
    }    
}
function genvalid(){
    if(document.querySelector('input[name="gender"]:checked') == null){
        errmes('gent', 'Gender not selected')
    }
    else{
        gen = document.querySelector('input[name="gender"]:checked').value
        noerr('gent')
        return true
    }
}
function datvalid(){
    dat = document.getElementById('dob').value
    if(dat == ''){
        errmes('dobt', 'Date input is empty')
    }
    else if(dat.slice(0,4) > 2005 || dat.slice(0,4) < 1990){
        errmes('dobt', 'Year isn\'t within the allowed year range')
    }
    else{
        noerr('dobt')
        return true
    }
}

btn.addEventListener('click', function(){
    word = 'sdfghj@sdf.com'
    alert(word.indexOf('.')-word.indexOf('@'))
    var n =  namvalid()
    var e = emavalid()
    var p = phovalid()
    var g = genvalid()
    var d = datvalid()
    if( n && e && p && g && d){
        alert('yeha')
        console.log(window.nam)
        console.log(window.ema)
        console.log(window.pho)
        console.log(window.gen)
        console.log(window.dat)
        alert('Signup completed')
        document.getElementById('form').reset()
    }
})
