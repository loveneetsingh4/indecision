"use strict";

console.log("aeggea");
var com = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "lovenet "
  ),
  React.createElement(
    "p",
    null,
    "this is an element"
  )
);
var app = {
  title: "fawee",
  subtitle: "gekgrkegr",
  location: "new delhi",
  age: 24,
  arr: []
};
function getlocation() {
  if (location) {
    return React.createElement(
      "p",
      null,
      "location  :",
      location
    );
  } else {
    return "no location is definded";
  }
}
var onformsubmit = function onformsubmit(e) {
  e.preventDefault();
  var options = e.target.elements.option.value;
  if (options) {
    app.arr.push(options);
    e.target.elements.option.value = "";
  } else {
    alert("ergaa");
  }

  render();
};

var zero = function zero() {
  app.arr = [];
  render();
};

var username = "lovey";
//const numbers=[44,6,8];
var render = function render() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Indecision App"
    ),
    React.createElement(
      "p",
      null,
      "arr length: ",
      app.arr.length > 0 ? app.arr.length : "no option"
    ),
    React.createElement(
      "button",
      { onClick: zero },
      "remove all"
    ),
    app.arr.map(function (number) {
      return React.createElement(
        "ol",
        { key: number },
        "options:",
        number
      );
    }),
    React.createElement(
      "h1",
      null,
      username
    ),
    React.createElement(
      "h3",
      null,
      app.location
    ),
    app.age >= 20 && React.createElement(
      "p",
      null,
      "print the ",
      app.age
    ),
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        "age 1"
      ),
      React.createElement(
        "li",
        null,
        "age 2 "
      ),
      React.createElement(
        "li",
        null,
        "age 3"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onformsubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "add option"
      )
    )
  );
  ReactDOM.render(templateTwo, document.getElementById("app"));
};
render();
