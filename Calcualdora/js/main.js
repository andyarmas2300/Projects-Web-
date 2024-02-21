// VARIABLES
let output = document.getElementById("output-el");
let field = "0";

// METHODS
function main() {
  init_calculator();
}

function init_calculator() {
  set_field("0");
}

function set_field(wanted_value) {
  field = wanted_value;
  output.textContent = field;
}

function button_pressed(buttonTextContent) {
  add_value(buttonTextContent.replace(/\s/g, ""));
}

function add_value(value) {
  if (field != "0" && field != "Error") {
    set_field(field.concat(value));
  } else {
    set_field(value);
  }
}

function erase_last_value() {
  // field = field.substring(0, 2)
  if (field.length > 1 && field != "Error") {
    set_field(field.slice(0, -1));
  } else {
    set_field("0");
  }
}

function do_math() {
  // first we need separate the numbers from the signs
  // the signs are "/" "*" "-" "+"

  let result = Number(field);

  if (field.includes("+")) {
    let numbers = field.split("+");
    result = do_operation(numbers[0], numbers[1], "+");
  }
  if (field.includes("-")) {
    let numbers = field.split("-");
    result = do_operation(numbers[0], numbers[1], "-");
  }
  if (field.includes("*")) {
    let numbers = field.split("*");
    result = do_operation(numbers[0], numbers[1], "*");
  }
  if (field.includes("/")) {
    let numbers = field.split("/");
    result = do_operation(numbers[0], numbers[1], "/");
  }

  // showing result
  set_field(result);
  if (typeof result === "number") {
    set_field(result.toString());
  } else {
    set_field("Error");
  }
}

function do_operation(left, right, sign) {
  let number_left = +left;
  let number_right = +right;

  let final_calc = null;

  if (typeof number_left === "number" && typeof number_right === "number") {
    if (sign == "+") {
      final_calc = number_left + number_right;
    } else if (sign == "-") {
      final_calc = number_left - number_right;
    } else if (sign == "/") {
      final_calc = number_left / number_right;
    } else if (sign == "*") {
      final_calc = number_left * number_right;
    }
  }

  final_calc = Number(final_calc.toFixed(4));

  return final_calc;
}

// MAIN
main();
