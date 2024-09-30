function add(n1: number, n2: number, showResult: boolean ,Phrase: string) {
    const result = n1 + n2
    if(showResult) {
        console.log(Phrase + result);
    }else{
        return n1 + n2
    }
}

let number1 = 5;
number1 = 'Hello';
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result'

add(number1, number2,printResult, resultPhrase)