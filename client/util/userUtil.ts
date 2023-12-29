
export const convertUserToTable = (listUser : any[]) => {
    if(!Array.isArray(listUser)) return [];
    const user = listUser.map((
        {
            firstName,
            lastName,
            career,
            _id,
            workPlace,
        } : {
            firstName : any,
            lastName : any,
            career : any,
            _id : any,
            workPlace : any,
        }) => ({
            id : _id.toString(),
            name : firstName + " " + lastName,
            career,
            workPlace : workPlace.toString(),
        })
    )

    return user

}

export const tachnhanh = (listranspoint : any[]) => {
    let listOver : any[] = []
    const newlistrans = listranspoint.map(({
        address,
        manager,
        employeer,
        
    } : {
       address : string,
        manager : any[],
        employeer : any[],
       
    }) => {
        const lmanager = mergeEmployFormTransPoint(manager, address)
        const lemployee = mergeEmployFormTransPoint(employeer, address)
        const list = lmanager.concat(lemployee)

        return list

    })
    // number[] = trans.reduce((acc, val) => acc.concat(val), []);
    const newlist : any[] = newlistrans.reduce((acc, val) => acc.concat(val),[])
    return newlist
}


export const mergeEmployFormTransPoint = (transpoint : any[], address : string) => {
    if(!Array.isArray(transpoint)) return [];
    const user = transpoint.map((
        {
            firstName,
            lastName,
            career,
            _id,
            workPlace,
            active,
        } : {
            firstName : any,
            lastName : any,
            career : any,
            _id : any,
            workPlace : any,
            active : any,
        }) => ({
            id : _id.toString(),
            name : firstName + " " + lastName,
            career,
            workPlace : workPlace.toString(),
            address : address,
            active : active,
        })
    )

    return user

}

