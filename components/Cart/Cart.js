import { useContext, Fragment } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";
import {
  faDollarSign,
  faMinusSquare,
  faPlusSquare,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const totalPrice = cartCtx.totalPrice.toFixed(2);

  const hasItems = cartCtx.items.length > 0;

  const redirectToHome = () => {
    router.push("/");
  };

  const redirectToCheckout = () => {
    router.push("/checkout");
  };

  
  return (
    <div className={styles["cart-container"]}>
      {hasItems && (
        <Fragment>
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
                            <FontAwesomeIcon
                              onClick={() => {
                                cartCtx.removeItem(item.id);
                              }}
                              icon={faMinusSquare}
                            />
                          </span>
                          <FontAwesomeIcon
                            onClick={() => {
                              cartCtx.addItem({ ...item, amount: 1 });
                            }}
                            icon={faPlusSquare}
                          />
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
              <button onClick={redirectToCheckout}>Checkout</button>
            </h2>
          </div>
        </Fragment>
      )}
      {!hasItems && (
        <div className={styles["empty-cart"]}>
          Your cart is empty
          <button onClick={redirectToHome}>
            Add to cart <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
