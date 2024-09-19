//1854. Maximum Population Year
//given a 2D array logs where each logs[i] = [birth_i, death_i] indicates the birth and death years of the i_th person
//the population of some year x is the number of people alive during that year
//the i_th person is counted in year x's population if x is in the inclusive range [birth_i, death_i - 1]
//the person is not counted in the year that they die
//return the earliest year with the max population

//Approach:
//using intervals with sorting
var maxPopulationYesr = (logs) => {
    //sorting
    logs.sort((a, b) => a[0] - b[0]);

    let population = Infinity;
    let max = -Infinity;
    let set = new Set(); //to collect birth years

    for (let log of logs) {
        let [birth, death] = log;

        if (!set.has(birth)) set.add(birth);
    }

    //checking intervals
    for (let curr of [...set]) { //traversing on birth year
        let count = 0;

        for (let log of logs) { //with given 2D array
            let [birth, death] = log;

            //population year
            if (curr >= birth && curr < death) count++;
        };
        
        //updating
        if (max < count) {
            max = count;

            population = curr;
        }
    }

    return population;
}
maxPopulationYesr([[1993,1999],[2000,2010]]); //1993 - The maximum population is 1, and 1993 is the earliest year with this population
//max = -Infinity
//population = Infinity
//sorting: [[1993,1999],[2000,2010]]
//set: {1993, 2000}

//curr = 1993
//set: {1993, 2000} || [[1993, 1999], [2000, 2010]]
//      curr                 log
//curr = 1993
//1993 >= 1993 & 1993 < 1999 -> True
//count = 0 -> 1

//set: {1993, 2000} || [[1993, 1999], [2000, 2010]]
//      curr                              log
//curr = 1993
//1993 >= 2000 & 1993 < 2010 -> False
//count = 0 -> 1 -> 1

//max = -Infinity -> 1
//population = Infinity -> 1993

//curr = 2000
//set: {1993, 2000} || [[1993, 1999], [2000, 2010]]
//      curr                 log
//curr = 2000
//2000 >= 1993 & 2000 < 1999 -> False
//count = 0 -> 0

//set: {1993, 2000} || [[1993, 1999], [2000, 2010]]
//      curr                               log
//curr = 2000
//2000 >= 2000 & 2000 < 2010 -> True
//count = 0 -> 0 -> 1

//count = max -> no updates
//max = -Infinity -> 1
//population = Infinity -> 1993

maxPopulationYesr([[1950,1961],[1960,1971],[1970,1981]]); //1960 - The maximum population is 2, and it had happened in years 1960 and 1970
//max = -Infinity
//population = Infinity
//sorting: [1950, 1961], [1960, 1971], [1970, 1981]
//set: {1950, 1960, 1970}

//curr = 1950
//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//      curr                      log
//curr = 1950
//1950 >= 1950 & 1950 < 1961 -> True
//count = 0 -> 1

//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//      curr                                    log
//curr = 1950
//1950 >= 1960 & 1950 < 1971 -> False
//count = 0 -> 1 -> 1

//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//      curr                                                 log
//curr = 1950
//1950 >= 1970 & 1950 < 1981 -> False
//count = 0 -> 1 -> 1 -> 1

//max = -Infinity -> 1
//population = Infinity -> 1950

//curr = 1960
//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//            curr                log
//curr = 1960
//1960 >= 1950 & 1960 < 1961 -> True
//count = 0 -> 1

//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//            curr                              log
//curr = 1960
//1960 >= 1960 & 1960 < 1971 -> True
//count = 0 -> 1 -> 2

//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//            curr                                            log
//curr = 1960
//1960 >= 1970 & 1960 < 1981 -> False
//count = 0 -> 1 -> 2

//max = -Infinity -> 1 -> 2
//population = Infinity -> 1950 -> 1960

//curr = 1970
//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//                  curr         log
//curr = 1970
//1970 >= 1950 & 1970 < 1961 -> False
//count = 0 -> 0

//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//                  curr                        log
//curr = 1970
//1970 >= 1960 & 1970 < 1971 -> True
//count = 0 -> 0 -> 1

//set: {1950, 1960, 1970} || [1950, 1961], [1960, 1971], [1970, 1981]
//                  curr                                     log
//curr = 1970
//1970 >= 1970 & 1970 < 1981 -> True
//count = 0 -> 0 -> 1 -> 2

//count = max -> no updates
//max = -Infinity -> 1 -> 2
//population = Infinity -> 1950 -> 1960
