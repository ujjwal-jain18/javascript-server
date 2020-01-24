 p=0;
 q=0;
 valid=[];
 invalid=[];
  
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
    
    x = re.test(a);

    if( x == true)  valid.push(a);

    else invalid.push(a);
 
    return(x);
}

function validateUsers(users){ 
   
    users.forEach(
        (element) => {
 
        const {traineeEmail, reviewerEmail} = element;
       
        check = validateEmail(traineeEmail);
       
        if( check == true) p++;
        
        else q++;
        
        check1=validateEmail(reviewerEmail);
        
        if( check1 == true) p++;
        
        else q++;
        
                      }
                 )
 
}

validateUsers(users);
  //console.log("valid Email"+valid);
console.log(`valid Emails  \n${valid}`);

console.log("invlaid Email \n"+invalid);

console.log("valid count \n"+p);

console.log("invlaid count  \n"+q);
