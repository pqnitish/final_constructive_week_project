import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Payment({ price }) {
  const diffToast= ()=>{
    toast("Wow so easy!");
   }
    
  const onToken = (token) => {
  
    console.log(token);
  };

  return (
    <div>
      <StripeCheckout
        token={onToken}
        onToken ={diffToast }
        image="https://picsum.photos/id/237/200/300"
        name="Nitish kumar"
        currency="Inr"
        amount={price + "00"}
        stripeKey="pk_test_51NjwYGSIdjSZ6Ir4xpa9bjJxZavIMfyBNWwR9Si2HQ2w0DSfvR1Pa6E4e1KaTXIW5VQKsBhc154ErQCwo80R3yQT00xJiOAquI"
        email="nitish@gmail.com"
      />
      <ToastContainer/>
     
    </div>
  );
}
