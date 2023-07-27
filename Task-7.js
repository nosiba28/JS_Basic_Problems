function convertToNumber(roman) {
    let answer = 0;
    for (let i = 0; i < roman.length; i++) {
        if (roman[i] == 'I' && roman[i + 1] == 'X') {
            answer--;
        } else if (roman[i] == 'I' && roman[i + 1] == 'V') {
            answer--;
        }
        else if (roman[i] == 'I' && roman[i + 1] == 'L') {
            answer--;
        }
        else if (roman[i] == 'I' && roman[i + 1] == 'C') {
            answer--;
        }
        else if (roman[i] == 'I' && roman[i + 1] == 'D') {
            answer--;
        }
        else if (roman[i] == 'I' && roman[i + 1] == 'M') {
            answer--;
        }
        else if (roman[i] == 'I') {
            answer++
        } else if (roman[i] == 'V') {
            answer += 5

        } else if (roman[i] == 'X') {
            answer += 10
        }
        else if (roman[i] == 'L') {
            answer += 50;
        }
        else if (roman[i] == 'C') {
            answer += 100;
        }
        else if (roman[i] == 'D') {
            answer += 500;
        }
        else if (roman[i] == 'M') {
            answer += 1000;
        }

    }
    return answer
}

let romanValue = "XXI"
let answer = convertToNumber(romanValue)
console.log(answer)
