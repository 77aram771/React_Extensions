import React, {Component} from 'react';
import './App.css';
import Header from './App/Component/Header/';


class App extends Component {

    // changeColor(e) {
    //     window.chrome.tabs.executeScript(null, {code: "document.body.style.backgroundColor='" + e.target.id + "'"});
    // }

    render() {
        return (
            <div className="App" style={{minWidth: '400px'}}>
                <Header/>
            </div>
        );
    }
}

export default App;
