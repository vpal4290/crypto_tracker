export const convertDate = (number) => {
    var myDate = new Date(number);  // get exact date from miliseconds

    return myDate.getDate() + "/" + (myDate.getMonth() + 1);
    // returns only Date/Month  
}