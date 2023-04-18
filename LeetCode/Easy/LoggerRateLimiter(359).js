//359. Logger Rate Limiter
//design a logger system that receives a stream of messages along with their timestamps
//each unique message should only be printed at most every 10 seconds 
//ex: a message printed at timestamp 't' will prevent other identical messages from being printed until the timestamp t + 10

//all messages will come in chronological order
//several messages may arrive at the same timestamp

//Logger class:
//Logger() - initializes the logger object
//bool message - returns true if the message should be printed in the given timestamp | otherwise returns false
var Logger = () => {
  this.map = new Map();
}

Logger.prototype.shouldPrintMessage = (timestamp, message) => {
  //if the message is in the map
  if (this.map.has(message)) {
    //need an additional check
    if(timestamp < this.map.get(message) + 10) {
      return false;
    }
  }
  //otherwise - need to add the message and timestamp value
  this.map.set(message, timestamp);

  return true;
}
