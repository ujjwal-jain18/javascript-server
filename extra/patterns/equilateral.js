let x,a;
export default function equilateral (x)
{
    console.log("print a equilateral triangle with rows "+x);
   
    if(x<2 && x>10)
       return(0);
   
    for(let i=0;i<=x;i++)
     {
          a="";

    for(let j=i;j<=x;j++)
          a+=" ";

    for (let z=i;z>0;z--)
          a+="* ";
    
    console.log(a);

     }

}
