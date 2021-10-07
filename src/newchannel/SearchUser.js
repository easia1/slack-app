import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Pic from '../components/pic/Pic';
import '../newchannel/searchuser.css';
import { useRef } from 'react';

import Toast from '../components/toast/Toast';

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

    const [searchValue, setSearchValue] = useState('');

    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false);


    const handleSearchList = (e) => {
        const searchInput = e.target.value;
        setSearchValue(searchInput);
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
        if (addUsers.includes(user)) {
            setShowToast(true);
            setMessage('Please add another user');
            setTimeout(() => {
                setShowToast(false);
            }, 1000);
        } else {
            setAddUsers([...addUsers, user]);
            setUserIds([...userIds, user.id]);
        }

        console.log(addUsers);
        console.log(userIds);
    };

    const clearSearchField = () => {
        setSearchList([]);
        setSearchValue('');
    };

    // const deleteUser = (e) => {
    //     let temp_arr = [...addUsers];
    //     temp_arr.splice(e.target.dataset.index, 1);

    //     let temp_arr2 = [...userIds];
    //     temp_arr2.splice(e.target.dataset.index, 1);
    //     updateIndex(temp_arr, temp_arr2);
    //     console.log(temp_arr);
    //     console.log(temp_arr2);
    // };

    // const updateIndex = (newList, newIdsList) => {
    //     setAddUsers(newList);
    //     setUserIds(newIdsList);
    // };

    return (

        <>
      {showToast ? (
                    <Toast className='toast-message' text={message} />
                ) : (
                    <></>
                )}      
      <div className="input-container">
                <span>Add users</span>
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={handleSearchList}
                    value={searchValue}
                />
            </div>
            {searchList.length != 0 && (
                <div className="newchannel-search-results">
                    {searchList.slice(0, 5).map((user, index) => (
                        <div
                            className="newmsg-search-item"
                            key={index}
                            onClick={() => {
                                addUser(user, index);
                                clearSearchField();
                            }}
                        >
                            <Pic id={user.id} name={user.email} isChip={true} />
                            <span>{user.uid}</span>
                        </div>
                    ))}
                </div>
            )}
            {/* <br />
            <br />
            <br /> */}
            {/* <span>User List:</span> */}
            {/* {addUsers.map((val, index) => {
                return (
                    <div className="select-chip-container" key={index}>
                        <Pic id={val.id} name={val.email} isChip={true} />
                        <span>{val.email}</span>
                        <div
                            className="delete-chip-button"
                            data-index={index}
                            onClick={(e) => deleteUser(e)}
                        >
                            ✕
                        </div>
                    </div>
                );
            })} */}
        </>
    );
};

export default SearchUser;
