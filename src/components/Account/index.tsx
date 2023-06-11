import './index.css'

type TAccount = {
    userName: string,
    userAvatar: string,
    userBio: string
} 

const Account = (props:TAccount) => {
    
    return (
        <div>
            <img className='account-avatar' src={props.userAvatar} alt="Account Avatar" />
            <h3 className="account-name" >{props.userName}</h3>
            <p className="account-bio" >{props.userBio}</p>
        </div>
    )
}

export default Account