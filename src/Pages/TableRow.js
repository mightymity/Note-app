import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment'

class TableRow extends Component {
  constructor(props){
    super(props);
      this.delete = this.delete.bind(this);
    }
    delete(){
      axios.get('http://localhost:4000/note/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))

      this.props.onDeleteItem(this.props.obj._id);
  }
  render() {

    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {moment(this.props.obj.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
          </td>
          <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;