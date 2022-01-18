//numbers
numbers = [];
var opt = undefined;
var num1 = '';
var num2 = '';
var switchNum = true;
var answer = undefined;

//result
var result = document.querySelector("#result");
//filterNumAndOpt
function filterNumAndOpt() {
    numbers.forEach((num) => {
        if (num == '+' || num == '-' || num == '*' || num == '/') {
            opt = num;
            switchNum = false;

        } else {
            if (switchNum) {

                num1 += num;
            } else {
                num2 += num;
            }
        }
    });

}

function execute() {
    //if first num is minus
    if (numbers[0] == '-') {

        numbers.shift();
        console.log(numbers)

        filterNumAndOpt();

        switch (opt) {
            case '+':
                answer = -parseFloat(num1) + parseFloat(num2);
                break

            case '-':
                answer = -parseFloat(num1) - parseFloat(num2);
                break

            case '*':
                answer = -parseFloat(num1) * parseFloat(num2);
                break

            case '/':
                answer = -parseFloat(num1) / parseFloat(num2);
                break

            default:
                answer = "Please Fill Numbers";
        }
    }
    // fileter operator from array and assign numbers
    else {
        filterNumAndOpt();

        // execute
        switch (opt) {
            case '+':
                answer = parseFloat(num1) + parseFloat(num2);
                break

            case '-':
                answer = parseFloat(num1) - parseFloat(num2);
                break

            case '*':
                answer = parseFloat(num1) * parseFloat(num2);
                break

            case '/':
                answer = parseFloat(num1) / parseFloat(num2);
                break

            default:
                answer = "Please Fill Numbers";
        }
    }
    result.textContent = answer;
    numbers = [];
    answer += [];
    for (let i = 0; i < answer.length; i++) {
        numbers.push(answer[i]);
    }

    num1 = '', num2 = '', opt = undefined;
    switchNum = true;
    console.log(numbers);
}

function setNum(num) {
    result.textContent += num;
    numbers.push(num);
    console.log(numbers);
}

function clearData(y) {
    result.textContent = '';
    opt = undefined;
    num1 = '';
    num2 = '';
    switchNum = true;
    answer = 0;
    numbers = [];
    console.log(y);
}
document.addEventListener('keydown', (e) => {

    //console.log(e.key);
   // console.log(typeof (e.key));
    if (e.key == "Enter") {
        execute();
    } else if (e.key == 'c') {
        clearData();
    } else if (e.key == "Backspace") {
        numbers.pop();
        let nums = '';
        numbers.forEach(i => {
            nums += i;
        })
        //console.log(nums);
        result.textContent = nums;
        if (numbers.length < 1) result.textContent = '';
       // console.log(numbers);

    } else {
        let inputFilter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/']
        for (let i = 0; i < inputFilter.length; i++) {
            if (e.key == inputFilter[i]) setNum(e.key);
        }
       
    }


})