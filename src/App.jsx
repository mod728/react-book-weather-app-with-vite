import { useState } from "react" 
import Title from "./components/Title"
import Form from "./components/Form" 
import Results from "./components/Results"
import Loading from "./components/Loading" 

const App = () => {
    const [loading, setLoading] = useState(false)
    const [city, setCity] = useState("")
    const [results, setResults] = useState({
        country: "",
        cityName: "",
        temperature: "", 
        conditionText: "",
        icon: ""
    })

    const getWeather = (e) => {
        e.preventDefault() 
        setLoading(true) 
        fetch(`https://api.weatherapi.com/v1/current.json?key=xxxyyyzzz&q=${city}&aqi=no`) 
            .then(res => res.json())  
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
                setLoading(false) 
                setCity("") 
            }) 
            .catch(() => alert("エラーが発生しました。ページをリロードして、もう一度入力してください"))
    }

    return (
        <div className="wrapper">
            <div className="container">
                <Title/> 
                <Form setCity={setCity} 
                      getWeather={getWeather} 
                      city={city}
                />
                {loading ? <Loading/> : <Results results={results}/>}
            </div>
        </div>
    )
}

export default App