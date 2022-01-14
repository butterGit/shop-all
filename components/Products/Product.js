import Image from "next/image";
import styles from "./Product.module.css";
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faStar,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {

  const router = useRouter();

  const redirectToDeatils = () => {
    router.push('/' + props.id)
  }

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
      </div>
  );
};

export default Product;
