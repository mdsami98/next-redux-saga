import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/auth/authReducer";
import SideBar from '../SideBar'
const UserLayout = (props) => {
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   if(window.localStorage.getItem("user") !=null){
  //   dispatch(loginSuccess(JSON.parse(window.localStorage.getItem("user"))))

  //   }
  // }, [])

  return (
    <div className="flex">
      <SideBar/>
      <div className="h-screen flex-1 p-7">{props.children}</div>
    </div>
  );
};
export default UserLayout;
