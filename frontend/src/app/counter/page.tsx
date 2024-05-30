"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:5247/api/counter')
            .then(response => {
                setCount(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the count!', error);
            });
    }, []);

    const incrementCount = () => {
        axios.post('http://localhost:5247/api/counter/increment')
            .then(response => {
                setCount(response.data);
            })
            .catch(error => {
                console.error('There was an error incrementing the count!', error);
            });
    };

    const decrementCount = () => {
        axios.post('http://localhost:5247/api/counter/decrement')
            .then(response => {
                setCount(response.data);
            })
            .catch(error => {
                console.error('There was an error incrementing the count!', error);
            });
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}