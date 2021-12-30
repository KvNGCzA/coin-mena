import './index.scss';
import {NavLink} from 'react-router-dom';
import {RepoCard} from '../RepoCard';
import {DevData, RepoData} from '../../data.interface';

interface TableProps {
  data: RepoData[] | DevData[];
}

const TableHeader = (): JSX.Element => {
  const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'button active' : 'button';

  return (
    <div className="table-header">
      <div className="left">
        <NavLink to="/repositories" className={isActive}>
          repositories
        </NavLink>
        <NavLink to="/developers" className={isActive}>
          developers
        </NavLink>
      </div>

      <div className="right">
        sdasdas
      </div>
    </div>
  );
};

export const Table = ({data}: TableProps): JSX.Element =>
  <div className="table">
    <TableHeader />
    {data.map(current => <RepoCard key={current.name} {...current as RepoData} />)}
  </div>;
