//Meeting Rooms (252)
//given an array of meeting time 'intervals' - where intervals[i] = [start, end] determine if a person could attend all meetings
var meetingRooms = (intervals) => {
  //sort intervals based on the first element of arrar
  intervals.sort((a,b) => a[0] - b[0]);

  //indexes within the array
  const start = 0;
  const end = 1;

  for (let i = 0; i < intervals.length - 1; i++) { //intervals.length - 1: for comparing only two values
    if(intervals[i][end] > intervals[i + 1][start]) { //i is current value
      return false;
    }
  }
  return true;
}
meetingRooms([[0, 30], [5, 10], [15, 20]]); //false - [5, 10] and [15, 20] is overlapping with [0, 30]

meetingRooms([[7, 10], [2, 4]]); //true - not overlapping
