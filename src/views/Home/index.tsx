import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {ALLOWED_ROUTES} from './index.data';
import {Footer} from '../../components/Footer';
import {Table} from '../../components/Table';
import {Header} from '../../components/Header';
import {DevData, RepoData} from './index.interface';
import './index.scss';

export const Home = (): JSX.Element => {
  const navigate              = useNavigate();
  const {section}             = useParams();
  const [data, setData]       = useState<RepoData[] | DevData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!ALLOWED_ROUTES.includes(section || '')) {
      navigate(ALLOWED_ROUTES[0]);
      return;
    }

    axios.get(`${process.env.REACT_APP_TRENDS_API}/${section}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(console.log);
  }, [section, navigate]);

  return (
    <div className="page-wrapper">
      <Header />
      <Table
        data={data}
        setLoading={setLoading}
        section={section || ''}
        loading={loading}
      />
      <Footer />
    </div>
  );
};
