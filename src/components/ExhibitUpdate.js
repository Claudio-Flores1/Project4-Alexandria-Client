import React from 'react'

const ExhibitUpdate = ({ exhibit, handleChange, handleUpdateExhibit }) => {
	return (
		<>
			<input 
            type='text' 
            value={exhibit.name} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={exhibit.type} 
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateExhibit}>Update Exhibit</button>
		</>
	)
}

export default ExhibitUpdate