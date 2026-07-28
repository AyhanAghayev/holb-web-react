import './Footer.css';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

function Footer({ isIndex = false }) {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(isIndex)}
      </p>
    </footer>
  );
}

export default Footer;
