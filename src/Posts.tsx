import {
  Button,
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import Navigationbar from "./Navbar";
import { useEffect, useState } from "react";

import { posts, postForm } from "./Api";

const Posts = () => {
  const [postList, setpostList] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  //   add a post
  const add_post = (e: any) => {
    e.preventDefault();
    if (title === "") {
      alert("please indicate title");
    } else if (category === "") {
      alert("please indicate category");
    } else if (description === "") {
      alert("please indicate description");
    } else {
      var data = new FormData();
      data.append("title", title);
      data.append("category", category);
      data.append("description", description);

      postForm(data).then((res) => {
        let resp = JSON.parse(JSON.stringify(res));
        setError(resp.detail);
      });
        toggle();
    }
  };

  useEffect(() => {
    posts().then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      setpostList(resp);
    });
  }, []);
  return (
    <>
      <Navigationbar />
      <br />
      <Container>
        <Row>
          <Col sm={6}>
              <h3>Trending Posts</h3>
            {postList.map((key) => (
              <>
                <a href={key.id}>
                  <Card>
                    <CardBody>
                      <CardText className="postTitle">{key.title}</CardText>
                      <p className="footer">
                        <small>{key.category}</small>
                      </p>
                    </CardBody>
                  </Card>
                </a>
                <br />
              </>
            ))}
          </Col>
          <Col sm={1}></Col>
          <Col sm={5}>
            <h3>Create Post</h3>

            <Form>
              <span className="text-center p-2">
                <strong>{error}</strong>
              </span>
              <FormGroup row>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup row>
                <Label for="category">Category</Label>
                <Input
                  type="select"
                  name="select"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>---</option>
                  <option value="Motivation">Motivation</option>
                  <option value="Art">Art</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                </Input>
              </FormGroup>

              <FormGroup row>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="text"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <Button
                className="btn-primary"
                type="submit"
                onClick={(e) => add_post(e)}
              >
                Submit
              </Button>
            </Form>
            <Modal isOpen={modal} toggle={toggle} centered={true}>
              <ModalBody>You have added a post</ModalBody>
              <ModalFooter>
                <a href={"/"}>
                  <Button onClick={toggle}>Cancel </Button>
                </a>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Posts;
