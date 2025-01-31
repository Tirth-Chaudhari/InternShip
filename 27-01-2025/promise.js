//basic promise

        // let promise=new Promise(function(resolve,reject)
        // {
            // setTimeout(()=>resolve(1),1000)
            // reject(new Error('also it solve'));
            // reject(1)
        // })
        // promise.then((err)=>
        // {
        //     console.log('resolve'+err);
            
        // })
        // console.log(promise);

        // promise.then(function(data)
        // {   

        //     console.log(data);

        // })
        // promise.then(function(data){
        //     // console.log(data*2);
            
        // })
        // promise.catch((err)=>
        // {
        //     console.log(err);
            
        // })
        // console.log(promise);


// promise chaining

    // new Promise(function(resolve,reject)
    // {
    //     resolve(1)
    // }).then(function(data)
    // {
    //     console.log(data);

    //     return new Promise(function(resolve,reject)
    //     {
    //             resolve(data*2)
    //     })
        
    // }).then(function(data)
    // {
    //     console.log('multiplyable data'+data);

    //     // resolve('solve all doubt')
    //     return new Promise(function(resolve,reject)
    //     {
    //         resolve('solve all doubts')
    //     })
    // }).then(function(result){
    //     console.log(result);
    // })
