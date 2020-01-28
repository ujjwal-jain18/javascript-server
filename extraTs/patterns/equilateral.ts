let a: string;
let i: number;
let j: number;
let z: number;
export default function equilateral(x: number): any {
      console.log('print a equilateral triangle with rows ' + x);

      if (x < 2 && x > 10)
            return (0);

      for (i = 0; i <= x; i++) {
            a = '';

            for (j = i; j <= x; j++)
                  a += ' ';

            for (z = i; z > 0; z--)
                  a += '* ';

            console.log(a);

      }

}
