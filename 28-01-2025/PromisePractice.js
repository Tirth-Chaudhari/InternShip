// exception in promise
    // new Promise((resolve,reject)=>
    // {
    //     resolve('fine')
    // }).then((data)=>
    // {
    //     console.log(data);
        
    //     throw new Error("not fine");
    // }).then((data)=>
    // {
    //     console.log(data);
        
    // })
    // .catch((err)=>
    // {
    //     console.log(err);
        
    // })

   

// the execution: catch -> then
    // new Promise((resolve, reject) => {
    //     throw new Error("Whoops!");
    // }).then(()=>console.log('no data'))  
    // .catch(function(error) {
    //     console.log(error);    
    // }).then(() => 
    //             {   console.log('nothing');
    //                 throw new Error('break here')
    //             })
    // .then(()=>console.log('other data'))
    // .catch(()=>console.log('herer err'))
    // .then(()=>console.log('after error'))


// error handling only in synchronous task 
    // new Promise((resolve,reject)=>
    // {
        // setTimeout(()=>{
        //     throw new Error('something went wrong') //here timeout error and handeled catch block
        // },2000)
        // throw new Error('something went wrong')
        
    // })
    // .catch((err)=>console.log(err))






//Promise API
    //Promise.all method
                // Promise.all([
                //     new Promise((resolve,reject)=>resolve(1),1000),
                //     new Promise((resolve,reject)=>resolve(2),2000),
                //     new Promise((resolve,reject)=>resolve(3),3000),

                // ]).then((data)=>
                // {
                //     console.log(data); //[ 1, 2, 3 ]
                    
                // }).catch((err)=>console.log(err)) 
                

                // Promise.all([
                //     new Promise((resolve,reject)=>resolve(1),1000),
                //     new Promise((resolve,reject)=>reject(2),2000),
                //     new Promise((resolve,reject)=>resolve(3),3000),

                // ]).then((data)=>
                // {
                //     console.log(data);  
                // }).catch((err)=>console.log(err)) // output: 2


    //promise.allSettled method

                // Promise.allSettled([
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(1),1000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(2),2000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(3),3000)),

                // ]).then((data)=>
                // {
                //     console.log(data);      //output:
                //                             // [
                //                             //     { status: 'fulfilled', value: 1 },
                //                             //     { status: 'rejected', reason: 2 },
                //                             //     { status: 'fulfilled', value: 3 }
                //                             // ]
                // }).catch((err)=>console.log(err)) 


                // Promise.allSettled([
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(1),1000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(2),2000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(3),3000)),

                // ]).then((data)=>
                // {
                //     console.log(data);      output:
                                                // [
                                                //     { status: 'rejected', reason: 1 },
                                                //     { status: 'rejected', reason: 2 },
                                                //     { status: 'rejected', reason: 3 }
                                                // ]   
                // }).catch((err)=>console.log(err+'here'))


    //promise.race
                // Promise.race([
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(1),1000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(2),2000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(3),3000)),

                // ]).then((data)=>
                // {
                //     console.log(data);        
                // }).catch((err)=>console.log(err+'rejected first')) //1rejected first


                // Promise.race([
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(1),1000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(2),2000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(3),3000)),

                // ]).then((data)=>
                // {
                //     console.log(data+'resolve first');   //1resolve first     
                // }).catch((err)=>console.log(err+'rejected first')) 


    //promise.any

                // Promise.any([
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(1),1000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(2),2000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> resolve(3),3000)),

                // ]).then((data)=>
                // {
                //     console.log(data+'resolve');     // 2 resolve   
                // }).catch((err)=>console.log(err+'rejected first')) 


                // Promise.any([
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(1),1000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(2),2000)),
                //     new Promise((resolve,reject)=>setTimeout(()=> reject(3),3000)),

                // ]).then((data)=>
                // {
                //     console.log(data+'resolve');    
                // }).catch((err)=>console.log(err)) //[AggregateError: All promises were rejected] { [errors]: [ 1, 2, 3 ] }





//async and await

                // async function f()
                // {
                //             let promise=await new Promise((resolve,reject)=>
                //             {
                //                 setTimeout(()=>resolve(1),2000);
                //             })
                //             let result = promise
                //             console.log(result);
                            
                // }
                // await f();
                // console.log('hello'); 

                // output:
                // 1
                // hello


            //    function f()
            //     {
            //                 let promise=new Promise((resolve,reject)=>
            //                 {
            //                     setTimeout(()=>resolve(1),1000);
            //                 })
            //                 let result = promise
            //                 console.log(result);
                            
            //     }
            //     f();
            //     console.log('hello'); 
            //     console.log('done');
                // output:
                // Promise { <pending> }
                // hello
                // done

               

