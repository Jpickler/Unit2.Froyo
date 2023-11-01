//console.log(`test`);

//Test Variables:  vanilla,vanilla,vanilla,strawberry,coffee,coffee


// The console output changes depending on the user's input.
let userInput= prompt(`Please enter your order separated by commas no spaces:`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

//console.log(userInput);

// The user's input string is split into an array of strings.  
const userOrder=userInput.split(`,`);

// An object is used to keep count of how many orders there are of each flavor.
let objectOrder={};


const arrayToObject = (arr) =>{
  const obj=[];
// A loop is used to iterate through the array of flavors.
//creates keys that are the flavors
for(i=0;i<arr.length;i++){
  //console.log(arr[i]);
  let ele=``;
    ele=arr[i];
       obj[ele] = 0;
  };


// The program correctly counts the number of each flavor in the user's input.
// The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
  for(i=0;i<arr.length;i++){
    let ele=``;
      ele=arr[i];
         obj[ele]++;
    };
  return(obj);
};




    
//When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
objectOrder=arrayToObject(userOrder);
console.log(`Your Order:`);
console.log(objectOrder);


