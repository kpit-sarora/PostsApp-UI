
export interface Posts{
    postid:number,
    title:string,
    postdata:string
}

export interface loadPosts {
      posts : Array<Posts>,
      iserror:boolean,
      isloading:boolean,
      isSignedIn:boolean 
}

export interface UserLogin{
   isAuthenticated : boolean|null
   userEmail:string,
   userName:string,
   isError:boolean,
   isLoading:boolean
}

export interface AddUser{
    isAdded:boolean,
    isError:boolean,
    isLoading:boolean
}


export interface StoreState{
    loadPosts:loadPosts,
    userLogin:UserLogin,
    addUser:AddUser
}