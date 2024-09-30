import { useState } from "react"
import banner from "/banner_home.png"
import style from './CreatePost.module.css'


const CreatePost = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [body, setBody] = useState();
  const [tags, setTags] = useState();
  const [formError, setFormError] = useState();
  

  return (
    <>
    <div>
      <h1>Suas novas Ideias</h1>
      <img src={banner} alt="Banner do Site" />
    </div>
    </>
  )
}

export default CreatePost