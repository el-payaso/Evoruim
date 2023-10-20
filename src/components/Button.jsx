import React from "react";

const Button = ({title, submit}) => {
    console.log(submit,"----submit")
    
    return (
        <div className='authbtn' onClick={submit} style={{
            backgroundColor: '#AE00FF',
            color:'#FFFFFF',
            textAlign:'center',
            padding:10,
            borderRadius:6,
            fontWeight : '600',
            fontSize:20
        }}>{title}</div>
    )
}

export default Button;