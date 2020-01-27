let valid=[];
let invalid=[];
function validateEmail(a){
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
    
   let  match = re.test(a);

    if( match == true)  valid.push(a);

    else invalid.push(a);
 
    return(match);
}
export {validateEmail};