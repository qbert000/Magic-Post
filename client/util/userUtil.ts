
export const convertUserToTable = (listUser : any[]) => {
    if(!Array.isArray(listUser)) return [];
    const user = listUser.map((
        {
            firstName,
            lastName,
            career,
            _id,
        } : {
            firstName : any,
            lastName : any,
            career : any,
            _id : any,
        }) => ({
            id : _id.toString(),
            name : firstName + " " + lastName,
            career,
        })
    )

    return user

}