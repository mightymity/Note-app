import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            title: '',
            content: '',
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:4000/note/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                title: response.data.title,
                content: response.data.content});
        
        })
        .catch(function(error){
            console.log(error);
        })
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
        axios.post('http://localhost:4000/note/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/index');

    }
    render() {
        return (
            <div style={{marginTop: 15}}>
                <h3 align="center">Update Note</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className = "form-control" value={this.state.title} onChange={this.onChangeTitle}/>

                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input type="text" className = "form-control"value={this.state.content} onChange={this.onChangeContent}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value = "Update Note"className = "btn btn-primary"/>
                    </div>
                </form>
            
            </div>
        )
    }
}