import React from 'react';
import {Button, Col, Container, Input, Row} from 'reactstrap';
import {Facebook, Google, Linkedin, Twitter} from 'react-bootstrap-icons';
import '../Css/signin.css';


function SignIn() {

    return (
        <Container fluid className="p-3 my-5 h-custom">

            <Row>

                <Col col='10' md='6'>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                         className="img-fluid" alt="Sample image"/>
                </Col>

                <Col col='4' md='6'>

                    <div className="d-flex flex-row align-items-center justify-content-center">

                        <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                        <Button floating size='md' tag='a' className='me-2'>
                            <Facebook/>
                        </Button>

                        <Button floating size='md' tag='a' className='me-2'>
                            <Twitter/>
                        </Button>

                        <Button floating size='md' tag='a' className='me-2'>
                            <Linkedin/>
                        </Button>

                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Or</p>
                    </div>

                    <Input wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                    <Input wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                    <div className="d-flex justify-content-between mb-4">
                        <Input type='checkbox' name='flexCheck' value='' id='flexCheckDefault' label='Remember me'/>
                        Remember me
                        <a href="!#">Forgot password?</a>
                    </div>

                    <div className='text-center text-md-start mt-4 pt-2'>
                        <Button className="mb-0 px-5" size='lg'>Login</Button>
                        <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="#!"
                                                                                              className="link-danger">Register</a>
                        </p>
                    </div>

                </Col>

            </Row>

            <Button tag='a' color='none' className='mx-3' style={{color: 'white'}}>
                <Facebook/>
            </Button>

            <Button tag='a' color='none' className='mx-3' style={{color: 'white'}}>
                <Twitter/>
            </Button>

            <Button tag='a' color='none' className='mx-3' style={{color: 'white'}}>
                <Google/>
            </Button>

            <Button tag='a' color='none' className='mx-3' style={{color: 'white'}}>
                <Linkedin/>
            </Button>


        </Container>
    );
}

export default SignIn;