import './index.scss';
import {useCallback, useEffect, useState} from 'react';
import {ReactComponent as ChevronDown} from '../../../../assets/icons/chevron-down.svg';
import {ReactComponent as Heart} from '../../../../assets/icons/heart.svg';
import {ReactComponent as Star} from '../../../../assets/icons/star.svg';
import {ReactComponent as Add} from '../../../../assets/icons/add.svg';

type ButtonType = 'sponsor' | 'regular' | 'star';

const suggestedLinks = [
  {
    icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f52e.png',
    text: 'Future ideas'
  }, {
    icon: 'https://github.githubassets.com/images/icons/emoji/unicode/1f680.png',
    text: 'My stack'
  }, {
    icon: 'https://github.githubassets.com/images/icons/emoji/unicode/2728.png',
    text: 'Inspiration'
  }
];

const ButtonDropdown = (): JSX.Element =>
  <div className="button-dropdown">
    <p className="title">Suggested lists</p>
    <ul className="suggested-links">
      {suggestedLinks.map(link =>
        <li key={link.text} className="suggested-link">
          <input
            type="checkbox"
            value={link.text}
            name={link.text.replace(' ', '-')}
            id={link.text.replace(' ', '-')}
          />
          <img src={link.icon} className="icon" alt={link.text} />
          <label htmlFor={link.text.replace(' ', '-')}>{link.text}</label>
        </li>
      )}
    </ul>
    <div className="create-list">
      <Add className="svg-icon" /> Create List
    </div>
  </div>;

export const Button = ({buttonType, text}: { buttonType: ButtonType; text: string }): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleDropdown = useCallback((e: Event): void => {
    const openDropdown = document.querySelector('.button-dropdown');
    const isChild      = openDropdown?.contains(e.target as Element);

    if (!isChild && showDropdown) {
      setShowDropdown(false);
    }
  }, [showDropdown]);

  useEffect(() => {
    document.addEventListener('click', handleDropdown, false);

    return () => document.removeEventListener('click', handleDropdown);
  }, [handleDropdown]);

  switch (buttonType) {
    case 'star':
      return <button className="star">
        <Star className="svg-icon" />
        {text}
        <span
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <ChevronDown className="svg-icon chevron-down" />
        </span>
        {showDropdown ? <ButtonDropdown /> : null}
      </button>;
    case 'sponsor':
      return <button>
        <Heart className="svg-icon heart" />
        {text}
      </button>;
    default:
      return <button className="">
        {text}
      </button>;
  }
};
