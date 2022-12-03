import React from 'react'

const ExhibitUpdate = ({ exhibit, handleChange, handleUpdateExhibit }) => {
	return (
		<>
			<input 
            value={exhibit.name}
            placeholder='Exhibit Name'
            name='name' 
            onChange={handleChange} 
            />
			<input 
            value={exhibit.date}
            placeholder='Dates it was created'
            name='date' 
            onChange={handleChange} 
            />
            <input 
            value={exhibit.info}
            placeholder='Exhibit Info'
            name='info' 
            onChange={handleChange} 
            />
             <input 
             
            value={exhibit.artist}
            placeholder='Artist'
            name='artist' 
            onChange={handleChange} 
            />
            <input  
            value={exhibit.picture}
            placeholder='https://i.imgur.com/exhibitImage.jpg'
            name='picture' 
            onChange={handleChange} 
            />
             <input  
            value={exhibit.museum}
            placeholder='Museum name'
            name='museum' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateExhibit}>Update Exhibit</button>
		</>
	)
}

export default ExhibitUpdate