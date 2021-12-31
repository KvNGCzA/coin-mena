import './index.scss';
import {AvatarProps} from './index.interface';

export const Avatar = ({avatar, username, hasPopOver, styles, author}: AvatarProps): JSX.Element =>
  <div
    className="avatar"
    style={{...styles, backgroundImage: `url('${avatar}')`}}
  >
    {hasPopOver ? <div className="popover">
      <div className="arrow-down">
        <div className="arrow-down-inner" />
      </div>
      <div className="popover-avatar" style={{backgroundImage: `url('${avatar}')`}} />
      <div className="username-cont">
        <p>
          <span className="fullName">{author}</span>
          <span className="username"> {username}</span>
        </p>
      </div>
    </div> : null}
  </div>;
