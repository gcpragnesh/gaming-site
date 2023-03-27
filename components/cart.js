
import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../context/cart-context";
import useRazorpay from "react-razorpay";
import "./cart.css"
const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    const total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_p3NtAmEszxtAXh",
            key_secret:"zeXHsA7naumwkzfnG5fWDCQ3",
            amount: total*100,
            currency: "INR",
            name: "10x Game Store",
            description: "Gaming-Cd-Purchase-Trasaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "om sai pragnesh ganta",
                email: "gcpragnesh@gmail.com",
                contact: "8**677***2"
            
            },
            notes: {
                address: "the 10x academy"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    return (
        <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <article>
                        <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
                        <article>{cartItem.title}</article>
                        <article>{cartItem.price}</article>
                        <button>Remove from cart</button>
                    </article>
                )
            })}
                </section>
                <section className="cart-bill">
                <article>Billing Information</article>
                  {cartData.map((cart)=> {
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total: 5000</article>
                  <button onClick={()=>{razorPayDisplay(5000)}}>Checkout</button>
                </section>
            </section>
           
        </>
    )
}
export default Cart;
