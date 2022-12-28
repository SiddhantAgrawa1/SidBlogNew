import React from "react";
import axios from 'axios';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/blog.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const Blog = () => {

    const [data,setData] = React.useState("")
    const [formData, setFormData] = React.useState({
        name : "",
        comment : ""
    })

    const {name} = useParams()

    const fetchData = () => {
        axios.get(`/blog/${name}`).then((response) => {
            setData(response.data.data)
            // console.log(response.data.data)
        })
    } 

    useEffect(() => {
        fetchData();
    },[])
    
    const AddNewComment = async() => {
        console.log(formData)
        axios.post('/comment',{...formData, title : data.title}, {
            headers : {
                'content-type': "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            console.log(response)
            setFormData({name : "", comment : ""})
            fetchData()
            // console.log(formData)
        })

    }

    return (
        <>
        {data != "" ? 
            <div className="container article-container">
                <h1 className="text-center heading">{data.title}</h1>
                <pre className="article">{data.content}</pre>
                <Form className="comment-form">
                    <h3>Comment your thoughts</h3>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={(event) => setFormData({...formData, name : event.target.value})}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Thoughts</Form.Label>
                        <Form.Control type="text" id="comment" placeholder="Enter your thoughts" value={formData.comment} onChange={(event) => setFormData({...formData, comment : event.target.value})}/>
                    </Form.Group>
                    
                    <Button variant="primary" onClick={() => AddNewComment()}>
                        Submit
                    </Button>
                </Form>
                <h4 style={{"marginBottom" : "30px"}}>Comments</h4>
                {data.comments.map((data,index) =>{
                    return(
                        <div key={index} className="comments">
                            <h6>{data[0].name}</h6>
                            <p>{data[0].comment}</p>
                            <hr />
                        </div>
                    )
                })}
            </div> 
            :
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>} 
        </>
    )
}

export default Blog;