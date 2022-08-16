

const UserList =({users})=> {

        return (<ul className='"list-group'>
      {users.map((user)=>(
        <li className="list-group-itme d-flex justify-content-between align-items-center">
            <h1>{user.username}</h1>
            {user.id}
            {user.name}
            {user.email}
            {user.address}
            {user.street}
            {user.suite}
        </li>
    
     ))};
     </ul>
        );
}

export default UserList;