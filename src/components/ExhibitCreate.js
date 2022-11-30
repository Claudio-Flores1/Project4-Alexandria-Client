import React, { useState } from 'react' 
import { exhibitCreate } from '../api/exhibit'

const ExhibitCreate = ({ user, msgAlert }) => {

    const defaultExhibit = {
        name: '',
        afiliation: ''
    }

    const [exhibit, setExhibit] = useState(defaultExhibit)

    const handleChange = (event) => {
        setExhibit({...exhibit, [event.target.name]: event.target.value})
    }

    const handleCreateExhibit = () => {
        exhibitCreate(exhibit, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Exhibitter',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Exhibit Failure' + error,
                variant: 'danger'
            })
        })
    }

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
					value={exhibit.date}
					name='date'
					onChange={handleChange}
				/>
                <input
					type='text'
					value={exhibit.picture}
					name='picture'
					onChange={handleChange}
				/>
                <input
					type='text'
					value={exhibit.artist}
					name='artist'
					onChange={handleChange}
				/>
                <input
					type='text'
					value={exhibit.museum}
					name='museum'
					onChange={handleChange}
				/>
				<button onClick={handleCreateExhibit}>Create Exhibit</button>
			</>
		)
}

export default ExhibitCreate