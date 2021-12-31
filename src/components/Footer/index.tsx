import {ReactComponent as GitHub} from '../../assets/icons/github.svg';
import './index.scss';
import {LINKS} from './index.data';

export const Footer = (): JSX.Element =>
  <div className="footer">
    <GitHub className="svg-icon" />
    © 2021 GitHub, Inc.
    <ul className="links">
      {LINKS.map(link =>
        <li key={link.text} className="link">
          <a href={link.href}>{link.text}</a>
        </li>
      )}
    </ul>
  </div>;
