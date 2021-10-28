const UserCard = ({ avatar, first_name, last_name, email}) => {
    return (
        <>
            <div className="card-wrapper">
                <img src={avatar} alt="avatar" />
                <div className="card-info">
                    <b className="name">{first_name + ' ' + last_name}</b>
                    <p className="email">{email}</p>
                </div>
            </div>
        </>
    )
}

export default UserCard
