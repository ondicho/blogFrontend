import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Navigationbar from "./Navbar";
import React, { useEffect, useState } from "react";

import {posts } from "./Api" 
const Posts = () => {

    const [postList,setpostList]= useState<any[]>([]);
    
    useEffect(() =>{
        posts().then((res) =>{
            let resp = JSON.parse(JSON.stringify(res));
            setpostList(resp);

        })
    })
  return (
    <>
      <Navigationbar />
      <br />
      <Container>
        <Row>
          <Col sm={8}>
            
          </Col>
          <Col sm={4}>
            <Card body>
              <CardTitle>Create Post</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">Category</Label>
                    <Input type="select" name="select" id="exampleSelect">
                      <option>Motivation</option>
                      <option>Art</option>
                      <option>Technology</option>
                      <option>Finance</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="exampleText">Description</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Posts;
