import './index.scss';
import {NavLink} from 'react-router-dom';
import {DevCard} from '../DevCard';
import {RepoCard} from '../RepoCard';
import {DevData, RepoData} from '../../data.interface';

interface TableProps {
  data: RepoData[] | DevData[];
  section: string;
  setLoading: Function;
}

const TableHeader = ({setLoading}: { setLoading: Function }): JSX.Element => {
  const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'button active' : 'button';

  return (
    <div className="table-header">
      <div className="left">
        <NavLink to="/repositories" className={isActive} onClick={() => setLoading(true)}>
          repositories
        </NavLink>
        <NavLink to="/developers" className={isActive} onClick={() => setLoading(true)}>
          developers
        </NavLink>
      </div>

      <div className="right">
        sdasdas
      </div>
    </div>
  );
};

export const Table = ({data, setLoading, section}: TableProps): JSX.Element =>
  <div className="table">
    <TableHeader setLoading={setLoading} />
    {data.map((current, index) => section === 'repositories' ?
      <RepoCard key={current.name} {...current as RepoData} /> :
      <DevCard key={current.avatar} {...current as DevData} index={index + 1} />
    )}
  </div>;
