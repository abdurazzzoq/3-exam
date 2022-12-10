

// 1 function
function checkPalindrome(str) {  
    const len = str.length;  
  
    for (let i = 0; i < len / 2; i++) {  
        if (str[i] !== str[len - 1 - i]) {  
          alert( 'It is not palindrome'); 
          return;
        }  
    }  
    alert( 'It is a palindrome');  
}  
  
const string = prompt('Enter a string or number to check for Palindrome: ');  
  
const value = checkPalindrome(string);  

console.log(value);



//2 function
function leapYear(year){
    var result; 
    year = parseInt(document.getElementById("isYear").value);
    if (years/4){
      result = true
    }
   
    else if(years/400){
      result= false
    }
    else{
      result= false
    }
    return result
 }






