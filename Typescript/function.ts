
// function type
        // function sum(a:number,b:number)
        // {
        //     return a+b;
        // }

        // console.log(typeof sum(1,2)); //number


        //  function sum(a:number,b:number):number
        // {
        //     return a+b;
        // }
        // console.log(typeof sum(1,2)); //number


        // let add: (x: number, y: number) => number;
        // add=function(x,y)
        // {
        //     return x+y;
        // }
        // console.log(add(10,"20")); //Argument of type 'string' is not assignable to parameter of type 'number'


// function as type
        // let add: (x:number,y:number) => number;
        // let sum:add;
        // sum=function(x,y)
        // {
        //     return x+y;
        // }
        // console.log(sum(10,20));
        


// Rest parameter in function
        
        // function combine(...args: (number | string)[]): [number, string] {
        // let total = 0;
        // let str = '';
        // args.forEach((arg) => {
        //     if (typeof arg === 'number') {
        //     total += arg;
        //     } else if (typeof arg === 'string') {
        //     str += arg;
        //     }
        // });

        // return [total, str];
        // }
        // const [total, str] = combine(3, 'Happy', 2, 1, ' New Year');
        // console.log({ total });
        // console.log({ str });


// function overloading
            // function sum(a: number, b: number): number{
            //     return a + b;
            // }
            // function sum(a: number, b: number, c?: number): number {
            //     console.log('optional');
                
            //     if (c) return a + b + c;
            //     return a + b;


            // }
            
            // console.log(sum(10,20,30));


        // function sum(a: number, b: number): number;
        // function sum(a: number, b: number, c: number): number;
        // function sum(a: number, b: number, c?: number): number {            
        //     if (c) return a + b + c;
        //     return a + b;
        // }
        // console.log(sum(1,2));
        

            

        


        