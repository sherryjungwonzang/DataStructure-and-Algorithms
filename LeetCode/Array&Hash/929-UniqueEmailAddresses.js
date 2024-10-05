//929. Unique Email Addresses
//every valid email consists of a local name and a domain name, separated by the '@' sign
//besides lowercase letters, the email may contain one or more '.' or '+'

//for example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name
//if you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name
//Note that this rule does not apply to domain names

//for example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address
//if you add a plus '+' in the local name, everything after the first plus sign will be ignored
//this allows certain emails to be filtered
//Note that this rule does not apply to domain names

//for example, "m.y+name@email.com" will be forwarded to "my@email.com"
//it is possible to use both of these rules at the same time

//given an array of strings emails where we send one email to each emails[i]
//return the number of different addresses that actually receive mails

//Approach:
//using hash Set and regex
var uniqueEmailAddresses = (emails) => {
    let set = new Set();

    for (let email of emails) {
        //splitting local and domain
        let [local, domain] = email.split('@');

        //removing dots
        local = local.replace(/\./g, '');

        let plusIndex = local.indexOf('+');

        //removing everything after +
        if (plusIndex !== -1) local = local.substring(0, plusIndex);

        //adding modified email to set
        set.add(local + '@' + domain);
    };

    return set.size; //num of unique email address
}
uniqueEmailAddresses(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]); //2 - "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
//["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]
//                ^

//" test.email+alex @ leetcode.com" -> local: test.email+alex
//       local             domain      domain: leetcode.com
//local: test.email+alex -> removing dots: testemail+alex
//                                                  ^       plusIndex = 9
//substring(0, 9) = testemail
//set = { testemail@leetcode.com, }

//" test.e.mail+bob.cathy @ leetcode.com" -> local: test.e.mail+bob.cathy
//       local                   domain      domain: leetcode.com
//local: test.e.mail+bob.cathy -> removing dots: testemail+bobcathy
//                                                        ^       plusIndex = 9
//substring(0, 9) = testemail
//set = { testemail@leetcode.com, } -> same thing already in set

//" testemail+david @ lee.tcode.com "-> local: testemail+david
//       local           domain         domain: lee.tcode.com
//local: testemail+david -> removing dots: testemail+david
//                                                  ^           plusIndex = 9
//substring(0, 9) = testemail
//set = { testemail@leetcode.com, testemail@lee.tcode.com }
//set size = 2

uniqueEmailAddresses(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]); //3
//["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]
//        ^

//" a @ leetcode.com " -> local: a
//                        domain: leetcode.com
//local = a -> no dots & no plusIndex
//set = { a@leetcode.com, } 

//" b @ leetcode.com " -> local: b
//                        domain: leetcode.com
//local = b -> no dots & no plusIndex
//set = { a@leetcode.com, b@leetcode.com, } 

//" c @ leetcode.com " -> local: c
//                        domain: leetcode.com
//local = c -> no dots & no plusIndex
//set = { a@leetcode.com, b@leetcode.com, c@leetcode.com } 
