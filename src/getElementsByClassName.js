// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//document.body, element.childNodes, and element.classList

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className
) {
// document.body.contains()
// 1. create a variable for empty array
// 2. look at each element and children to see if it has the class
// 3. if it contains that class, push the element name to empty array 
  let output = [];
  let checkElement = function (element) {
    if (element.classList && element.classList.contains(className)) {
      output.push(element);
    }

    if (element.childNodes) {
      element.childNodes.forEach(function (node) {
        checkElement(node);
      });
    }
  };

  checkElement(document.body);
  return output;
};
