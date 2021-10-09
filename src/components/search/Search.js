import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { userSessionAPI } from '../../api/API';
import { UserContext } from '../../context/UserContext';
import Pic from '../pic/Pic';
import './search.css';

const Search = ({ placeholder, type }) => {
    const {
        channelList,
        allUsers,
        handleSetLoadData,
        setShowContent,
        currentUser,
    } = useContext(UserContext);

    const [searchList, setSearchList] = useState([]);
    const [favoriteUsers, setFavoriteUsers] = useState([]);

    const handleSearchList = (e) => {
        const searchInput = e.target.value;
        if (type === 'channel') {
            const searchFilter = channelList.data.data.filter((channel) => {
                return channel.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });

            if (searchInput === '') {
                setSearchList([]);
            } else {
                setSearchList(searchFilter);
            }
        } else if (type === 'user') {
            const searchFilter = allUsers.data.data.filter((user) => {
                return user.email
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
            });

            if (searchInput === '') {
                setSearchList([]);
            } else {
                setSearchList(searchFilter);
            }
        }
    };

    return (
        <div className='search-container'>
            <div className='search-input-container'>
                <input
                    type='text'
                    placeholder={placeholder}
                    onChange={handleSearchList}
                />
            </div>
            {searchList.length != 0 && (
                <div className='search-results'>
                    {type === 'channel' ? (
                        <>
                            {searchList.map((channel, index) => (
                                <NavLink
                                    className='search-item'
                                    to={`/channel/${channel.id}`}
                                    key={index}
                                    onClick={() => {
                                        handleSetLoadData();
                                        setShowContent(true);
                                    }}
                                >
                                    <Pic
                                        id={channel.id}
                                        name={channel.name}
                                        isChannel={true}
                                    />
                                    <span> {channel.name}</span>
                                </NavLink>
                            ))}
                        </>
                    ) : (
                        <>
                            {searchList.slice(0, 5).map((user, index) => (
                                <NavLink
                                    className='search-item'
                                    to={`/user/${user.id}`}
                                    key={index}
                                    onClick={() => {
                                        handleSetLoadData();
                                        setShowContent(true);
                                        favoriteUsers.push(user);
                                        localStorage.setItem(
                                            currentUser.uid,
                                            JSON.stringify(favoriteUsers)
                                        );
                                    }}
                                >
                                    <Pic
                                        id={user.id}
                                        name={user.email}
                                        isChannel={false}
                                    />
                                    <span> {user.email} </span>
                                </NavLink>
                            ))}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
