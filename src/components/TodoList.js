import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';



const TodoList = ({ todos, deleteTodo }) => {
    const toPrint = todos.length !== 0 ? todos.map((todo) => {
        return (

            <Col sm="4" key={todo.id}>
                <Card body>
                    <CardTitle>{todo.work}</CardTitle>
                    <CardText>At vero eos et accusamus et iusto odio dig</CardText>
                    <Button onClick={() => { deleteTodo(todo.id) }}>Delete</Button>
                </Card>
            </Col>
        )// eslint-disable-next-line
    }) : <div className="lead" style={{margin: 'auto'}}>Nothing to do today<span role="img">😁😀😀</span></div>

    return (
        <Row>
            {toPrint}

        </Row>
    )

}

export default TodoList;