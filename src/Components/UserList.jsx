

const UserList =({users})=> {

        return (<ul className='"list-group'>
      {users.map((user)=>(
        <li className="list-group-itme d-flex justify-content-between align-items-center">
            {user.name}
        </li>
    
     ))};
     </ul>
        );
}

export default UserList;