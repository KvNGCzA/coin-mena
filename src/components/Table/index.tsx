import './index.scss';
import {Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {TableHeaderProps, CardsProps, LoadingOrNoDataProps, TableProps} from './index.interface';
import {Dropdown} from '../Dropdown';
import {DevCard} from '../DevCard';
import {RepoCard} from '../RepoCard';
import {DevData, RepoData} from '../../views/Home/index.interface';
import {OPTIONS, SPOKEN_LANGUAGES, LANGUAGES, NO_DATA_TEXT} from '../Table/index.data';

const isActive = ({isActive}: { isActive: boolean }): string => isActive ? 'button active' : 'button';

const TableHeader = ({setLoading, section}: TableHeaderProps): JSX.Element =>
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
      {section === 'repositories' ? <Dropdown
        type="Spoken Language"
        title="Select a spoken language"
        defaultSelected="English"
        hasSearch
        subTitle="This setting can be updated in your profile settings."
        placeholder="Filter spoken languages"
        options={SPOKEN_LANGUAGES} /> : null}
      <Dropdown
        type="Language"
        title="Select a language"
        defaultSelected="Any"
        hasSearch
        placeholder="Filter languages"
        options={LANGUAGES} />
      <Dropdown
        type="Date Range"
        title="Adjust time span"
        defaultSelected="Today"
        options={OPTIONS}
      />
    </div>
  </div>;

const Cards = ({data, section}: CardsProps) =>
  <Fragment>
    {
      data.map((current, index) =>
        section === 'repositories' ?
          <RepoCard key={current.name} {...current as RepoData} /> :
          <DevCard key={current.avatar} {...current as DevData} index={index + 1} />)
    }
  </Fragment>;

const LoadingOrNoData = ({loading}: LoadingOrNoDataProps) =>
  <p className="no-data">
    {loading ? <i className="fa fa-spinner fa-spin" /> : NO_DATA_TEXT}
  </p>;

export const Table = ({data, setLoading, section, loading}: TableProps): JSX.Element =>
  <div className="table">
    <TableHeader setLoading={setLoading} section={section} />
    {!loading && data.length ?
      <Cards data={data} section={section} /> :
      <LoadingOrNoData loading={loading} />
    }
  </div>;
