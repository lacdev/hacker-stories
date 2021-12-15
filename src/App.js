import './App.css'

import { useState } from 'react'
//props argument => list attribute on List instantiation =>
//stories array variable on the (parent) App component scope.

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
)

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    props.onSearch(event)
  }

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  )
}

const App = () => {
  const handleSearch = (event) => {
    console.log(event.target.value)
  }

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]

  return (
    <div>
      <h1>My hacker stories</h1>
      <hr />
      <Search onSearch={handleSearch} />
      <List list={stories} />
    </div>
  )
}

export default App
