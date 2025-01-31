

// lang='java'

// var obj={
//     lang:'angular',

//     language:function()
//     {
//         console.log(lang);
//         console.log(this.lang);
        
        
//         lang='react'
//         function langWorld()
//         {
//             console.log(lang);
//             console.log(this.lang);
            
            
//         }
//         langWorld();

//         console.log(this.lang);
        

//     }

// }


// obj.language();



// var drink = 'wine';

// var foo = {};

// foo.drink = "beer";

// foo.getDrink = function(){
//         return this.drink; // 'this' refers to the object "foo"
//     };

// foo.under21 = {};

// foo.under21.drink = 'soda';

// foo.under21.getDrink = function(){
//         return this.drink; // 'this' refers to the object "foo.under21"
//     };

// console.log( foo.getDrink() ); // beer

// console.log( foo.under21.getDrink() ); // soda


// drink = 'wine';

// var foo = {};

// foo.drink = "beer";

// foo.getDrink = function(){      
//         return this.drink; // 'this' refers to the object "foo"
//     };

// foo.under21 = {};

// foo.under21.drink = 'soda';

// foo.under21.getDrink = function(){
//        return foo.getDrink.call(this) // execute foo.getDrink()                
//     };

// console.log( foo.getDrink() ); // beer

// console.log( foo.under21.getDrink() ); // soda