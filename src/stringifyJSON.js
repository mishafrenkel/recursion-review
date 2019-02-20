// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

var stringifyJSON = function(obj) {

  let output = '';
  let arrayOutput = [];

  // Number
  if (typeof obj === 'number') {
    output = `${obj}`;
    return output;
  }

  //Boolean 
  if (typeof obj === 'boolean') {
    output = `${obj}`;
    return output;
  }

  //Null
  if (obj === null) {
    output = 'null';
    return output;
  }

  //Undefined
  if (obj === undefined) {
    return undefined;
  }

  //String
  if (typeof obj === 'string') {
    output = `"${obj}"`;
    return output;
  }
  
  //Array
  if (Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if (Array.isArray(obj) && obj.length > 0) {
    for (let i = 0; i < obj.length; i++) {
      arrayOutput.push(stringifyJSON(obj[i]));
    }
    return `[${arrayOutput}]`;
  }
 
  //Object

  //Helper Function
  let isEmpty = function(obj) {
    let keys = Object.keys(obj);
    if (keys.length === 0) {
      return true;
    }
  };

  if (typeof obj === 'object') {
    let objectArray = [];
    if (isEmpty(obj)) { 
      return '{}'; 
    } else {
      for (let key in obj) {
        let tempKey = '"' + key + '"';
        let tempValue = stringifyJSON(obj[key]);
        if(typeof tempValue === 'undefined' || typeof tempValue === 'function') {
          return '{}';
        } 
        let temp = tempKey + ':' + tempValue;
        objectArray.push(temp);
      }

      return `{${objectArray.join(',')}}`;
    }
  } 

};