import styles from "./ProductsList.module.css";
import { Fragment } from "react";

const DUMMY_PRODUCTS = [{}];

const ProductsList = () => {
  return (
    <Fragment>
      <div className={styles.sidenav}>bla</div>
      <div className={styles.wrapper}>
        <div className={styles["flex-container"]}>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
          <div className={styles["grid-item"]}>One</div>
        </div>
        <div className={styles["flex-container"]}>
          <div className={styles["grid-item"]}>One</div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsList;
