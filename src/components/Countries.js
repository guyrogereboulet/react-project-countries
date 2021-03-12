import React, { useEffect, useState } from "react";

import axios from "axios"; // importo axios
import Card from "../components/Card";

const Countries = () => {
  const [data, setData] = useState([]); //Metto [] perché mi aspetto un array
  //ordino l'arry di elementi
  const [sortedData, setSortedData] = useState([]);
  //setto solo una chiamata Api
  const [playOnce, setPlayOnce] = useState(true);
  //gestico i numero di paesi di visualizzare
  const [rangeValue, setRangeValue] = useState(40);

  const [selectedRadio, setSelectedRadio]= useState('')
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']

  //per loggare solo una volta lo state dobbiamo fare
  useEffect(() => {

    if(playOnce) {

      axios
      .get(
        "http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => {
        setData(res.data)
        setPlayOnce(false);
      
      
      });


    }
    

    const sortedCountry = () => {
      /* Trasformo il mio array in oggetto */
      const countryObj = Object.keys(data).map((i) => data[i])
      /* Ordino dal minore al più grande */
      const sortedArray = countryObj.sort((a,b) => {
        return b.population - a.population
      });

        sortedArray.length = rangeValue;
        setSortedData(sortedArray)
    };
    sortedCountry();
  }, [data, rangeValue, playOnce]);

  return (
    <div className="countries">

    <div className="sort-container">
    <input type="range" min="1" max="250" value={rangeValue}
    onChange={(e)=> setRangeValue(e.target.value)}
    
    />

    <ul>

    {radios.map((radio)=> {
      return (
        <li key={radio}>
        <input type="radio" value={radio} id={radio} 

        checked= {radio == selectedRadio}
        onChange={(e) => setSelectedRadio(e.target.value)}
        
        />
        <label htmlFor="{radio}">{radio}</label>
        </li>

      );
    })}
    </ul>
    </div>
    <div className="cancel">
    {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Annulla ricerca</h5>}
    </div>
      <ul className="countries-list">
        {sortedData
        .filter((country) => country.region.includes(selectedRadio))
        .map((country) => (
          /*Invio i dati di country nella card*/
          /*è importante mettere una */

          <Card country={country} key={country.name}/>
        ))}
      </ul>
    </div>
  );
};

export default Countries;

//npm i -s axios

/*<li>{country.name}</li>*/
