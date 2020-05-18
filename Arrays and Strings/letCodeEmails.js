

function ValidateEmail(mail) {
    let emails = [];
    for (let i in mail) {
        const search = mail[i].indexOf('@');
        if (search > -1) {
            const firstPart = mail[i].slice(0, search);
            const secondPart = mail[i].substr(search + 1)
            const vfirstPart = validateFirst(firstPart)
            const vsecondPart = validSecond(secondPart)
            vsecondPart && vfirstPart ? emails.push(vfirstPart + '@' + secondPart) : ''
            emails.length ? emails = emails.filter((el, index) => emails.indexOf(el) === index) : ''
        }
    }
    return emails.length;
}

function validSecond(str) {
    return /\S+\.\S+/.test(str);
}

function validateFirst(str) {
    if (str.length > 0) {
        const search = str.indexOf('+');
        if (search <= -1) {
            return replaceDots(str);
        }
        const secondPart = str.slice(0, search)
        return validateFirst(secondPart);
    }
    return false;
}

function replaceDots(str) {
    return str.search(/\./) > 0 ? replaceDots(str.replace('.', '')) : str;
}


console.log(ValidateEmail(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]));
