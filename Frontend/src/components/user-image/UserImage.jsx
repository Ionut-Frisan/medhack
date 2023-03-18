import './UserImange.scss'

const UserImage = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className={'user-image'}/>
    );
};

export default UserImage;