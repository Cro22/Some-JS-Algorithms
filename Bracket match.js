function bracket_match(bracket_string) {
    let count = 0
    for (let i in bracket_string)
        if (bracket_string[i] == "(" && bracket_string[i + 1] !== ")") {
            count += 1
        } else if (bracket_string[i] == ")" && bracket_string[i + 1] == "(") {
            count -= 1
        } else if (bracket_string[i] == "(" && bracket_string[i + 1] == ")") {
            count += 1
        }
    return count
}

console.log(bracket_match("())"))