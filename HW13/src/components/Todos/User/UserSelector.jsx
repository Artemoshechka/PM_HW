import React from 'react'

const UserSelector = ({users, onUserChanged}) => {

    const onUserSelected = (event) => {
        onUserChanged(event.target.value)
    }

    return <div className='selector'>
        <select name="users" onChange={onUserSelected}>
            {
                users.map((data) =>
                    <option value={data.id}>{data.name}</option>
                )
            }
        </select>
    </div>
}

export default UserSelector