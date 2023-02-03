import { useState } from 'react';
import { useEffect } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [price, setPrice] = useState(0);
  const [success, setSuccess] = useState(false);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const raw = await fetch('http://localhost:8080/city');
      const data = await raw.json();
      setCities(data);
    };
    fetchData();
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8080/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ city, price, firstName, lastName, startDate, endDate }),
    });
    setSuccess(true);
  };
  return (
    <div className='formular'>
      <form action=''>
        <div className='field'>
          <label htmlFor='first-name'>First name</label>
          <input
            id='first-name'
            type='text'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor='last-name'>Last name</label>
          <input
            id='last-name'
            type='text'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor='city'>City</label>
          <select
            id='city'
            value={city}
            onChange={(e) => {
              setPrice(cities[e.target.selectedIndex].price);
              setCity(e.target.value);
            }}
          >
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className='field'>
          <label htmlFor='start-date'>Start date</label>
          <input
            id='start-date'
            type='date'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className='field'>
          <label htmlFor='end-date'>End date</label>
          <input
            id='end-date'
            type='date'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className='field'>
          <input type='submit' value='Send' id='send' onClick={submit} />
        </div>
      </form>
      {success ? <div className='bravo'>Ai reusit</div> : null}
    </div>
  );
}
