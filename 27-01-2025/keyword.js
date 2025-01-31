//1. scope of variables


    // let a=10


    // {
    // //   var a=11   already delcare error 
    // let a=10
    // console.log(a);   //10
    // }

    // console.log(a);






//2. hoisting concept


    // var a=30
    // const a=20
    // console.log(a);
    // give runtime error
    var b=20
    const a=getNumber();
    function getNumber()
    {
        return b;
    }
    console.log(a);
    




