export const PassTransPointToClient = (transPoint : any) => {
    if(!transPoint) return
    const trans = {
        address : transPoint.address,
        id  : transPoint._id.toString(),
        gatherPoint : transPoint.gatherPoint.toString(),
    }
    return trans

}

export const PassGatherPointToClient = (gatherPoint : any) => {
    if(!gatherPoint) return
    const gather = {
        address : gatherPoint.address,
        id : gatherPoint._id.toString(),

    }
    return gather

}