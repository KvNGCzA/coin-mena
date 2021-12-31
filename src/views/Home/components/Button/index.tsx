import './index.scss';
import {ReactComponent as ChevronDown} from '../../../../assets/icons/chevron-down.svg';
import {ReactComponent as Heart} from '../../../../assets/icons/heart.svg';
import {ReactComponent as Star} from '../../../../assets/icons/star.svg';

type ButtonType = 'sponsor' | 'regular' | 'star';

export const Button = ({buttonType, text}: { buttonType: ButtonType; text: string }): JSX.Element => {
  switch (buttonType) {
    case 'star':
      return <button className="star">
        <Star className="svg-icon" />
        {text}
        <span><ChevronDown className="svg-icon chevron-down" /></span>
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
