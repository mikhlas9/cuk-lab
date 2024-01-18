import React, {useState, useEffect} from "react";
import axios from "axios";
import './HomePage.css'

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [inputValue, setInputValue] = useState({
        postText: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValue({ ...inputValue, [name]: value });
    };

    const handelFormSubmit = (e) => {
        e.preventDefault();
     
    axios.post("https://cuklabbackend.onrender.com/submit",inputValue)
    .then(res => {
        // console.log(res);
        alert(res.data.message);
        setInputValue({ postText: '' });
    })
    .catch(function (error) {
        console.log(error);
      });
    }    

    useEffect(() => {
       
        axios.get('https://cuklabbackend.onrender.com/data')
          .then((response) => {
            setPosts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [handleInputChange]);

  return(
    <div className="input_field">
      <h1><a  href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=31&pause=1000&color=000102&repeat=false&random=false&width=435&lines=Welcome+To+Copy-Paste" alt="Typing SVG" /></a></h1>
        // <h1 className="heading">Welcome to CopyPaste</h1>
        <textarea
        type="text"
        name = 'postText'
        value={inputValue.postText}
        onChange={handleInputChange}
        // size="60"  // Adjust the size attribute as needed
        rows="10"
        placeholder="Type something..."
        ></textarea>

        <input type="submit" onClick={handelFormSubmit} value="Submit" />

        <h1>Copy And Paste😁</h1>
      <ul>
        {posts.slice().reverse().map((post) => (
          <li key={post._id}>{post.postText}</li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
