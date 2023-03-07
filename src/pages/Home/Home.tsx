import styles from "./home.module.scss";

export const Home: () => JSX.Element = () => {
  return (
    <div>
      <h1 className={styles["home"]}>Home</h1>
      <p>A brief look into Tanstack Table and Prime React Table</p>
    </div>
  );
};
