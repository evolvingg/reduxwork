export const selectUser=(user) =>{
    console.log("u clicked on user:",user.first);
    console.log("hjgdjsfs");
    return {
       type:"USER_SELECTED",
       payload:user
    };

};