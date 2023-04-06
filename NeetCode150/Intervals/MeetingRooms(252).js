//Meeting Rooms (252)
//given an array of meeting time 'intervals' - where intervals[i] = [start, end]
//determine if a person could attend all meetings

//Approach:
//sorting the array based on the first element
//checking whether it is overlapping or not
//overlapping -> return false | non-overlapping -> return true
var meetingRooms = (intervals) => {
  //sort intervals based on the first element of arrar
  intervals.sort((a, b) => a[0] - b[0]);

  //indexes within the array
  const start = 0;
  const end = 1;

  for (let i = 0; i < intervals.length - 1; i++) { //intervals.length - 1: for comparing only before the last array
    if(intervals[i][end] > intervals[i + 1][start]) { //i is current value
      return false;
    }
  }
  return true;
}
meetingRooms([[0, 30], [5, 10], [15, 20]]); //false - [5, 10] and [15, 20] is overlapping with [0, 30]
//sorting: [0, 30], [5, 10], [15, 20]
//intervals[0][end]=30 > intervals[1][start]=5 -> false

meetingRooms([[7, 10], [2, 4]]); //true - not overlapping
//sorting: [2, 4], [7, 10]
//intervals[0][end]=4 < intervals[1][start]=7 -> true
