import React, { useEffect } from 'react'
import { Card, Container,Col,Row } from 'react-bootstrap'
import {MdOutlineDelete} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getSham } from '../features/shams/shamSlice'
const ShowSham = () => {
const {shams,isLoading,isError,message} = useSelector(state=>state.shams);
const dispatch = useDispatch();
useEffect(() => {
  if (isError) {
    handleShamError(message);
  } else {
    dispatch(getSham());
  }
}, [isError, message, dispatch]);

const handleShamError = (errorMessage) => {
  toast.error(errorMessage); // Display the error message using toast or another error notification method.
}

if(isLoading){
return <h1>Loading...</h1>
}
return (
<>
    <Container>
        <h1 className='display-1 text-center'>Your Shams</h1>
        <Row>
            {shams.sham?.map((shams)=>{
            return (
            
                <Col lg={3} key={shams.id}>
                <Card>
                    <Card.Body>
                        <Card.Title>Your Sham</Card.Title>
                        <Card.Subtitle>{shams.createdAt}</Card.Subtitle>
                        <Card.Text>{shams.sham}</Card.Text>
                        <div className="d-flex justify-content-center">
                            <Card.Link>
                                <MdOutlineDelete className="text-danger" />
                            </Card.Link>
                            <Card.Link>
                                <AiOutlineEdit className="text-info" />
                            </Card.Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            
            )
            })}

        </Row>
    </Container>
</>
)
}

export default ShowSham;