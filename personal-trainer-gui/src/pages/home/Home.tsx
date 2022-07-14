import styles from "./home.module.scss";
export const Home = () => {
  return (
    <section className={`${styles.wrapper} inner_page_wrapper`}>
      <div>
        <h1>Shaped</h1>
        <h2>Where the world gets in shape</h2>
        <p>Sign up today</p>
      </div>
    </section>
  );
};
