import React, { useState } from 'react';
import { Todo } from './Todo';
import { Add } from '../Redux/Action/action';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [data, setData] = useState("");
    const dispatch = useDispatch();

    const addData = () => {
        dispatch(Add(data));
        setData(""); // Clear input field after adding item
    };

    return (
      <>
        <div className="container back">
            <section className='mt-3 text-center'>
                <h3><b><i><u>Enter Your Task</u></i></b></h3>
                <br /><br />
                <div className="todo">
                    <input type="text" value={data} name='task' onChange={(e) => setData(e.target.value)} placeholder='Enter Todo Items...' />
                    <button onClick={addData}>Add Items</button>
                </div>
                <br />
                <Todo />
            </section>
        </div>
        </>
    );
};

export { Home };


