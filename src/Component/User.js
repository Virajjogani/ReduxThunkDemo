import React from 'react'

function User({ users }) {
    return (
        <>
            <div>User</div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {users?.map((data) => (
                    <tbody>
                        <tr>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>

    )
}

export default User