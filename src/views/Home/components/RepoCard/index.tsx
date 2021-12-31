import './index.scss';
import {Button} from '../Button';
import {ReactComponent as Book} from '../../../../assets/icons/book.svg';
import {ReactComponent as Fork} from '../../../../assets/icons/fork.svg';
import {ReactComponent as Star} from '../../../../assets/icons/star.svg';
import {Avatar} from '../Avatar';
import {RepoData} from '../../data.interface';

const Left = (data: RepoData): JSX.Element =>
  <div className="left">
    <a href={data.url} className="name">
      <p>
        <Book className="book svg-icon" />{data.author} /
        <b> {data.name}</b>
      </p>
    </a>

    <p className="description">{data.description}</p>

    <div className="meta">
      <span className="meta-item">{data.language}</span>
      <span className="hoverable meta-item">
          <Star className="svg-icon" /> {data.stars?.toLocaleString()}
        </span>
      <span className="hoverable meta-item">
          <Fork className="svg-icon" /> {data.forks?.toLocaleString()}
        </span>
      <span className="meta-item">
          <span className="built-by">Built by</span>
        {data.builtBy?.map(
          user => <Avatar {...user} key={user.username} hasPopOver />
        )}
        </span>
    </div>
  </div>;

const Right = (data: RepoData): JSX.Element =>
  <div className="right">
    <div className="btn-group">
      <Button text="Sponsor" buttonType="sponsor" />
      <Button text="Star" buttonType="star" />
    </div>

    <p className="current-period-stars">
      <Star className="svg-icon" />
      {data.currentPeriodStars?.toLocaleString()} stars today
    </p>
  </div>;

export const RepoCard = (data: RepoData): JSX.Element =>
  <div className="repo-card">
    <Left {...data} />
    <Right {...data} />
  </div>;
