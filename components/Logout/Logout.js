import styles from "./Logout.module.css";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();
  const redirectToLogin = () => {
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      You were successfully logged out
      <button onClick={redirectToLogin} id={styles["login-button"]}>
        Log Back In
      </button>
    </div>
  );
};

export default Logout;
