import React, { useState } from "react";

const Coin=()=>{
   async function requestAccount(){
      if(window.ethereum){
         console.log("detected")
         try{
            const accounts=await window.ethereum.request({
               method:"eth_requestAccounts",
            })
         }
         catch (error){
            console.log("error connection")
         }
      }
      else{
         console.log("Not connected")
      }
   }
   return(
       <>
           <div className="coin">
            <h1 >MetaMask</h1>
            <button onClick={requestAccount}>Check</button>
           </div>
       </>
   );
}
export default Coin