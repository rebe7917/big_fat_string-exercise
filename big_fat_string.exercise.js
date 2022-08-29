"use strict";
//loader først vindue, før functionen start
window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
//gør at "content" bliver vist i output boksen når man klikker på generate-knap
  document.querySelector("#generate").addEventListener("click", visOutput);
}


function visOutput() {
  let input = document.querySelector("#input_text").value; //tildeler value og let navn
  let selection = document.querySelector("#selectfunction").value; //tildeler value og let navn
  console.log(`${input}`);

  if (selection == "first_character_uppercase") {
    let part1 = input.substring(0, 1).toUpperCase();
    let part2 = input.substring(1);
    output.innerHTML = `${part1}​​​​${part2}​​​​`;
  } else if (selection == "first_name") {
    let firstname = input.split(" ", 1);
    output.innerHTML = `${firstname}​​​​​​​​`;
  } else if (selection == "first_name_lenght") {
    let firstSpace = input.indexOf(" ");
    let name = input.substring(0, firstSpace);
    let len = name.length;
    output.innerHTML = len;
  } else if (selection == "middle_name") {
    let firstSpace = input.indexOf(" ");
    let lastSpace = input.lastIndexOf(" ");
    let middleName = input.substring(firstSpace, lastSpace);
    output.innerHTML = middleName;
  } else if (selection == "check_filename" && input.endsWith(".jpg") == true) {
    output.innerHTML = "file is a jpg";
  } else if (selection == "check_filename" && input.endsWith(".png") == true) {
    output.innerHTML = "file is a png";
  } else if (selection == "password_input") {
    let len = input.length;
    let tegn = "*";
    output.innerHTML = tegn.repeat(len);
  } else if (selection == "third_character_uppercase") {
    const name1 = input.substring(2, 3).toUpperCase();
    const part1 = input.substring(0, 2);
    const part2 = input.substring(3);
    output.innerHTML = `${part1}${name1}${part2}`;
  } else if (selection == "uppercase_after_hyphen") {
    
  }
}
