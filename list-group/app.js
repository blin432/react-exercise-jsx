
const style = {
    
    border:'1px solid black',
    width: '300px'
}
 
let ListGroupItem = () => {
    // return <span>Make this component render like a Bootstrap list group item: <a href="https://getbootstrap.com/docs/4.1/components/list-group/" target="_blank">https://goo.gl/images/mY5Qdv</a></span>
    return <div style={style} >
                <p style={{paddingLeft:'20px'}}>lorem ipsum </p>
          </div>

}

let ListGroup = () => {
    // return <span>Make this Component render a handful of ListGroupItems</span>
    return  <div>
                <ListGroupItem/>
                <ListGroupItem/>
                <ListGroupItem/>
            </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))