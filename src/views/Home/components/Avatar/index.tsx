import './index.scss';

export const Avatar = ({avatar, username}: {
  href: string;
  avatar: string;
  username: string;
}) =>
  <div
    className="avatar"
    style={{
      backgroundImage: `url('${avatar}')`
    }}>
    <div className="popover">
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
    </div>
  </div>;
