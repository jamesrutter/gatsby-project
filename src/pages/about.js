import * as React from 'react'
import { Link } from 'gatsby'


// Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <Link to="/">Home</Link>
            <p>Hi, I am James Rutter. I work at Haystack Mountain School of Crafts as the Fab Lab & Technology Director. Haystack is a non-profit arts organization located in Deer Isle, Maine that runs intensive studio-based programs in various traditional crafts (blacksmithing, woodworking, ceramics, etc.). This is our “year zero” and hope to offer Fab Academy in future years to the local community.</p>
        </main>
    )
}

// Step 3: Export your component
export default AboutPage