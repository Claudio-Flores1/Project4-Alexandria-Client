import { useNavigate } from 'react-router-dom'
import { signOut } from '../../api/auth'
import { Button, ButtonGroup } from 'react-bootstrap'


const SignOut = (props) => {
    const { clearUser, user } = props

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() => navigate('/'))
            .finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

    return (
        <>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto bye'>
                    <h2>We do hope to see you again very soon!</h2>
                    <img className='signOut-image' src='https://img.nagimg.com/data/115/115762.jpg' />
                        <Button className='signOutButtons' onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button className='signOutButtons' onClick={onCancel}>
                            Cancel
                        </Button>
                </div>
            </div>
        </>
    )
}

export default SignOut
