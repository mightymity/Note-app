import React, { Component } from 'react';
import axios from 'axios';
export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state={
            title: '',
            content: '',
        }
    }
        onChangeTitle(input) {
            this.setState({title: input.target.value});

        }
        onChangeContent(input) {
            this.setState({content: input.target.value});

        }
        onSubmit(input) {
            input.preventDefault();
            const obj = {
                title: this.state.title,
                content: this.state.content
            };
            axios.post('http://localhost:4000/note/add',obj)
                .then(res => console.log(res.data));
            this.setState({
                title: '',
                content: ''
            })
        }
    
    render() {
        return (
            <div style={{marginTop: 15}}>
                <h3>Add Note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className = "form-control" value={this.state.title} onChange={this.onChangeTitle}/>

                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea type="text" className = "form-control"value={this.state.content} onChange={this.onChangeContent}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Create"className = "btn btn-primary"/>
                    </div>
                </form>
            
            </div>
        )
    }
}