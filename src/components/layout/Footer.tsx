import { Link } from "react-router-dom";
import { FaBriefcase, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-indigo-600">
              <FaBriefcase className="text-2xl" />
              <span>Smart Job Board</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Find the perfect role, apply with confidence, and step into your dream job.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-indigo-600 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/jobs" className="hover:text-indigo-600 transition-colors">Browse Jobs</Link>
              </li>
              <li>
                <Link to="/saved-jobs" className="hover:text-indigo-600 transition-colors">Saved Jobs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900">For Employers</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">Post a Job</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-600 transition-colors">Resources</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 sm:flex-row text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Smart Job Board. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;