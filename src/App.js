import React from "react";

import { Cards, Chart, CountryPicker, Footer } from "./components";
import styles from "./App.module.css";

import { fetchData } from "./api";

import covidImage from "../src/images/covid.jpg"
import covidImageTwo from "../src/images/covid19.png"

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const FetchedData = await fetchData();

    this.setState({data: FetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({ data: fetchedData, country: country})
  }

  render() {
    const { data, country } = this.state;
 
    return (
      <div className={styles.container}>
       <img className={styles.image} src={covidImageTwo} alt="COVID19Two" />
      <img className={styles.image} src={covidImage} alt="COVID19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer />
      </div>
    );
  }
}

export default App;
