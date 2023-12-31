import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

/** Styles */
import styles from "./style.module.css";

/** Components */
import Table from "../../components/Table"

const Home = () => {

    const [data, setDatas] = useState(null);

    const getData = async () => {
        return axios.get("https://api.currencyfreaks.com/latest?apikey=91d5da79f503405196884e8a20b623b0&symbols=CAD,EUR,IDR,JPY,CHF,GBP");
    };

    useEffect(() => {
        getData().then(res => setDatas(res.data));
    }, []);

    return (
        <div className={styles.container}>
            {
                data ?
                    <>
                        <Table
                            headers={["Currency", "We Buy", "Exchange Rate", "We Sell"]}
                            datas={data.rates}
                        />
                        <small>Rates are based from 1 {data.base}.</small>
                    </>
                    :
                    <InfinitySpin color="white" />
            }

            <small>This application uses API from https://currencyfreaks.com.</small>
        </div>
    );
}

export default Home;
