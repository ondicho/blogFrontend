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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { postDetail, updatePostDetail } from "./Api";
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

  // modal
  const [successModal, setsuccessModal] = useState(false);
  const successToggle = () => {
    setsuccessModal(!successModal);
  };
  //

  //   add a post
  const update_post = (e: any) => {
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

      updatePostDetail(id,data).then((res) => {
        let resp = JSON.parse(JSON.stringify(res));
        
      });
      successToggle();
    }
  };
  useEffect(() => {
    postDetail(id).then((res) => {
      let resp = JSON.parse(JSON.stringify(res));
      setpost(resp);
      setTitle(resp.title);
      setCategory(resp.category);
      setDescription(resp.description);
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
          <Col sm={1}></Col>
          <Col sm={5}>
            <h3>Update Post</h3>

            <Form>
              <FormGroup row>
                <Label for="title">Title</Label>
                <br />
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
              <Button onClick={(e)=>update_post(e)}>Submit</Button>
            </Form>

            <Modal isOpen={successModal} toggle={successToggle} centered={true}>
              <ModalHeader>Success</ModalHeader>
              <ModalBody>You have updated the post </ModalBody>
              <ModalFooter>
                <a href={"/" + id}>
                  <Button color="warning" onClick={successToggle}>
                    Ok{" "}
                  </Button>
                </a>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostDetail;
