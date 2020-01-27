 validcount = 0;
 invalidcount = 0;
 valid = [];
 invalid = [];
  
 const users = [
     {
    traineeEmail: "ujjwal.jain@successive.tech",
    reviewerEmail:"preet.saxena@successive.tech",
     },

     {
    traineeEmail: "ujjwal.jainsuccessive.tech",
    reviewerEmail:"preeta@succesive.tech",
    },

    {
    traineeEmail: "ujju.jain@successive.tech",
    reviewerEmail:"preet@successive.tech",
    },

];

function validateEmail(a){
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
    
    match = re.test(a);

    if( match == true)  valid.push(a);

    else invalid.push(a);
 
    return(match);
}

function validateUsers(users){ 
   
    users.forEach((element) => {
 
        const {traineeEmail, reviewerEmail} = element;
       
        check = validateEmail(traineeEmail);
       
        if( check == true){
             validcount++;
        }
        else{
             invalidcount++;
        }
        check1 = validateEmail(reviewerEmail);
        
        if( check1 == true){
             validcount++;
        }
        else{
             invalidcount++;
        }
    })
 
}

validateUsers(users);
  //console.log("valid Email"+valid);
console.log(`valid Emails  \n${valid}`);

console.log("invlaid Email \n"+invalid);

console.log("valid count \n"+validcount);

console.log("invlaid count  \n"+invalidcount);
