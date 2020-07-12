import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const searchAPI = async (term: string) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: term,
                    location: "san jose"
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrMessage("Something went wrong");
        }

    }

    useEffect(() => {
        searchAPI('pasta');
    }, []);

    return [searchAPI, results, errMessage];
}