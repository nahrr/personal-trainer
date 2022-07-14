import style from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loader_spinner}>
        <div className={style.loader_spinner_inner}></div>
      </div>
    </div>
  );
};
