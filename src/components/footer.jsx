import React from 'react';
import '../styles/footer.css';

const Footer = ({ hasResults }) => {
  return (
    <footer className={hasResults ? "footer" : "footer footer-bottom"}>
      <p>&copy; 2024. <a href="https://github.com/08HLEB04DRAKIN2004/SV4LAB4.git">https://github.com/08HLEB04DRAKIN2004/SV4LAB4.git</a></p>
    </footer>
  );
};

export default Footer;
