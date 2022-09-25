//console.log("roshan")
console.log("person1:shows tickets")
console.log("person2:shows tickets")
const preMovie=async ()=>{
    const promiseWifeBringingTicks=new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve("ticket")
        ,3000)
    });
    const getPopcorn=new Promise((resolve,reject)=>resolve("popcorn"));
    const getButter=new Promise((resolve,reject)=>resolve("butter"));
    const getcoldDrink=new Promise((resolve,reject)=>resolve("colddrink"));
    let ticket=await promiseWifeBringingTicks;
    console.log("wife:i have ticket");
    console.log("husband:we should go in");
    console.log("wife:no i am hungry");
    let popcorn=await getPopcorn;
    console.log("husband:we should go in");
    console.log("wife:no i need butter on my popcorn");
    let butter=await getButter;
    console.log("husband:we should go in");
    console.log("wife:no i need colddrink");
    let colddrink=await getcoldDrink;

    return ticket;

}
preMovie().then((m)=>console.log(m));
console.log("person4:shows tickets")
console.log("person5:shows tickets")