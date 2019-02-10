const style = {
    height:100,
    width:100
}
 
let ProfilePic = () => {
    return <div>
            <img src ="https://www.akc.org/wp-content/themes/akc/component-library/assets/img/welcome.jpg" style={style}/>
        </div>
}

let CommentBody = () => {
    return <div>
            <b>Make this component render a username in bold above the comment text</b>
            <p>comments</p>
            </div>
            
}

let Comment = () => {
    return <div>
            <ProfilePic/>
            <CommentBody/>
            </div>
}

let Comments = () => {
    return <div>
            <Comment/>
           </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))