import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../provider/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const JobDetail = () => {
  const { id } = useParams();
  const { jobs } = useContext(MyContext);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setDetail(jobs.find((e) => e.id === id));
  }, [id, jobs]);

  return (
    <div className="px-2 lg:px-32">
      <div className="grid gap-5 lg:grid-cols-3 mt-5">
        <div className="lg:col-span-2">
          <p className="mb-5">
            <span className="font-bold">Company: </span>
            {detail?.company}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Description: </span>
            {detail?.description}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Responsibility: </span>
            {detail?.responsibilities}
          </p>
          <div className="mb-5">
            <p className="font-bold">Educational Requirements: </p>
            <p>{detail?.requirements?.education}</p>
          </div>

          <div className="mb-5">
            <p className="font-bold">Skills: </p>
            <p>{detail?.requirements?.skills}</p>
          </div>

          <div>
            <p className="font-bold">Experiences: </p>
            <p>{detail?.requirements?.experience}</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-custombg p-5 rounded-md">
            <h1 className="font-bold">Job Details</h1>
            <hr className="mt-2 mb-5" />
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-customBlue me-2"
                />
                <span className="font-semibold">Employment Status:</span>{" "}
                {detail?.remote ? "Remote" : "Onsite"} (
                {detail?.full_time ? "Full time" : "Part time"})
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faSackDollar}
                  className="text-customBlue me-2"
                />
                <span className="font-semibold">Salary:</span> {detail?.salary}
              </p>

              <p>
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="text-customBlue me-2"
                />
                <span className="font-semibold">Job Title:</span>{" "}
                {detail?.title}
              </p>
            </div>
            <p className="font-bold mt-8">Contact Information</p>
            <hr className="mt-2 mb-5" />
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-customBlue me-2"
                />
                <span className="font-semibold">Phone:</span> {detail?.phone}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-customBlue me-2"
                />
                <span className="font-semibold">Email:</span> {detail?.email}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-customBlue me-2"
                />{" "}
                <span className="font-semibold">Address:</span>{" "}
                {detail?.location_address}
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-customBlue to-customPurple text-white py-2 px-4 rounded-md w-full mt-3">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
