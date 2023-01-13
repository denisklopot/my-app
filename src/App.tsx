import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My Friends"}/>
            Article 1
            <Rating value={3}/>*/}
            <Accordion title={"Menu"} collapsed={false} />
            <Accordion title={"Users"} collapsed={false} />
            {/*Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;