import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";
import background from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  return (
    <div className="hero" style={{backgroundImage: `url(${background})`, backgroundSize:'cover'}}>
      <div className="hero-content flex-col lg:flex-row-reverse lg:w-1/2">
        <img
          src={chair}
          alt="appointment chair"
          className="rounded-lg shadow-2xl"
        />
        <div className="lg:mr-6 lg:w-1/2">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
