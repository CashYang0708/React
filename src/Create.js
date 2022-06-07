import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create=()=>{
    const [title,setTitle]=useState();
    const [amount,setAmount]=useState();
    const [describe,setDescribe]=useState();
    const [pending,setPending]=useState(false);
    const history=useHistory();
    function submit(e){
        //e.preventDefault()
        const activity={title,amount,describe}
        alert('新增成功')
        setPending(true)
        fetch('http://localhost:8000/activities',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(activity)
        }).then(()=>{
            setPending(false);
            console.log('New plan added')
        })
    }
    return(
        <div className="create">
            <h1>新增一個計畫</h1>
            <form onSubmit={submit}>
                <label>計畫名稱</label>
                <input type="text" required value={title}
                       onChange={(e)=>setTitle(e.target.value)}/>
                <label>最低金額</label>
                <input type="text" required value={amount}
                       onChange={(e)=>setAmount(e.target.value)}/>
                <label>計畫描述</label>
                <textarea required value={describe}
                          onChange={(e)=>setDescribe(e.target.value)}></textarea>
                {!pending && <button>新增計畫</button> }
                {pending && <button>新增計畫中</button> }
            </form>
        </div>
    )
}
export default Create;