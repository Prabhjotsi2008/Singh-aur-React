import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

// DIDN'T WORKED BECAUSE THE FORMAT OF HOW DATA WAS STORED MIGHT NOT MATCH THE RENDER ALGO
// const ReactEle = {
//     type: "a",
//     props: {
//         href: "https://www.google.com",
//         target: "_blank",
//         style: "text-decoration:none; font-size:30px;"
//     },
//     children: "Click me to visit Google"
// }


const anotherEle = (
  <a href="https://www.google.com" target="_blank">Visit Google</a>
)


const anotherUser = "chai aur react";

const reactEle = createElement( // MADE element directly USING createElement by React 
  "a", // type
  {href: "https://www.google.com", target: "_blank"}, // props
  "Click me to visit Google", // the text
  anotherUser // more text added usign variable
)


createRoot(document.getElementById('root')).render(
    reactEle
    // <App/>
)
