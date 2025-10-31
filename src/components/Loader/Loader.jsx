import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.globalSpinner}>
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loader;
