import React, { useEffect, useState } from 'react'
import "./fileapi.css"
import UsersData from '../UsersData/UsersData';
const datas = "https://646312614dca1a661353d0ee.mockapi.io/api/Files";
const Fileapi = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            if(data.length>0){
                setUsers(data);
            }
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchUsers(datas)
    }, [])
  return (
    <div className="files">
                <div className="filemain">
                    All Items
                </div>
                <div className="item">
                    <table className='table' >
                        <thead className='r1'>
                            <tr >
                                <th className='rc1'>{<input type="checkbox" className='rcc1'/>}</th>
                                <th className='rc2'>NAME</th>
                                <th className='rc3'>OWNER</th>
                                <th className='rc4'>LABELS</th>
                                <th className='rc5'>TYPE</th>
                                <th className='rc6'>MODIFIED</th>
                                <th className='rc7'>ACTION</th>
                            </tr>
                        </thead>
                        </table>
                        <div className="border"></div>
                        <div className='tablebody'>
                            <table>
                                <tbody >
                                    <UsersData users={users}/>                        
                                </tbody>
                            </table>
                        </div>
                        
                    
                </div>
    </div>
  )
}

export default Fileapi
