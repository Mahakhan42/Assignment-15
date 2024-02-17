import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Remove, Update_data } from '../Redux/Action/action';

const Todo = () => {
    const { User_data } = useSelector((state) => state.todoreducers);
    const dispatch = useDispatch();

    const [showview, setShowView] = useState(false);
    const [showviewvalue, setShowViewValue] = useState("");
    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState("");
    const [ind, setInd] = useState("");

    const handleClose = () => {
        setShow(false);
        setUpdate(""); // Clear input field when modal closes
    };

    const handleShow = (todo, index) => {
        setShow(true);
        setUpdate(todo);
        setInd(index);
    };

    const remove = (id) => {
        dispatch(Remove(id));
    };

    const usertask_update = () => {
        dispatch(Update_data(ind, update));
        handleClose();
    };

    return (
        <div className="todo_data col-lg-5 mx-auto mt-2">
            {User_data.map((todo, index) => (
                <div key={index} className="todo_container d-flex justify-content-between align-items-center px-2" style={{ background:'skyblue', borderRadius: '3px', height: '50px', listStyle: 'none', marginBottom: '10px',padding:'20px'}}>
                    <li>{todo}</li>
                    <div className="button col-lg-6 py-2 d-flex justify-content-between align-items-center">
                        <button className='btn-success rounded' onClick={() => handleShow(todo, index)}>Update</button>
                        <button className='btn-danger rounded' onClick={() => remove(index)}>Delete</button>
                        <button className='btn-warning rounded' onClick={() => { setShowView(true); setShowViewValue(todo); }}>Read</button>
                    </div>
                </div>
            ))}
            <Modal show={show} onHide={handleClose}>
                <h3 className='text-center mt-2'>Update Your Task</h3>
                <Modal.Header>
                    <div className="todo">
                        <input  type="text" value={update} name='task' onChange={(e) => setUpdate(e.target.value)} placeholder='Update your Task..'/>
                    </div>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={usertask_update}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showview}>
                <h2 className='text-center'>{showviewvalue}</h2>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowView(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export { Todo };
