import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TaskForm from './TaskForm';
const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);
    useEffect(() => {
        if (!user) 
            navigate('/login');
        }, 
        [user, navigate]
    );
    return (
        <>
        <section className='heading'>
            <div style = { {display : 'flex', justifyContent : 'center'}}>
                <button className='btn' onClick={() => navigate('/alltasks')}>Your ToDo List</button>
            </div>  
        </section>
        <TaskForm />
        </>
    )
}
export default Dashboard