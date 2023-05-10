/* eslint-disable react/prop-types */
const Job = ({ job }) => {
  console.log(job);
  const { company, title, image, location, salary, remote, full_time } = job;
  return (
    <div className="border rounded-md p-5">
      <img src={image} alt={company} className="w-16 mb-5" />
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{company}</p>
      <p>
        {location} {salary}
      </p>
      <button>View Details</button>
    </div>
  );
};

export default Job;
