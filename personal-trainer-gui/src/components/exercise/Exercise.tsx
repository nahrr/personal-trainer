import styles from "./exercise.module.scss";
import { BsFillPlayCircleFill, BsCheckCircle } from "react-icons/bs";
import { useState } from "react";

type Args = {
  name: string;
  reps: number;
  sets: number;
  videoUrl?: string;
};

enum CheckBtnEnum {
  initial,
  checked,
  unchecked,
}
const Exercise = ({ name, reps, sets, videoUrl }: Args) => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [isChecked, setIsChecked] = useState<CheckBtnEnum>(
    CheckBtnEnum.initial
  );

  const getIconStyle = () => {
    switch (isChecked) {
      case CheckBtnEnum.initial:
        return styles.init;
      case CheckBtnEnum.checked:
        return styles.checked;
      case CheckBtnEnum.unchecked:
        return styles.unchecked;
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3>{name}</h3>
          <h4>
            {sets} x {reps}
          </h4>
        </div>
        <button
          onClick={() => {
            setIsChecked(
              isChecked === CheckBtnEnum.checked
                ? CheckBtnEnum.unchecked
                : CheckBtnEnum.checked
            );
          }}
        >
          <BsCheckCircle className={`${getIconStyle()}`} />
        </button>
      </div>
      <button
        onClick={() => {
          setDisplayVideo((prev) => !prev);
        }}
      >
        <div className={styles.videoBtnWrapper}>
          <BsFillPlayCircleFill />
          <span>Video</span>
        </div>
      </button>
      {displayVideo && (
        <div className={styles.video}>
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <textarea placeholder="Notes"></textarea>
    </div>
  );
};

export default Exercise;
