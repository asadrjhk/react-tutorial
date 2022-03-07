import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

import Header from './Header'

class App extends React.Component {
    state = {
        characters: [],
    }
    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }
    render() {
        const { characters } = this.state

        return (
            <div className="container-fluid p-0">
                <Header/>
                <div className="d-sm-flex mt-5 p-5">
                    <div className="flex-grow-1">
                        <h2 className="border-bottom">List of characters:</h2>
                        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                    </div>
                    <Form handleSubmit={this.handleSubmit} />
                </div> 
            </div>
             
        )
    }
}
export default App