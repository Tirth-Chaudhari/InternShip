// understanding of class in javascript
    // class user
    // {
    //     constructor(name)
    //     {
    //         this.name=name;
    //     }
    //     hello()
    //     {
    //     }
    // }
    // console.log(user);// class userr
    // console.log(typeof user);//function
    // console.log(Object.getOwnPropertyNames(user.prototype));//[ 'constructor', 'hello' ]


// understanding of inheritence in js

    // class Animal
    // {
    //     constructor(name)
    //     {
    //         this.name=name
    //         this.speed=0
    //     }

    //     run(speed)
    //     {
    //         this.speed=speed
    //         console.log(this.name+'is run at speed'+this.speed);
            
    //     }

    //     stop()
    //     {
    //         this.speed=0
    //         console.log(this.name+'is stop'); 
    //     }
    // }
    // class Rabbit extends Animal
    // {
    //     constructor(name)
    //     {
    //         super(name)
    //         console.log(this.name);
            
    //     }

    // }
    // let rabbit=new Rabbit('Rabbit')
    // rabbit.run(10)
    // rabbit.stop()


    // class CoffeeMachine {

    //     #waterAmount = 0;
    //     get waterAmount() {
    //       return this.#waterAmount;
    //     }
      
    //     set waterAmount(value) {
    //       if (value < 0) value = 0;
    //       this.#waterAmount = value;
    //     }

    //     getWaterAmount()
    //     {
    //        return this.#waterAmount
            
    //     }
    //   }
    //   let machine = new CoffeeMachine();
    //   machine.waterAmount = 100;
    // //   console.log(machine.#waterAmount); // Compile time  Error
    //   console.log(machine.getWaterAmount());
      





