// learn basics

        // const pending:boolean=true;
        // let notpending=!pending;
        // console.log(pending);
        // console.log(notpending);
        // console.log(typeof notpending);
        // notpending='helo'  // Type 'string' is not assignable to type 'boolean'.

        //     let emp:object;
        //    emp={
        //     name:'john',
        //     age:30,
        //    }
        //    emp['fname']='hello'
        //    emp['name']='doe'
        //    console.log(emp['name']); // doe
        //    console.log(emp['fname']);// hello


//Array

        // let scores = ['Programming', 5, 'Software Design', 4]; 
        // console.log(typeof scores); // object

        // let scores : (string | number)[];
        // scores = ['Programming', 5, 'Software Design', 4]; 

    
//Tuple

        // let num:[number,string]
        // num=[10,'hello']
        // num=['skill',10]  //'string' is not assignable to type number
        

// Any type
        // let result;   // guess type is any
        // result='hello';
        // result=10;
        // console.log(result);


        // let result='hello' // guess type is string
        // result=10   //Type 'number' is not assignable to type 'string'.ts(2
        

        
// unknown type

        // let result: unknown;
        // result = [1, 2, 3];
        // const total= result.reduce((a:number,b:number)=>a+b,0); // unknown type here
        // const total = (result as number[]).reduce((a: number, b: number) => a + b, 0);
        // console.log(total); // 6
        // unknown without knowing type not apply any function


// intersection type


            // type Personal = {
            //     name: string;
            //     age: number;
            // };
            
            // type Contact = {
            //     email: string;
            //     phone: string;
            // };
            
            // type Candidate = Personal & Contact;
            
            // let candidate: Candidate = {
            //     name: "Joe",
            //     age: 25,
            //     email: "joe@example.com",
            //     phone: "(408)-123-4567",
            // };
            // console.log(candidate);
            

        



