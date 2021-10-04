import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Pic from '../components/pic/Pic';
import '../newchannel/searchuser.css';

const SearchUser = ({ type }) => {
    const { currentHeaders, allUsers, currentUser } = useContext(UserContext);

    const [userIds, setUserIds] = useState([]);
    const [searchList, setSearchList] = useState([]);

    const handleSearchList = (e) => {
        const searchInput = e.target.value;
        const searchFilter = allUsers.data?.data.filter((user) => {
            return user.email.toLowerCase().includes(searchInput.toLowerCase());
        });

        if (searchInput === '') {
            setSearchList([]);
        } else {
            setSearchList(searchFilter);
        }
    };
    const addUser = (user) => {
        setUserIds([...userIds, user]);
        console.log(userIds);
    };
    const deleteUser = (user) => {
        userIds.pop(user);
    };
    return (
        <div>
            <div>
                <input
                    type='text'
                    /* placeholder={placeholder} */
                    onChange={handleSearchList}
                />
            </div>
            {searchList.length != 0 && (
                <div className='search-results'>
                    {searchList.slice(0, 5).map((user, index) => (
                        <div
                            className='chip'
                            key={index}
                            onClick={() => {
                                addUser(user);
                            }}
                        >
                            <Pic id={user.id} name={user.email} />
                            {user.uid}
                        </div>
                    ))}
                </div>
            )}
            <br />
            <br />
            <br />
            <span>User List:</span>
            {userIds.map((val) => {
                return (
                    <div className='chip'>
                        <Pic id={val.id} name={val.email} />
                        {val.email}
                        <span className='closebtn' onClick={deleteUser}>
                            &times;
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default SearchUser;
