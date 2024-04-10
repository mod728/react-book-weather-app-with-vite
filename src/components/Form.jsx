const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>                
            <input type="text" 
                   name="city" 
                   placeholder="都市名"
                   onChange={e => props.setCity(e.target.value)}
                   value={props.city} 
            />          
            <button type="submit">
                Get Weather
            </button>
        </form> 
    )
}

export default Form