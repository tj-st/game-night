import styles from '../../styles/modules/UpcomingEvent.module.css';

type UpcomingEventProps = {
  eventTitle: string;
  eventGame: string;
  eventDate: string;
  eventPlatform: string;
  eventVoice: string;
};

const UpcomingEvent = (props: UpcomingEventProps) => {
  return (
    <div className={styles.container}>
      <div className="flex items-center pb-4">
        <h1 className={styles.title}>{props.eventTitle}</h1>
        <div className={styles.editbutton}>Edit Event</div>
      </div>
      <div className="pb-4">
        <h1 className={styles.subtitle}>Event Details</h1>
        <div className="font-mono text-xl text-white">
          <p>
            Game:<span>{props.eventGame}</span>
          </p>
          <p>
            When:<span>{props.eventDate}</span>
          </p>
          <p>
            Platform:<span>{props.eventPlatform}</span>
          </p>
          <p>
            Voice:<span>{props.eventVoice}</span>
          </p>
        </div>
      </div>
      <div>
        <h1 className={styles.subtitle}>Invited Players</h1>
        <div className="flex">
          <div className={styles.playerframe}></div>
          <div className={styles.playerframe}></div>
          <div className={styles.playerframe}></div>
          <div className={styles.playerframe}></div>
          <div className={styles.playerframe}></div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
