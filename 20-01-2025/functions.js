

// anonymous function

let person=
{
    name:'Tirth',
    age:'21',
    collage:'DDU'
}



let showData= function(a)
{
    
    console.log(arguments[0]);
    
}

showData(person)




// IIFE

let result=(function() 
{
    
    console.log(person);
    
})();


let title=prompt('give your project title');


console.log(`your title is ${title}` );




