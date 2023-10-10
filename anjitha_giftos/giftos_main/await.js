let preMovie = async () => {
    
  
    let friendbringticket = new Promise((resolve,reject) =>{
        
        setTimeout(()=>{
            resolve("The Ticket is here for you...");
        },2000);
    })
    
    let getPopcorn = new Promise((resolve,reject) =>{
        reject("The popcorn is ready for you...")
    });
    let addButter = new Promise((resolve,reject) =>{
        resolve("Butter is added...")
    });

    let ticket = await friendbringticket;
    console.log("My ticket ::",ticket);
 {   
    let popcorn = await getPopcorn;
    console.log("reached here")
    console.log("My popcorn ::",popcorn);
}
   
    let butter = await addButter;
    console.log("Butter added ::",butter);

    return ticket;

}
preMovie();
