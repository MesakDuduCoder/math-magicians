import React, { useEffect, useState } from 'react';
import '../css/quotes.css';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': 'NN95259E13YZ0ovCcyfupA==HrGoapCZpfPyBdj6',
      },
    };

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=architecture',
          requestOptions,
        );
        const data = await response.json();
        const newData = `${data[0].quote}\u00A0-\u00A0'${data[0].author}'`;
        setQuote(newData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="quote">
      {error ? (
        <div className="error">
          <h1>Error</h1>
          <p>There was an error cannot show quote</p>
        </div>
      ) : (
        <div className="text">{loading ? <>Loading..</> : <>{quote}</>}</div>
      )}
    </div>
  );
}

export default Quotes;
