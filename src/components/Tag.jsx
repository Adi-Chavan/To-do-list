import React from 'react'

const Tag = ({ Name, selectTag, selected }) => {

  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#dfe3e6" },
  }


  return (
    <button
      type='button'
      className='tag'
      style={selected ? tagStyle[Name] : tagStyle.default}
      onClick={() => {
        selectTag(Name)
      }}




    >
      {Name}
    </button>
  )
}

export default Tag
