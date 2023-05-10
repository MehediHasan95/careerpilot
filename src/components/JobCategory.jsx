import icon1 from "../assets/Icons/accounts 1.png";
import icon2 from "../assets/Icons/business 1.png";
import icon3 from "../assets/Icons/social-media 1.png";
import icon4 from "../assets/Icons/chip 1.png";

const JobCategory = () => {
  return (
    <section className="px-2 lg:px-32 mt-24">
      <div className="text-center m-5">
        <h1 className="text-3xl font-bold mb-2">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-4">
        <div className="col-span-1 bg-custombg p-5 rounded-md">
          <img src={icon1} alt="" className="my-4" />
          <h1 className="text-xl font-bold my-1">Account & Finance</h1>
          <p>300 Jobs Available</p>
        </div>
        <div className="col-span-1 bg-custombg p-5 rounded-md">
          <img src={icon2} alt="" className="my-4" />
          <h1 className="text-xl font-bold my-1">Creative Design</h1>
          <p>100+ Jobs Available</p>
        </div>
        <div className="col-span-1 bg-custombg p-5 rounded-md">
          <img src={icon3} alt="" className="my-4" />
          <h1 className="text-xl font-bold my-1">Marketing & Sales</h1>
          <p>150 Jobs Available</p>
        </div>
        <div className="col-span-1 bg-custombg p-5 rounded-md">
          <img src={icon4} alt="" className="my-4" />
          <h1 className="text-xl font-bold my-1">Engineering Job</h1>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </section>
  );
};

export default JobCategory;
