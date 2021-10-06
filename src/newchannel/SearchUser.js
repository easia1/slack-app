import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Pic from '../components/pic/Pic';
import '../newchannel/searchuser.css';

const SearchUser = ({ type, placeholder }) => {
    const {
        currentHeaders,
        allUsers,
        currentUser,
        addUsers,
        setAddUsers,
        userIds,
        setUserIds,
    } = useContext(UserContext);

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
    const addUser = (user, index) => {
        setAddUsers([...addUsers, user]);
        setUserIds([...userIds, user.id]);
        console.log(addUsers);
    };
    const deleteUser = (index, e) => {
        addUsers.splice(index, 1);
        setAddUsers([...addUsers]);
        userIds.splice(index, 1);
        setUserIds([...userIds]);
        console.log(userIds);
    };

    return (
        <div>
            <div>
                <input
                    type='text'
                    placeholder={placeholder}
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
                                addUser(user, index);
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
            {addUsers.map((val, index) => {
                return (
                    <div className='chip' key={index}>
                        <Pic id={val.id} name={val.email} />
                        <span>{val.email}</span>
                        <span
                            className='closebtn'
                            onClick={(e) => deleteUser(e, index)}
                        >
                            &times;
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default SearchUser;
