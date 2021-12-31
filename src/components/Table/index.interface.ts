import {DevData, RepoData} from '../../views/Home/index.interface';

export interface TableProps {
  data: RepoData[] | DevData[];
  loading: boolean;
  section: string;
  setLoading: Function;
}

export interface TableHeaderProps {
  section: string;
  setLoading: Function;
}

export interface CardsProps {
  data: RepoData[] | DevData[];
  section: string;
}

export interface LoadingOrNoDataProps {
  loading: boolean;
}
