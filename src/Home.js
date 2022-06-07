import {useState,useEffect} from "react";
import ActivityList from "./ActivityList";
import useFetch from "./useFetch";

const Home=()=>{
    const {data:activities,ispending,error}=useFetch('http://localhost:8000/activities')
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {ispending && <div>Loading...</div>}
            {activities && <ActivityList activities={activities}/>}
        </div>
    );
}
export default Home;