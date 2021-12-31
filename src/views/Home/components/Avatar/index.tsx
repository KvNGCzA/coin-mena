import {CSSProperties} from 'react';
import './index.scss';

export const Avatar = ({avatar, username, hasPopOver, styles}: {
  avatar: string;
  username: string;
  hasPopOver?: boolean;
  styles?: CSSProperties
}): JSX.Element =>
  <div
    className="avatar"
    style={{
      ...styles,
      backgroundImage: `url('${avatar}')`
    }}>
    {hasPopOver ? <div className="popover">
      <div className="arrow-down">
        <div className="arrow-down-inner" />
      </div>
      <div
        className="popover-avatar"
        style={{
          backgroundImage: `url('${avatar}')`
        }} />
      <div className="username-cont">
        <p>
          <span className="fullName">chris akanmu</span>
          <span className="username"> {username}</span>
        </p>
        <span></span>
      </div>
    </div> : null}
  </div>;
