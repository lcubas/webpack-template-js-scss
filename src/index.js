import './js/index'; // importing js files
import './scss/main.scss'// importing scss files

// Create example heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

const app = document.querySelector('#root')
app.append(heading)