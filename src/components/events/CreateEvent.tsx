import styles from '../../styles/modules/CreateEvent.module.css';

const CreateEvent = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className="pb-4 text-4xl drop-shadow-md text-[#88C6B7]">CREATE A NEW EVENT</h1>
        <div className="text-xl text-[#88C6B7] pb-4">
          <h1>
            GAME
            <input
              className="bg-[#323232] text-[#FFA552] placeholder-[#FFA552] w-full h-12 px-4 mb-2 text-lg rounded-lg focus:shadow-outline"
              type="text"
              placeholder="Game Title"
            />
          </h1>
          <h1>
            DATE
            <input
              className="bg-[#323232] text-[#FFA552] placeholder-[#FFA552] w-full h-12 px-4 mb-2 text-lg rounded-lg focus:shadow-outline"
              type="date"
              placeholder="Pick the date"
            />
          </h1>
          <h1>
            TIME
            <input
              className="bg-[#323232] text-[#FFA552] placeholder-[#FFA552] w-full h-12 px-4 mb-2 text-lg rounded-lg focus:shadow-outline"
              type="time"
              placeholder="Pick the time"
            />
          </h1>
          <h1>
            PLATFORM
            <input
              className="bg-[#323232] text-[#FFA552] placeholder-[#FFA552] w-full h-12 px-4 mb-2 text-lg rounded-lg focus:shadow-outline"
              type="text"
              placeholder="PC / PS4 / XBOX / ETC"
            />
          </h1>
          <h1>
            VOICE
            <input
              className="bg-[#323232] placeholder-[#FFA552] w-full h-12 px-4 mb-2 text-lg rounded-lg focus:shadow-outline"
              type="text"
              placeholder="Discord / FaceTime / ETC"
            />
          </h1>
        </div>
        <div className={styles.editbutton}>Create Event</div>
      </div>
    </div>
  );
};

export default CreateEvent;
