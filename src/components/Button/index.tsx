import {useCallback, useEffect, useState} from 'react';
import './index.scss';
import {SUGGESTED_LINKS} from './index.data';
import {ReactComponent as ChevronDown} from '../../assets/icons/chevron-down.svg';
import {ReactComponent as Heart} from '../../assets/icons/heart.svg';
import {ReactComponent as Star} from '../../assets/icons/star.svg';
import {ReactComponent as Add} from '../../assets/icons/add.svg';

type ButtonType = 'sponsor' | 'regular' | 'star';

interface Props {
  buttonType: ButtonType;
  text: string;
}

const ButtonDropdown = (): JSX.Element =>
  <div className="button-dropdown">
    <p className="title">Suggested lists</p>
    <ul className="suggested-links">
      {SUGGESTED_LINKS.map(link =>
        <li key={link.text} className="suggested-link">
          <span className="checkbox-border">
            <input
              type="checkbox"
              value={link.text}
              name={link.text.replace(' ', '-')}
              id={link.text.replace(' ', '-')}
            />
          </span>
          <img src={link.icon} className="icon" alt={link.text} />
          <label htmlFor={link.text.replace(' ', '-')}>{link.text}</label>
        </li>
      )}
    </ul>
    <div className="create-list">
      <Add className="svg-icon" /> Create List
    </div>
  </div>;

export const Button = ({buttonType, text}: Props): JSX.Element => {
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
          className="chevron-wrapper"
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
