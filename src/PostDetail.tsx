import Navigationbar from "./Navbar";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
import { postDetail } from "./Api";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const PostDetail = () => {
  let route = useParams();
  let id = Object.values(route).toString();

  const [post, setpost] = useState<any>({});
  useEffect(() => {
    postDetail(id).then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      setpost(resp);
    });
  }, [id]);
  return (
    <>
      <Navigationbar />
      <br />
      <Container>
        <Row>
          <Col sm={8}>
            <Card>
            <CardHeader>{post.title}</CardHeader>
              <CardBody>
                <CardText>{post.description}</CardText>
                <p><small>{post.category}</small></p>
              </CardBody>
            </Card>
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

export default PostDetail;
