import ImageGallery from "react-image-gallery";
import styles from "./ProductDetails.module.css";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductDetails = (props) => {
  const image = props.product.image;
  const images = [
    {
      original: image,
    },
    {
      original: image,
    },
  ];

  return (
    <div className={styles.container}>
      <ImageGallery items={images} />;
      <div className={styles.content}>
        <h1>{props.product.title}</h1>

        <h2>
          {props.product.price} <FontAwesomeIcon icon={faDollarSign} />
        </h2>
        <p>{props.product.description}</p>
        <button id={styles["cart-button"]}>
          Add to cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
