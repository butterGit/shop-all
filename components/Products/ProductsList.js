import styles from "./ProductsList.module.css";
import { Fragment } from "react";
import Product from "./Product";


const ProductsList = (props) => {


  return (
   
    <Fragment >
      <div className={styles.filterSideNav}></div>
      <div className={styles.wrapper}>
        <div className={styles["flex-container"]}>
          {props.products.map((product) => (
            <div key={product._id} className={styles["grid-item"]}>
              <Product
                id={product._id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                rate={product.rating.rate}
                count={product.rating.count}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsList;
