
function validateEmail(a){
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;
    
   let  match = re.test(a);

    return(match);
}
export {validateEmail};