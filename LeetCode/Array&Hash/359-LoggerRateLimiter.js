//359. Logger Rate Limiter
//design a logger system that receives a stream of messages along with their timestamps
//each unique message should only be printed at most every 10 seconds 
//ex: a message printed at timestamp 't' will prevent other identical messages from being printed until the timestamp t + 10

//all messages will come in chronological order
//several messages may arrive at the same timestamp

//Logger class:
//Logger() - initializes the logger object
//bool message - returns true if the message should be printed in the given timestamp | otherwise returns false

//Approach:
//using map{} - to track both the timestamp and the message for mapping together
var Logger = () => {
    this.map = new Map();
}

Logger.prototype.shouldPrintMessage = (timestamp, message) => {
    if (this.map.has(message)) {
        if (timestamp < this.map.get(message) + 10) {
            return false;
        }
    }
    this.map.set(message, timestamp);

    return true;
}
["Logger", "shouldPrintMessage",  "shouldPrintMessage",  "shouldPrintMessage",  "shouldPrintMessage",  "shouldPrintMessage",  "shouldPrintMessage"]
[ [], [1, "foo"], [2, "bar"], [3, "foo"], [8, "bar"], [10, "foo"], [11, "foo"] ]
//[null, true, true, false, false, false, true]
//if the timestamp is between three and one or ten greater - true
