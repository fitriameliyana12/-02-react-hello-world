import About from "./about/page";
import Profile from "./about/profile";
import Blog from "./blogs/page";

export default function Home() {
    
    return(
        <div>
        <h1>Welcome to Home</h1> 
        <About />
        <br></br>
        <Profile />
        <br></br>
        <Blog />
        </div>
    );

    
    
  }