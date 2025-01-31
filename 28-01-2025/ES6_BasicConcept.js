//arrow function when to use and not use

    // const counter={
    //     count:0,
    //     increment:()=>++this.count,
    //     current:()=>this.count
    // }
    // console.log(counter.count);
    // console.log(counter.increment());
    
    // output:
    // 0
    // NaN

    // const counter={
    //     count:0,
    //     increment(){ ++this.count},
    //     current(){return this.count}
    // }
    // console.log(counter.count);
    // counter.increment()
    // console.log(counter.current());
    
    // output:
    // 0
    // 1

// Array.of

    // const arr=Array.of(3)
    // console.log(arr);//[3]
    // console.log(arr.length);//1
    

    // const arry=new Array(3)
    // console.log(arry);//[ <3 empty items> ]
    // console.log(arry.length);//3


//Array.from

    // function add()
    // {
    //     return Array.from(arguments,(x)=>x+1);
    // }

    // console.log(add(1,2,3));//[2,3,4]

    // let double={
    //     factor:2,
    //     multiplyer(x)
    //     {
    //         return this.factor*x;
    //     }
    // }

    // let arr=Array.from([1,2,3],double.multiplyer,double);//parameters: target, MapFunction, thisArg (this value inside MapFunction)
    // console.log(arr);//[ 2, 4, 6 ]



// array.find()

    // const todos = [
    //     {
    //     id: 1,
    //     text: 'Learn JavaScript',
    //     isCompleted: false,
    //     },
    
    //     {
    //     id: 2,
    //     text: 'Master React',
    //     isCompleted: false,
    //     },
    
    //     {
    //     id: 3,
    //     text: 'Build an App ',
    //     isCompleted: false,
    //     },
    // ];
    // const todo=todos.find((todo)=>todo.id==2)
    // console.log(todo); //{ id: 2, text: 'Master React', isCompleted: false }
    
    

    // const products = [
    //     { name: 'Laptop', price: 10000 },
    //     { name: 'Computer', price: 1999 },
    //     { name: 'Tablet', price: 1255 },
    //     { name:'Laptop', price:15000}
    //   ];
    //   const index = products.findIndex((product,ind)=> product.name=='Laptop' && ind>1)
    //   console.log({index});//{ index: 3 }
      

// startsWith

        // const title = "Jack and Jill Went Up the Hill";
        // const result = title.startsWith("Jack");
        // console.log({ result });//{ result: true }

        // const title = "Jack and Jill Went Up the Hill";
        // const result = title.startsWith("Jill",9);
        // console.log({ result });//{ result: true }

// endsWith

        // const s = "JavaScript is awesome";
        // const result = s.endsWith("Script", 10);
        // console.log({ result });//{ result: true }

// includes

        // let email = "hi@javascripttutorial.net";
        // const result = email.includes("@");

        // console.log({ result });//{ result: true }