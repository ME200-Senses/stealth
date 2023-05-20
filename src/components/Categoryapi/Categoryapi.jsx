import React, { useEffect, useState } from 'react'
import "./Categoryapi.css"
const Categoryapi = () => {
const catdata = "https://646312614dca1a661353d0ee.mockapi.io/api/Category";
const [cate, setCate] = useState([]);
const fetchUsers = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.length>0){
                setCate(data);
            }
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        fetchUsers(catdata)
    }, [])
  return ( 
    <div className="category">
        <div className='head'>
            <div className="categories">
                    CATEGORIES
                </div>
            <div className="cat_logo"></div>
        </div>
        <div className="category-list">
        {
            cate.map((item, i) => {
                return (
                    <>
                    <div className="subcat" >
                        {item.Name}
                    </div>
                    <div className="subitem">
                        {
                        item.Labels.map((label)=>{
                            return(
                                <div className="subitem_label">
                                    <input type='checkbox'></input> &nbsp;
                                    {label.Name}
                                </div>
                            )
                        })
                        }
                    </div>
                    <br />
                    </>
                )
            })
        }
    </div>
    </div>
  )
}

export default Categoryapi
