import CartContext from "../../store/cart-context";
import { useContext, useRef } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Checkout.module.css";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Checkout = (props) => {
  const router = useRouter();

  const nameInputRef = useRef();
  const surnameInputRef = useRef("");
  const emailInputRef = useRef("");
  const phoneInputRef = useRef("");
  const addressInputRef = useRef("");
  const cartCtx = useContext(CartContext);
  const totalPrice = cartCtx.totalPrice.toFixed(2);

  const handleSubmit = (event) => {

  
    const enteredName = nameInputRef.current.value;
    const enteredSurname = surnameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const orderDetails = {
      name: enteredName,
      surname: enteredSurname,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
      items: cartCtx.items,
    };


    props.newOrderHandler(orderDetails);

    
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.items}>
        {cartCtx.items.map((item) => (
          <div className={styles.item} key={item.id}>
            <Image
              src={item.image}
              alt="Cart item photo"
              width="100"
              height="100"
            />
            <div className={styles["details"]}>
              <div className={styles.separator}>{item.title} </div>
              <div className={styles.separator}>
                {item.price} <FontAwesomeIcon icon={faDollarSign} />
                <div className={styles.amount}>x{item.amount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.total}>
        <h3>
          {totalPrice}
          <FontAwesomeIcon icon={faDollarSign} />
        </h3>
      </div>

      <form onSubmit={handleSubmit} className={styles.form} action = '/'>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          placeholder="Enter your first name here"
          ref={nameInputRef}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          ref={surnameInputRef}
          type="text"
          id="last-name"
          placeholder="Enter your last name here"
        />

        <label htmlFor="email">Email</label>
        <input
          ref={emailInputRef}
          type="email"
          id="email"
          placeholder="Enter your email here"
        />

        <label htmlFor="phone">Phone</label>
        <input
          ref={phoneInputRef}
          type="tel"
          id="phone"
          placeholder="Enter your phone here"
        />

        <label htmlFor="address">Address</label>
        <input
          ref={addressInputRef}
          type="tel"
          id="address"
          placeholder="Enter your phone here"
        />

        <button id={styles["submit-button"]} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Checkout;
