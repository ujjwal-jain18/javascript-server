let x,a

export default function diamond (x)
{
    console.log("print a diamond with rows "+x);
    
    if( x<2 && x>10 )
       return(0);

    for(let i=0; i<x; i++)
     { 
        a="";

    for(let j=i; j<x-1; j++)
        a+=" ";

    for (let z=i; z>=0; z--)
        a+="* ";

    console.log(a);

     }
    for(let i=0; i<x; i++)
     {
          a="";

    for(let j=i; j>0; j--)
        a+=" ";

    for(let z=i; z<x; z++)
        a+="* ";
       
     console.log(a);

     }
}


