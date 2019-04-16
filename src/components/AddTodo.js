import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Addtodo extends Component {
    state = {
        todo : ""
    }
    handleChange =(e) =>{
        console.log(e.target.value);
        this.setState({
            todo : e.target.value,
        })
    }
    handleSubmit =(e) =>{
        console.log("the answer",e.target);
        e.preventDefault();
        this.props.Addtodofunc(this.state.todo);
    }

    render(){
        return (
            <div className="container" style={{paddingBottom : '100px',}}>
                <Form inline onSubmit ={this.handleSubmit}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-12">Todo- {' '}</Label>
              <Input type="textarea" name="todo" id="exampleEmail" placeholder="what do you want to do ?" onChange = {this.handleChange} />
            </FormGroup>
            
            <Button>Submit</Button>
          </Form>
            
            </div>  
        )
    }
}


export default Addtodo;