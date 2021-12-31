import './index.scss';
import {Button} from '../Button';
import {ReactComponent as Book} from '../../../../assets/icons/book.svg';
import {ReactComponent as Flame} from '../../../../assets/icons/flame.svg';
import {Avatar} from '../Avatar';
import {DevData} from '../../data.interface';

const Right = (): JSX.Element =>
  <div className="right">
    <Button text="Sponsor" buttonType="sponsor" />
    <Button text="Follow" buttonType="regular" />
  </div>;

const Left = (data: DevData): JSX.Element =>
  <div className="left">
    <span>{data.index}</span>
    <Avatar {...data} styles={{
      height: '48px',
      width:  '48px',
      margin: '0 16px'
    }} />
    <div className="name-cont">
      <a href={data.url} className="name">{data.name}</a>
      <a href={data.url} className="username">{data.username}</a>
    </div>
  </div>;

const Center = (data: DevData): JSX.Element =>
  <div className="center">
    <p className="flame">
      <Flame className="flame-icon" /> POPULAR REPO
    </p>
    <a href={data.repo.url} className="repo-link">
      <Book className="svg-icon book-icon" />
      {data.repo.name}
    </a>
    <p className="repo-description">{data.repo.description}</p>
  </div>;

export const DevCard = (data: DevData): JSX.Element =>
  <div className="dev-card">
    <Left {...data} />
    <Center {...data} />
    <Right />
  </div>;
