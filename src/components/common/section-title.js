import React from "react"

const SectionTitle = props => {
  return (
    <div className="text-center pt-2 pb-6">
      <h2 className="text-black font-bold text-2xl mb-2">{props.title}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default SectionTitle
