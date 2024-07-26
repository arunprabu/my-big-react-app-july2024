// Fn Component with Anonymouns function

import MenuList from "./MenuList";

const Footer = function () {
  const copyrightYear = 2024;

  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyrightYear} | Arun</p>
    </footer>
  );
};

export default Footer;
