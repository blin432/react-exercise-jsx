





let TextInput = () => {
    // return <span>Make this component render a styled text input tag</span>
    return <div> 
        <input style= {{witdh:500}}/>
        </div>
}

let YesNoRadio = () => {
    // return <span>Make this component render two styled radio button side by side labelled "yes" and "no"</span>
    return <div>
                <input type="radio"/>yes<input type = "radio"/>no
        </div>
}

let SubmitButton = () => {
    // return <span>Make this component render a styled button of type "submit"</span>
    return <button type = "submit" style={{color:"red"}}>submit</button>
}

let Form = () => {
    // return <span>Make this Component render a form tag with 3 text inputs, two yes/no radio buttons, and a submit button </span>
    return <div>
            <TextInput/>
            <YesNoRadio/>
            <TextInput/>
            <YesNoRadio/>
            <TextInput/>
            <SubmitButton/>

           
        </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))