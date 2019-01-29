import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow'
export default class List extends Component {
    constructor(props){
        super(props);
        this.state = {note:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:4000/note')
        .then(response => {
            this.setState({note: response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }
    tabRow(){
        const {note} = this.state;
        console.log(note);
        return note.map((object,i) =>
            <TableRow obj={object} key={i} onDeleteItem={(noteId) => {this.deleteNoteById(noteId)}}/>
        );
    }

    deleteNoteById(id) {
        const {note} = this.state;
        for(let i=0;i<note.length;i++) {
            if (note[i]._id === id) {
                note.splice(i, 1);
            }
        }

        this.setState({note: note});

         
    }
    render() {
        return (
            <div>
          <h3 align="center">Note List</h3>
          <table id="table"className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
        )
    }
}