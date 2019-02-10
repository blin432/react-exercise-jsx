let Header = () => {
    return <h1>Design a header for your blog</h1>
}
let Article = () => {
    return <p>Write and design your blog article</p>
}
let Footer = () => {
    return <footer>Design a footer for your blog</footer>
}

let Blog = () => {
    return <div>
        <Header/>
        <Article/>
        <Footer/>
    
    </div>
}


ReactDOM.render(<Blog />, document.getElementById('root'))