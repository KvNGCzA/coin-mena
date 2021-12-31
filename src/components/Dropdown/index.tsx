import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {DropdownProps} from './index.interface';
import {ReactComponent as ChevronDown} from '../../assets/icons/chevron-down.svg';
import {ReactComponent as Check} from '../../assets/icons/check.svg';
import './index.scss';

export const Dropdown = ({
  type,
  defaultSelected,
  hasSearch,
  subTitle,
  placeholder,
  options,
  title
}: DropdownProps): JSX.Element => {
  const inputRef                              = useRef() as MutableRefObject<HTMLInputElement>;
  const [showDropdown, setShowDropdown]       = useState<boolean>(false);
  const [selected, setSelected]               = useState<string>(defaultSelected);
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);

  const handleDropdown = useCallback((e: Event): void => {
    const openDropdown = document.querySelector('.dropdown-popover');
    const isChild      = openDropdown?.contains(e.target as Element);

    if (!isChild && showDropdown) {
      setShowDropdown(false);
      setFilteredOptions(options);
    }
  }, [showDropdown, options]);

  useEffect(() => {
    document.addEventListener('click', handleDropdown, false);

    return () => document.removeEventListener('click', handleDropdown);
  }, [handleDropdown]);

  useEffect(() => {
    showDropdown && inputRef?.current?.focus();
  }, [showDropdown]);

  const handleSelected = (value: string): void => {
    setSelected(() => {
      setShowDropdown(() => {
        setFilteredOptions(options);
        return false;
      });

      return value;
    });
  };

  const handleSearch = (e: any): void => {
    if (!e.target.value) {
      setFilteredOptions(options);
    } else {
      const regex = new RegExp(e.target.value?.toLowerCase(), 'i');
      const opts  = options.filter(opt => regex.test(opt.toLowerCase()));
      setFilteredOptions(opts);
    }
  };

  const isSelected = (value: string): boolean => value === selected;

  return (
    <div className="dropdown" onClick={() => setShowDropdown(true)}>
      <span>{type}:</span>
      <span className="selected">
        <b className="label">{selected}</b><ChevronDown className="svg-icon" />
      </span>

      {showDropdown ? <div className="dropdown-popover">
        <div className="head">
          <p>{title}</p>
          <p>{subTitle}</p>
        </div>

        <ul>
          {hasSearch ?
            <li className="search-item">
              <input type="text" placeholder={placeholder} ref={inputRef} onChange={handleSearch} />
            </li> : null
          }
          {filteredOptions.map(option =>
            <li key={option} onClick={() => handleSelected(option)}>
              {isSelected(option) ? <Check className="svg-icon" /> : null}
              {option}
            </li>
          )}
        </ul>
      </div> : null}
    </div>
  );
};
