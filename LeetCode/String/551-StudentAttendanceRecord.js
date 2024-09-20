//551. Student Attendance Record 
//given a string s representing an attendance record for a student
//where each character signifies whether the student was absent, late, or present on that day
//the record only contains the following three characters:
//'A': absent
//'L': late
//'P': present

//the student is eligible for an attendance award if they meet both of the following criteria:
//the student was absent 'A' for strictly fewer than 2 days total
//the student was never late 'L' for 2 or more consecutive days

//return true if the student is eligible for an attendance award, or false otherwise
var studentAttendanceRecord = (s) => {
    //base case
    if (s.includes('LLL')) return false;

    let absent = 0;

    //counting absent
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") absent++;
    }

    return absentCount < 2;
}
studentAttendanceRecord("PPALLP"); //true
//"P P A L L P"
// ^ ^ ^
//absent = 0 -> 1
//L has only two

studentAttendanceRecord("PPALLL"); //false
//"P P A L L L"
// ^ ^ ^
//absent = 0 -> 1
//L has only three -> false
