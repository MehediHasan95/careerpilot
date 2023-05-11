import { useEffect, useState } from "react";

const JobCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <section className="px-2 lg:px-32 mt-24">
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold mb-2">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {category.map((e) => (
          <div key={e.id} className="col-span-1 bg-custombg p-5 rounded-md">
            <img src={e.img} alt="" className="my-4" />
            <h1 className="text-xl font-bold my-1">{e.title}</h1>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
