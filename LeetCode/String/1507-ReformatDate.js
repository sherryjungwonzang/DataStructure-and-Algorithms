//1507. Reformat Date
//given a date string in the form Day Month Year, where:
//day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}
//month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}
//year is in the range [1900, 2100]

//convert the date string to the format YYYY-MM-DD, where:
//YYYY denotes the 4 digit year
//MM denotes the 2 digit month
//DD denotes the 2 digit day
var reformatDate = (date) => {
    let months= {
        Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
        Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
    let [day, month, year] = date.split(" ");
    
    return year + "-" + months[month] + "-" + (parseInt(day) < 10 ? "0" + parseInt(day) : parseInt(day));
}
reformatDate(date = "20th Oct 2052"); //"2052-10-20"
//-> [20th, Oct, 2052]
//                 ^ 
//"2052 + "-" "

//[20th, Oct, 2052]
//        ^ 
//"2052 + "-" + "10"  "

//[20th, Oct, 2052]
//  ^                   -> 20 > 10: "20" 
//"2052 + "-" + "10" + "20""

//"2052-10-20"

reformatDate(date = "6th Jun 1933"); //"1933-06-06"
//-> [6th, Jun, 1933]
//                ^ 
//"1933 + "-" "

//[6th, Jun, 1933]
//        ^ 
//"1933 + "-" + "06"  "

//[6th, Jun, 1933]
//  ^                   -> 6 < 10: "0" + "6" 
//"1933 + "-" + "06" + "06""

//"1933-06-06"

reformatDate(date = "26th May 1960"); //"1960-05-26"
