import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    return (
        <div className='task'>
            <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
            <h2>{task.text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())}</h2>
            <button onClick={() => dispatch(deleteTask(task._id))} className='close'>X</button>
        </div>
        )
 }
export default TaskItem