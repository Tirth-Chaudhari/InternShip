

// let user={
//     name:'Tirth'
// }

// let company={
//     company:'Eclat'
// }



// Object.assign(user,company)
// console.log(user);


let user = {
    name: "tirth",
    age: 30,
  
    sayHi() {
    //   alert( user.name ); // leads to an error
    console.log(this.name);
    }
  
  };
  
  let msg={
    message:'Reference'
  }
  
  let admin = user;
  user=msg;
  

  admin.sayHi(); // TypeError: Cannot read property 'name' of null
