

const styleflex = {
    display:"flex",
    flexDirection: "row",
    
};


let FirstComponent = () => {
    // return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    return <div style={styleflex}>
                <div style={{background:"red",height:100,width:100,margin:10}}></div>
                <div style={{background:"green",height:100,width:100,margin:10}}></div>
            </div>   
}


let SecondComponent = () => {
    // return <span>Make this component render like the Windows Logo: <a href="https://goo.gl/images/mY5Qdv" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    return <div style={styleflex}>
                <div style={{background:"blue",height:100,width:100,margin:10}}></div>
                <div style={{background:"yellow",height:100,width:100,margin:10}}></div>
            </div>   
}

let FinalComponent = () => {
    return <div>
        <FirstComponent/>
        <SecondComponent/>
    </div>
}

ReactDOM.render(<FinalComponent />, document.getElementById('root'))