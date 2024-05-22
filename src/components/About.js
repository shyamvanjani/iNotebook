import React from 'react'
import './Styles/about.css'

const About = () => {
  
  return (
    <div className="about-container">
    <header className="about-header">
      <h1>About iNotebook</h1>
      <p>Your Personal Digital Notebook</p>
    </header>
    <section className="about-content">
      <h2>Our Mission</h2>
      <p>
        At iNotebook, our mission is to provide you with a seamless and efficient way to keep track of your notes,
        tasks, and ideas. Whether you're a student, professional, or simply someone who loves to stay organized,
        iNotebook is designed to cater to all your note-taking needs.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Easy to use interface</li>
        <li>Secure and private</li>
        <li>Accessible from anywhere</li>
        <li>Organize notes with tags and categories</li>
        <li>Search notes quickly</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        We love to hear from our users! If you have any questions, feedback, or suggestions, feel free to reach out to
        us at <a href="mailto:support@inotebook.com">support@inotebook.com</a>.
      </p>
    </section>
  </div>
  )
}

export default About
