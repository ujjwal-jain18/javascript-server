var x=Number(process.argv[2]);
diamond(x);

function diamond (x)
{
    console.log("print a diamond with rows "+x);
    
    if( x<2 && x>10 )
       return(0);

    for(i=0; i<x; i++)
     { 
        a="";

    for(j=i; j<x-1; j++)
        a+=" ";

    for (z=i; z>=0; z--)
        a+="* ";

    console.log(a);

     }
    for(i=0; i<x; i++)
     {
          a="";

    for(j=i; j>0; j--)
        a+=" ";

    for(z=i; z<x; z++)
        a+="* ";
       
     console.log(a);

     }
}