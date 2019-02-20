// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // I: number, null, string, array, object, undefined, function
  // O: string
  // create a variable for the end string
  //if statements for each obj and add it to the end string

  let output = '';
  let arrayOutput = [];
  let objectOutput = {};

  // Number
  if(typeof obj === 'number') {
    output = `${obj}`;
    return output;
  }

  //Boolean 
  if(typeof obj === 'boolean') {
    output = `${obj}`;
    return output;
  }

  //Null
  if(obj === null) {
    output = 'null';
    return output;
  }

  //Undefined
  if(obj === undefined) {
    return undefined;
  }

  //String
  if(typeof obj === 'string') {
    output = `"${obj}"`;
    return output;
  }
  
  //Array
  if(Array.isArray(obj) && obj.length === 0) {
    return '[]';
  } else if(Array.isArray(obj) && obj.length > 0) {
    for (let i = 0; i < obj.length; i++) {
      arrayOutput.push(stringifyJSON(obj[i]));
    }
    return `[${arrayOutput}]`;
  }

  //Function
  //fix helper function
  //test helper function for empty object
  //adjusting for loop (figuring out the comma)
  //putting together full string for obj with property/value
 
  //Object

  //Helper Function
  function isEmpty(obj) {
    let keys = Object.keys(obj);
    if(keys.length === 0) {
      return true;
    }
  }

  if(typeof obj === 'object') {
    // let objectString = '';
    // let keyValueArray = [];
    if (isEmpty(obj)) { 
      return '{}'; 
    } else {
    for(let key in obj) {

      let tempKey = '"' + key + '"';
      let tempValue = stringifyJSON(obj[key]); 
      let temp = tempKey + ":" + tempValue + ",";
      console.log(temp);
      // let keyValuePair = `"${key}":"${obj[key]}"`;
      // keyValueArray.push(keyValuePair);
    }

    return `{${objectString}}`;
  }
    // keyValueArray.join(',');
    // console.log(keyValueArray.join(','));
  } 

}


//   if(typeof obj === 'object') {
//     let keys = Object.keys(obj) 
//     keys.forEach(key => {
//       let tempKey = '"' + key + ':' + '"' + ','; 
//       let tempValue = stringifyJSON(obj[key]);
//       return `{${tempKey} + ${tempValue}}`;
//     });
//   }

// };


// let keyArray = [];
// keyArray.push(key.toString());
// keyArray.push(obj[key].toString());
// let objKeyString = keyArray.join(":");
// console.log(objKeyString);
//   console.log(key.toString());
//   console.log(obj[key].toString());
//   let output +=  key.toString(); 
//   output += ':'; 
//   output += obj[key].toString();