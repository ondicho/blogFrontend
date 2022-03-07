import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
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
import React, { useEffect, useState } from "react";

import { posts, postForm } from "./Api";

const Posts = () => {
  const [postList, setpostList] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  //   add a post
  const add_post = (e: any) => {
    e.preventDefault();
    if (title === "") {
      alert("please indicate prospect title");
    } else if (category === "") {
      alert("please indicate category");
    } else if (description === "") {
      alert("please indicate description");
    } else {
      let data = new FormData();
      data.append("title", title);
      data.append("category", category);
      data.append("description", description);

      console.log(data);

      postForm(data).then((res) => {
        let resp = JSON.parse(JSON.stringify(res));
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
            {postList.map((key, value) => (
              <>
              <a href={key.id}>
                <Card>
                  <CardBody>
                    <CardText className="postTitle">{key.title}</CardText>
                    <p className="footer">
                      <small>{key.category}</small>
                    </p>
                  </CardBody>
                </Card></a>
                <br />
              </>
            ))}
          </Col>
          <Col sm={6}>
            <Card>
              <CardHeader>Create Post</CardHeader>
              <CardBody>
                <Form>
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
                      <option>Motivation</option>
                      <option>Art</option>
                      <option>Technology</option>
                      <option>Finance</option>
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Posts;
