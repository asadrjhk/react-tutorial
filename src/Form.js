import React, {Component} from 'react'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
      
        this.setState({
          [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;

        return (
            <div className="ms-5 flex-grow-1 ">
                <h2 className="border-bottom">Add new:</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" class="form-label">Name</label>
                        <input 
                        class="form-control"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="job" class="form-label">Job</label>
                        <input 
                        class="form-control"
                        type="text"
                        name="job"
                        id="job"
                        value={job}
                        onChange={this.handleChange}
                        />
                    </div>
                    <input class="btn btn-primary" type="button" value="Submit" onClick={this.submitForm} />

                </form>
            </div>
        )
    }
}
export default Form