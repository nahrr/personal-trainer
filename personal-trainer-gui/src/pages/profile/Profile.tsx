import { useAuth0 } from "@auth0/auth0-react";
import styles from "./profile.module.scss";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <section className={`${styles.wrapper} inner_page_wrapper`}>
      {!isLoading && isAuthenticated && user && (
        <div className={styles.card}>
          <div className={styles.user_info}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
          <div className={styles.img_wrapper}>
            <img src={user.picture} alt={user.name} />
          </div>
          <div className={styles.stats}>
            <p>
              Completed workouts: <span>1337</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
