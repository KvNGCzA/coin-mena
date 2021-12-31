import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {Table} from './components/Table';
import {Header} from './components/Header';
import {DevData, RepoData} from './data.interface';
import './index.scss';

export const Home = (): JSX.Element => {
  const {section = 'repositories'} = useParams();
  const [data, setData]            = useState<RepoData[] | DevData[]>([]);
  const [loading, setLoading]      = useState<boolean>(true);

  useEffect(() => {
    axios.get(`https://private-11637-githubtrendingapi.apiary-mock.com/${section}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(console.log);
  }, [section]);

  return (
    <div className="page-wrapper">
      <Header />
      {loading ?
        null :
        <Table
          data={data}
          setLoading={setLoading}
          section={section}
        />
      }
    </div>
  );
};
