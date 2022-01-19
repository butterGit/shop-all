import ImageGallery from "react-image-gallery";
import styles from "./ProductDetails.module.css";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ProductDetails = (props) => {
  const image = props.product.image;
  const cartCtx = useContext(CartContext);

  const images = [
    {
      original: image,
    },
    {
      original: image,
    },
  ];

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.product.id,
      title: props.product.title,
      price: props.product.price,
      image: props.product.image,
      amount: 1,
    });
  };

  return (
    <div className={styles.container}>
      <ImageGallery items={images} />;
      <div className={styles.content}>
        <h1>{props.product.title}</h1>

        <h2>
          {props.product.price} <FontAwesomeIcon icon={faDollarSign} />
        </h2>
        <p>{props.product.description}</p>
        <button id={styles["cart-button"]} onClick={addToCartHandler}>
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
