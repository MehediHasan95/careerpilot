import social from "../assets/Icons/group-social.png";

const Footer = () => {
  return (
    <footer className="px-2 lg:px-32 p-10 mt-24 bg-raisingBlack text-white">
      <div className="grid gap-3 lg:grid-cols-6">
        <div className="col-span-2 mb-8 lg:mb-0">
          <h1 className="text-3xl font-lobster">CareerPilot</h1>
          <p className="my-3">
            There are many variations of passages <br /> of Lorem Ipsum , but
            the majority have <br /> suffered alteration in some form.
          </p>
          <img src={social} alt="social_icons" className="w-28" />
        </div>
        <div className="col-span-1">
          <h1 className="text-xl mb-5">Company</h1>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            About Us
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Work
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Latest News
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Careers
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-xl mb-5">Product</h1>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Prototype
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Plans & Pricing
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Customers
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Integrations
          </p>
        </div>
        <div className="col-span-1">
          <h1 className="text-xl mb-5">Support</h1>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Help Desk
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Sales
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Become a Partner
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            Developers
          </p>
        </div>

        <div className="col-span-1">
          <h1 className="text-xl mb-5">Contact</h1>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            524 Broadway , NYC
          </p>
          <p className="hover:underline cursor-pointer hover:text-customBlue mb-2">
            +1 777 - 978 - 5570
          </p>
        </div>
      </div>
      <hr className="my-8 border-gray-500" />
      <div className="lg:flex justify-between text-gray-500 text-center">
        <p>Copyright &copy; 2023 CareerPilot. All Rights Reserved</p>
        <p>
          Powered by <span className="font-bold">CareerPilot</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
