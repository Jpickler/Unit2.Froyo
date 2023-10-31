//console.log(`test`);

//Test Variables:  vanilla,vanilla,vanilla,strawberry,coffee,coffee


// The console output changes depending on the user's input.
let userInput= prompt(`Please enter your order separated by commas no spaces:`, `vanilla,vanilla,vanilla,strawberry,coffee,coffee`);

//console.log(userInput);

// The user's input string is split into an array of strings.  
const userOrder=userInput.split(`,`);

// An object is used to keep count of how many orders there are of each flavor.
const objectOrder={};

// A loop is used to iterate through the array of flavors.
//creates keys that are the flavors
for(i=0;i<userOrder.length;i++){
  //console.log(userOrder[i]);
  let flavor=``;
    flavor=userOrder[i];
       //console.log(`this is flavor: ` + flavor);
       objectOrder[flavor] = 0;
  };


// The program correctly counts the number of each flavor in the user's input.
// The logic for counting the frequencies of elements in an array is organized into a function that returns an object.
  for(i=0;i<userOrder.length;i++){
    //console.log(userOrder[i]);
    let flavor=``;
      flavor=userOrder[i];
         //console.log(`this is flavor: ` + flavor);
         objectOrder[flavor]++;
    };

    
//When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
console.log(`Your Order:`);
console.log(objectOrder);


