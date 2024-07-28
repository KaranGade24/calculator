const btn = document.querySelector(".all-btn");
const input = document.querySelector(".input-box");

// all flags
let signFlag = 0;
let noFlag = 0,
  dotFlag = 0,
  result = 0,
  temp;

//All click events

// (1) click event for number
btn.addEventListener("click", (e) => {
  a = e.target.innerHTML;

  if (a == "0") {
    numbers(a);
  } else if (a == "1") {
    numbers(a);
  } else if (a == "2") {
    numbers(a);
  } else if (a == "3") {
    numbers(a);
  } else if (a == "4") {
    numbers(a);
  } else if (a == "5") {
    numbers(a);
  } else if (a == "6") {
    numbers(a);
  } else if (a == "7") {
    numbers(a);
  } else if (a == "8") {
    numbers(a);
  } else if (a == "9") {
    numbers(a);
  }

  // (2) click event for signs
  else if (a == "+") {
    signs(a);
  } else if (a == "-") {
    signs(a);
  } else if (a == "*") {
    signs(a);
  } else if (a == "/") {
    signs(a);
  } else if (a == "%") {
    signs(a);
  } else if (a == ".") {
    signs(a);
  } else if (a == "C") {
    clear();
  } else if (a == "=") {
    equall();
  } else if (a == "X") {
    backspace();
  }
});

//All  key events

// (1) Key event for numbers

document.body.addEventListener("keydown", (e) => {
  if (e.key == "0") {
    numbers("0");
  } else if (e.key == "1") {
    numbers("1");
  } else if (e.key == "2") {
    numbers("2");
  } else if (e.key == "3") {
    numbers("3");
  } else if (e.key == "4") {
    numbers("4");
  } else if (e.key == "5") {
    numbers("5");
  } else if (e.key == "6") {
    numbers("6");
  } else if (e.key == "7") {
    numbers("7");
  } else if (e.key == "8") {
    numbers("8");
  } else if (e.key == "9") {
    numbers("9");
  }

  // (2) Key event for signs
  else if (e.key == "+") {
    signs("+");
  } else if (e.key == "-") {
    signs("-");
  } else if (e.key == "*") {
    signs("*");
  } else if (e.key == "/") {
    signs("/");
  } else if (e.key == "%") {
    signs("%");
  } else if (e.key == ".") {
    signs(".");
  } else if (e.key == "c" || e.key == "Delete") {
    clear();
  } else if (e.key == "=") {
    equall();
  } else if (e.key == "Backspace") {
    backspace();
  }
});


// Function for numbers in input box

function numbers(no) {
  if (temp == result) {
    input.innerHTML = "";
    input.innerHTML += no;
    temp = 1;
    result = 2;
  } else if (no == 0 && input.innerHTML == "") {
    input.innerHTML = no;
  } else if (no != 0 && input.innerHTML == "0") {
    input.innerHTML = "";
    input.innerHTML += no;
  } else if (no == "0" && input.innerHTML != "0") {
    input.innerHTML += no;
  } else if (no != 0) {
    input.innerHTML += no;
  }
  signFlag = 0;
}

// Function for signs in input box

function signs(sign) {
  if (sign == "." && dotFlag == 0) {
    if (input.innerHTML == "") {
      input.innerHTML = "0.";
      dotFlag = 1;
    } else if (input.innerHTML != "") {
      input.innerHTML += ".";
      dotFlag = 1;
    }
    // input.innerHTML += sign;
  }
  if (sign != ".") {
    if (input.innerHTML == "") {
      alert(`You can't add sign first`);
    } else if (signFlag == 0) {
      input.innerHTML += sign;
      signFlag = 1;
      dotFlag = 0;
    }
  }
  temp = 1;
  result = 2;
}

//Function that clear the input box

function clear() {
  input.innerHTML = "";
  signFlag = 0;
  dotFlag = 0;
}

//Function that give result of input box

function equall() {
  try {
    result = eval(input.innerHTML);
    // console.log(result);

    if (result == "Infinity") {
      alert(`can't divide by zero`);
    } else {
      input.innerHTML = result;
    }
  } catch (error) {
    alert("unaccepted input");
  }
  temp = result;
}

//Function that clear the input box  one by one

function backspace() {
  temp = input.innerHTML.slice(0, input.innerHTML.length - 1);
  input.innerHTML = temp;
}
