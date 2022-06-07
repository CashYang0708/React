import {Link} from "react-router-dom";

const ActivityList=(props)=>{
    const activities=props.activities;
    function click(){
        alert('clicked')
    }
    return(
        <div className="home">
            {activities.map((activity)=>(
                <div className='preview' key={activity.id}>
                    <Link to={`/activity/${activity.id}`}>
                        <h2>計畫名稱:{activity.title}</h2>
                        <p>最低金額:{activity.amount}</p>
                    </Link>
                    <button className="button" onClick={click}>vote</button>
                </div>
            ))}
        </div>
    );
}
export default ActivityList;