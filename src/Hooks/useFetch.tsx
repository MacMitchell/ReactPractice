import { useEffect, useState } from "react";
import axios from "axios";
export const useFetch = (name: string) => {
    let isMounted = true;
    const [data, setData] = useState<any>();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        window.fetch(`http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${name}.json`)
            .then(res => res.json())
            .then(data => {
                if (isMounted) {
                    setData(data.data[name])
                    setError(null);
                    //console.log(data.data[name]);
                }
            })
            .catch(error => {
                if (isMounted) {
                    setError(error);
                    setData(undefined);
                }
            })
            .finally(() => isMounted && setLoading(false))

            axios.get(`http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${name}.json`)
                .then(res => console.log(res.data.data[name]));
    }, [name])

    return [data, error, loading];
}