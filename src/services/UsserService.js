import axios from "./Customize-axios"



const fetchAllUser = (page)=>{
   return axios.get(`/api/users?page=${page}`);
}

const PostCreatUser = (name,job)=> {
   return axios.post("/api/users",{name,job});
}

const PutEditUser = (name,job)=>{
   return axios.put("/api/users/",{name,job})
}

export {fetchAllUser,PostCreatUser,PutEditUser}