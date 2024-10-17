//2383. Minimum Hours Of Traininig To Win A Competition
//you are entering a competition, and are given two positive integers initialEnergy and initialExperience denoting your initial energy and initial experience respectively
//you are also given two 0-indexed integer arrays energy and experience, both of length n
//you will face n opponents in order. The energy and experience of the ith opponent is denoted by energy[i] and experience[i] respectively. When you face an opponent, you need to have both strictly greater experience and energy to defeat them and move to the next opponent if available.
//defeating the ith opponent increases your experience by experience[i], but decreases your energy by energy[i]
//before starting the competition, you can train for some number of hours
//after each hour of training, you can either choose to increase your initial experience by one, or increase your initial energy by one
//return the minimum number of training hours required to defeat all n opponents

//Approach:
//using Greedy algorithm
var minHoursTraining = (initialEnergy, initialExperience, energy, experience) => {
    let hours = 0;

    for (let i = 0; i < energy.length; i++) {
        //non defeating - energy
        while (initialEnergy <= energy[i]) {
            initialEnergy++;
            hours++;
        }

        //non defeating - experience
        while (initialExperience <= experience[i]) {
            initialExperience++;
            hours++;
        }

        //defeating cases
        initialEnergy -= energy[i]; //deducting the energy
    
        initialExperience += experience[i]; //gaining experience
    }

    return hours;
}
//TC: O(n)
//SC: O(1)
minHoursTraining(initialEnergy = 5, initialExperience = 3, energy = [1,4,3,2], experience = [2,6,3,1]); //8
//energy = [1, 4, 3, 2] || experience = [2, 6, 3, 1]
//          ^                            ^
//5 <= 1: not defeating
//3 <= 2: not defeating
//intialEnergy = 5 -> 4
//initialExperience = 3 -> 5
//hours = 0 -> 0

//energy = [1, 4, 3, 2] || experience = [2, 6, 3, 1]
//             ^                            ^
//4 <= 4: defeating
//5 <= 6: defeating || 6 <= 6: defeating
//intialEnergy = 5 -> (-1) 4 -> 5 -> (-4) 1  
//initialExperience = 3 -> (+2) 5 -> 6 -> 7 -> (+6) 13
//hours = 0 -> 0 -> 1 -> 2 -> 3

//energy = [1, 4, 3, 2] || experience = [2, 6, 3, 1]
//                ^                            ^
//1 <= 3: defeating || 2 <= 3: defeating || 3 <= 3: defeating
//13 <= 3: not defeating
//intialEnergy = 5 -> (-1) 4 -> 5 -> (-4) 1 -> 2 -> 3 -> 4 -> (-3) 1 
//initialExperience = 3 -> (+2) 5 -> 6 -> 7 -> (+6) 13 -> (+3) 16
//hours = 0 -> 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6

//energy = [1, 4, 3, 2] || experience = [2, 6, 3, 1]
//                   ^                            ^
//1 <= 2: defeating || 2 <= 2: defeating
//16 <= 1: not defeating
//intialEnergy = 5 -> (-1) 4 -> 5 -> (-4) 1 -> 2 -> 3 -> 4 -> (-3) 1 -> 2 -> 3
//initialExperience = 3 -> (+2) 5 -> 6 -> 7 -> (+6) 13 -> (+3) 16 -> (+1) 17
//hours = 0 -> 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8

minHoursTraining(initialEnergy = 2, initialExperience = 4, energy = [1], experience = [3]); //0
