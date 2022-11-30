import React from 'react'

const ExhibitUpdate = ({ exhibit, handleChange, handleUpdateExhibit }) => {
	return (
		<>
			<input 
            type='text'
            value={exhibit.name}
            // placeholder='Exhibit Name'
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text'
            value={exhibit.date}
            // placeholder='Dates it was created'
            name='type' 
            onChange={handleChange} 
            />
             <input 
            type='text' 
            value={exhibit.artist}
            // placeholder='https://i.imgur.com/exhibitImage.jpg'
            name='type' 
            onChange={handleChange} 
            />
            <input 
            type='text' 
            value={exhibit.picture}
            // placeholder='https://i.imgur.com/exhibitImage.jpg'
            name='type' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateExhibit}>Update Exhibit</button>
		</>
	)
}

export default ExhibitUpdate