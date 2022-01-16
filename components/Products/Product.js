import Image from "next/image";
import { useContext } from 'react';
import styles from "./Product.module.css";
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faStar,
  faUserPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import CartContext from '../../store/cart-context'

const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const router = useRouter();

  const redirectToDeatils = () => {
    router.push('/' + props.id)
  }

  const addToCartHandler = (e) => {
    e.stopPropagation();
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      amount: 1,
    });
  };


  return (
      <div className={styles.product} onClick={redirectToDeatils}>
        <h2>{props.title}</h2>
        <Image
          className={styles.image}
          src={props.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <h3 className={styles.center}>
          {props.price} <FontAwesomeIcon icon={faDollarSign} />
        </h3>

        <h3 className={styles.center}>Rating</h3>
        <div className={styles.rating}>
          <div>
            {props.rate} <FontAwesomeIcon icon={faStar} />
          </div>
          <div>
            <FontAwesomeIcon icon={faUserPlus} /> {props.count}
          </div>
         
        </div>
        <button id={styles["cart-button"]} onClick={addToCartHandler}>
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
  );
};

export default Product;
