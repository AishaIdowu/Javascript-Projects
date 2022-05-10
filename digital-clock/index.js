printTime = function() {
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var ampm = hour >= 12 ? 'PM' : 'AM';
    var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    // (?-Ternary operator: it takes in 3 operands. Syntax: condition ? expressiftrue : expressiffalse)

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    // Using plural form for the id i.e '#days', '#hours' et.c does not make the code run properly even if 
    // you use the same id (plural form) in the html also.
    
    document.querySelector('#day').textContent = dayNames[dayNumber];
    document.querySelector('#hour').textContent = hour;
    document.querySelector('#minute').textContent = minute;
    document.querySelector('#ampm').textContent = ampm;

    setInterval(printTime,200);

}
window.addEventListener('load', printTime)
