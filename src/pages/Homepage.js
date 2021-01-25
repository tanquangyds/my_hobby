import React from 'react';
import { useSelector } from 'react-redux';
import HobbyList from '../Components/Home/HobbyList';
import { useDispatch } from 'react-redux';
import { addNewHobby } from '../actions/hobby'


const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() *9000);
}
const Homepage = (props) => {
    const hobbyList = useSelector(state => state.hobby.list);
    console.log('Array?', hobbyList)
    const dispatch = useDispatch();
    const newID = randomNumber()
    const addHobbyListHandler = () => {
        const newHobby = {
            id: newID,
            title: `hobby + ${newID}`,
        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    return (
        <div className="homepage">
            <h1>Redux hook - Homepage</h1>
            <button onClick={addHobbyListHandler}>Random</button>
            <HobbyList hobbyList={hobbyList}></HobbyList>
        </div>
    )
}

export default Homepage;