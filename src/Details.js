import {useHistory,useParams} from "react-router-dom";
import useFetch from "./useFetch";

const Details = ()=>{
    const {id}=useParams()
    const {data:activity,error,isPending}=useFetch('http://localhost:8000/activities/'+id)
    const history=useHistory()
    const click=()=>{
        fetch('http://localhost:8000/activities/'+activity.id,{
            method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
    }
    return(
        <div className="detail">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {activity &&(
                <article>
                    <h2>計畫名稱:{activity.title}</h2>
                    <p>限制最低金額:{activity.amount}</p>
                    <div>計畫描述:{activity.describe}</div>
                    <button onClick={click}>Delete</button>
                </article>
            )
            }
        </div>
    );
}
export default Details;