function validate() {
    const num1 = document.getElementsByName("first")[0].value;
    const num2 = document.getElementsByName("second")[0].value;
    const num3 = document.getElementsByName("third")[0].value;
    const num4 = document.getElementsByName("fourth")[0].value;
    const num5 = document.getElementsByName("fifth")[0].value;
    const mega = document.getElementsByName("mega")[0].value;
    if (!(num1 - Math.floor(num1) > 0.000001 || num2 - Math.floor(num2) > 0.000001 || num3 - Math.floor(num3) > 0.000001 || num4 - Math.floor(num4) > 0.000001 || num5 - Math.floor(num5) > 0.000001)) {
        if ((num1 > 70 || num1 < 1) || (num2 > 70 || num2 < 1) || (num3 > 70 || num3 < 1) || (num4 > 70 || num4 < 1) || (num5 > 70 || num5 < 1) || (mega > 25 || mega < 1)) {
            alert("Sorry, one or more of your numbers is out of range");
            return false; 
        } else {
            alert("correct"); 
            return true; 
        }
    } else {
        alert("Sorry, you must enter a whole number"); 
        return false; 
    }
}