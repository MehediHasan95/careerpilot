import person from "../assets/all-images/banner.png";

const Header = () => {
  return (
    <section className="px-2 lg:px-32 bg-custombg pt-8">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="col-span-1 flex items-center">
          <div>
            <h1 className="text-5xl lg:text-8xl font-bold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-customBlue">Dream Job</span>
            </h1>
            <p className="my-3">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="bg-gradient-to-r from-customBlue to-customPurple text-white py-2 px-4 rounded-md">
              Get Started
            </button>
          </div>
        </div>
        <div className="col-span-1">
          <img src={person} alt="person" />
        </div>
      </div>
    </section>
  );
};

export default Header;
