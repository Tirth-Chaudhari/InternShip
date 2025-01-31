let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

// console.log(shoppingCart);

// console.log(fruits); // both refer same references


let students=
[
    {
        name:'Rahul',
        certificate:'java'
    },
    {
        name:'neel',
        certificate:'node'
    },
    {
        name:'dhruv',
        certificate:'node'
    }
    ,{
        name:'meet',
        certificate:'java'
    }
]


// students.forEach((student,index,arr)=>
// {
//     console.log(student);
    

    

// })


// filter student who has certificate about java
// const JavaStudents=students.filter(student=> student.certificate=='java')

// console.log(JavaStudents);



// let res=students.map((student,index,arr)=>
// {
//     console.log(student);
    
// })




let arr=[1,2,3,4,5,6]

// let arr1=arr.slice(2,4)
// console.log(arr);
// console.log(arr1);


// let arr1=arr.splice(1,2)

// console.log(arr);
// console.log(arr1);


// arr.splice(1,0,2,3)
// console.log(arr);

// let sum=arr.reduce((sum,current)=>sum+current)

// console.log(sum);



// arr.shift();
// arr.shift();

// console.log(arr);
// arr.unshift(1,2);
// console.log(arr);





//iterator in objects and array



for(let obj of students)
{
   
  
    for(let key in obj)
    {
        console.log(key+":"+obj[key]);
        
        
    }
}



// Map Property 
let mp=new Map()

mp.set(1,'tirth')
mp.set(2,'neel')
mp.set(3,'rahul')
mp.set(4,'meet')

for(let key of mp.keys())
{
    console.log(key+":"+mp.get(key));

    
}

for(let value of mp.values())
{
    console.log(value);
    
}