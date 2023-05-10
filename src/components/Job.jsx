import { faLocationDot, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* eslint-disable react/prop-types */
const Job = ({ job }) => {
  //   console.log(job);
  const { company, title, image, location, salary, remote, full_time } = job;
  return (
    <div className="border rounded-md p-5">
      <img src={image} alt={company} className="w-16 mb-5" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{company}</p>

      <div className="my-3">
        <button className="border border-customBlue text-customBlue font-semibold py-1 px-5 rounded-md me-1">
          {remote ? "Remote" : "Onsite"}
        </button>
        <button className="border border-customBlue text-customBlue font-semibold py-1 px-5 rounded-md ms-1">
          {full_time ? "Full Time" : "Part Time"}
        </button>
      </div>

      <p className="my-3">
        <span className="me-3">
          <FontAwesomeIcon icon={faLocationDot} /> {location}
        </span>
        <span className="ms-3">
          <FontAwesomeIcon icon={faSackDollar} /> {salary}
        </span>
      </p>
      <button className="bg-gradient-to-r from-customBlue to-customPurple text-white py-2 px-4 rounded-md">
        View Details
      </button>
    </div>
  );
};

export default Job;
