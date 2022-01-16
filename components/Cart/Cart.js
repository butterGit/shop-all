import { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import {
  faDollarSign,
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalPrice = cartCtx.totalPrice.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className={styles["cart-container"]}>
      <div>
        {cartCtx.items.map((item) => (
          <div className={styles["cart-item"]} key={item.id}>
            <Image
              src={item.image}
              alt="Cart item photo"
              width="200"
              height="200"
            />
            <div className={styles["cart-description"]}>
              <h3>
                <div className={styles.separator}>{item.title} </div>
                <div className={styles.separator}>
                  {item.price} <FontAwesomeIcon icon={faDollarSign} />
                  <div className={styles.amount}>
                    x{item.amount}
                    <div className={styles["amount-handler"]}>
                      <span id={styles["minus-button"]}>
                        <FontAwesomeIcon icon={faMinusSquare} />
                      </span>
                      <FontAwesomeIcon icon={faPlusSquare} />
                    </div>
                  </div>
                </div>
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.total}>
        <h2>
          Total Price {totalPrice} <FontAwesomeIcon icon={faDollarSign} />
          <button>Checkout</button>
        </h2>
      </div>
    </div>
  );
};

export default Cart;
