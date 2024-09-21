let link="https://dog.ceo/api/breeds/image/random";

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
     let fact=randomimage();
     let div=document.querySelector("#box");
     div.backgroundImage=URL(fact);
})

async function randomimage(){
   try{
    let res= await axios.get(link);
   return res.data.message;
   }
   catch(e){
    console.log("error",e);

   }

}