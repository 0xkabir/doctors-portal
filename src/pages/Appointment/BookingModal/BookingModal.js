import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const date = format(selectedDate, "PP");
  const { name, slots } = treatment;
  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    const slot = form.slot.value;
    const patientName = form.patientName.value;
    const phone= form.phone.value;
    const email = form.email.value
    const booking = {
        treatment: name,
        appointmentDate: date,
        slot,
        patientName,
        phone,
        email
    }
    console.log(booking)
    setTreatment(null)
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 mt-10">
            <input
              type="text"
              className="input input-bordered w-full"
              value={date}
              disabled
            />
            <select className="select select-bordered w-full font-medium" name="slot">
              {
                slots.map((slot, idx)=><option key={idx} value={slot}>{slot}</option>)
              }
            </select>
            <input
              type="text"
              name="patientName"
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-accent w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
