//styles
import userEvent from '@testing-library/user-event'
import './Avatar.css'


export default function Avatar({ src, theName }) {
    return (
        <div className="avatar">
            <img src={src} alt = "user avatar" />
            
        </div>
    )
}
