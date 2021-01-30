import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = (props) => {
  const [countries, setCountryList] = useState([]);
  const [capitalSearch, setCapitalSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountryList(response.data))
      .catch((error) => console.log(error));
  }, []);

  let search = countries;

  if (props.search) {
    search = countries.filter(
      (country) =>
        country.name.toLowerCase().includes(props.search.toLowerCase()) ||
        country.region.toLowerCase().includes(props.search.toLowerCase()) ||
        country.capital.toLowerCase().includes(props.search.toLowerCase())
    );
  }

  if (capitalSearch) {
    search = countries.filter((country) =>
      country.capital.toLowerCase().includes(capitalSearch.toLowerCase())
    );
  }

  return (
    <div>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col' style={{ width: "70%" }}>
              Name
            </th>
            <th scope='col' style={{ width: "100%" }}>
              Capital
              <input
                type='text'
                className='form-control'
                placeholder='Search'
                value={capitalSearch}
                onChange={(e) => setCapitalSearch(e.target.value)}
              />
            </th>
            <th scope='col' style={{ width: "100%" }}>
              Region
            </th>
            <th scope='col'> Flag</th>
          </tr>
        </thead>
        {search.map((country, index) => (
          <tbody key={index}>
            <tr>
              <th scope='row'>{index}</th>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.region}</td>
              <td style={{ width: "10px" }}>
                <img
                  className='img-fluid'
                  src={country.flag}
                  alt={country.name}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default CountryList;
