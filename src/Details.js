import {useParams} from "react-router-dom";
import useFetch from "./useFetch";

const Details = ()=>{
    const {id}=useParams()
    const {data:activity,error,isPending}=useFetch('http://localhost:8000/activities/'+id)
    return(
        <div className="detail">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {activity &&(
                <article>
                    <h2>計畫名稱:{activity.title}</h2>
                    <p>限制最低金額:{activity.amount}</p>
                    <div>計畫描述:{activity.describe}</div>
                </article>
            )
            }
        </div>
    );
}
export default Details;