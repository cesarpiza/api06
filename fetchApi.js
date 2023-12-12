import { useEffect, useRef, useState } from "react";
import axios from 'axios';

function fetchApi() {
    const page = useRef(0);
    const [list, setList] = useState([]);
    const [hasMoreData, setHasMoreData] = useState(true);

    async function fetch() {
        if (!hasMoreData) return;
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${page.current}&limit=20`);

            const data = [...response.data.results];

            const promises = data.map((item) => {
                return axios.get(item.url)
            })

            const promise = await Promise.all(promises);

            setList(prev => [...prev, ...promise.filter(item => !prev.some(existingItem => existingItem.data.name === item.data.name))]);

            if (response.data.next) {
                page.current += response.data.results.length;
            } else {
                setHasMoreData(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetch();
    }, []);

    return [list, hasMoreData, fetch];
}

export { fetchApi };