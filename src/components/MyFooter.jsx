import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const MyFooter = () => {
  return (
    <footer className="py-5 text-center fixed-bottom">
      <div className=" fs-6  pt-5 pb-3">
        <div className="mb-3">
          <BsFacebook className="me-2 text-secondary" size={20} />
          <BsInstagram className="me-2 text-secondary" size={20} />
          <BsTwitter className="me-2 text-secondary" size={20} />
          <BsYoutube className="me-2 text-secondary" size={20} />
        </div>

        <div>
          <p>Media</p>
          <p>Privacy</p>
          <p>Contact Us</p>
        </div>

        <p className="fs-7 text-secondary pt-2 mb-0">&copy; 2024-2025 AppMeteo, Inc.</p>
      </div>
    </footer>
  );
};

export default MyFooter;
