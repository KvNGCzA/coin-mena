import {ReactComponent as GitHub} from '../../../../assets/icons/github.svg';
import './index.scss';

const links: { text: string; href: string; }[] = [
  {text: 'Terms', href: 'https://docs.github.com/en/github/site-policy/github-terms-of-service'},
  {text: 'Privacy', href: 'https://docs.github.com/en/github/site-policy/github-privacy-statement'},
  {text: 'Security', href: 'https://github.com/security'},
  {text: 'Status', href: 'https://www.githubstatus.com/'},
  {text: 'Docs', href: 'https://docs.github.com/'},
  {text: 'Contact GitHub', href: 'https://support.github.com/?tags=dotcom-footer'},
  {text: 'Pricing', href: 'https://github.com/pricing'},
  {text: 'API', href: 'https://docs.github.com/'},
  {text: 'Training', href: 'https://services.github.com/'},
  {text: 'Blog', href: 'https://github.blog/'},
  {text: 'About', href: 'https://github.com/about'}
];

export const Footer = (): JSX.Element =>
  <div className="footer">
    <GitHub className="svg-icon" />
    © 2021 GitHub, Inc.
    <ul className="links">
      {links.map(link =>
        <li key={link.text} className="link">
          <a href={link.href}>{link.text}</a>
        </li>
      )}
    </ul>
  </div>;
