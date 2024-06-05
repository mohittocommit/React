import axios from 'axios';
import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const navigate = useNavigate();
  const handleAddPost = async () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
  
    try {
      const payload = {
        title: title,
        description: description
      }
      const response = await axios.post("http://localhost:9001/posts",payload)
      if(response) {
        navigate("/pages/blog");
      }
      console.log(response.data)
    }catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='page-add-post page'>
        <div className="container mt-5">
          <h1 className="mb-4" >Add Post</h1>
          <form>
            <div className="mb-3">
              <label for="title" className="form-label">Title</label>
              <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" ref={titleRef}/>
            </div>
            <div className="mb-3">
              <label for="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" name="description" rows="4" placeholder="Enter description" ref={descriptionRef}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleAddPost}>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddPost
