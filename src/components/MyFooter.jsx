import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const MyFooter = () => {
  return (
    <footer className="pt-5 text-center">
      <div className=" fs-6 pt-5 pb-3">
        <div className="mb-3">
          <BsFacebook className="mx-2" size={20} />
          <BsInstagram className="mx-2" size={20} />
          <BsTwitter className="mx-2" size={20} />
          <BsYoutube className="mx-2" size={20} />
        </div>

        <div className="d-flex justify-content-center">
          <p className="mx-2">Media</p>
          <p className="mx-2">Privacy</p>
          <p className="mx-2">Contact Us</p>
        </div>

        <p id="firmafooter" className="pt-2 mb-0">
          &copy; 2024-2025 AppMeteo, Inc.
        </p>
      </div>
      <section>
        <p id="firmafooter">
          Dati forniti da <strong>OpenWeather</strong>
        </p>
      </section>
    </footer>
  );
};

export default MyFooter;
