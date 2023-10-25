import React from 'react'
import { useState } from 'react'
import { Container,Form,Row,Col,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { postSham } from '../features/shams/shamSlice';

const AddSham = () => {
    const [goal,setGoal] = useState('');
    const dispatch = useDispatch();
    const {shams,isLoading,isSuccess,isError,message} = useSelector(state=>state.shams)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postSham({goal}))
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
  return (
    <>
        <Container>
            <Row>
                <Col lg={6}>
                    <img style={{width:'100%'}} src="https://www.ntaskmanager.com/wp-content/uploads/2022/11/Measurable-Goals-and-Objectives.png" alt="" />
                </Col>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Goal</Form.Label>
                            <Form.Control value={goal} onChange={(e)=>setGoal(e.target.value)} type="text" placeholder='Enter You Goal...'/>
                        </Form.Group>
                        <Button onClick={handleSubmit} className="btn-success my-3 w-100">Add Goal</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default AddSham;