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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    postDetail(id).then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      setpost(resp);
      setTitle(resp);
      setCategory(resp);
      setDescription(resp);
    });
  }, [id]);
  return (
    <>
      <Navigationbar />
      <br />
      <Container>
        <Row>
          <Col sm={6}>
            <Card>
              <CardHeader className="postTitle">{post.title}</CardHeader>
              <CardBody>
                <CardText className="postTitle">{post.description}</CardText>
                <p className="footer">
                  <small>{post.category}</small>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col sm={6}>
            <Card body>
              <CardTitle>Update Post</CardTitle>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for="title">Title</Label>
                    <br />
                    <Input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="category">Category</Label>
                    <Input
                      type="select"
                      name="category"
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>---</option>
                      <option>Motivation</option>
                      <option>Art</option>
                      <option>Technology</option>
                      <option>Finance</option>
                    </Input>
                  </FormGroup>

                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
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
