// export enum Status {
//     wait = 1,
//     transporting = 2,
//     payNot = 5,
//     cancel = 6,
//     done = 7,

// }

// export enum EmployeeTrans {
//     invrentoryted = 2,
//     finalToNeighCheck = 7,
//     orderPass = 8,
// }

// export enum EmployeeGather {
//     neighToFinallCheck = 3,
//     finalToFinal = 4,
//     finalToFinalCheck = 5,
//     finalToNeigh = 6,
// }

export enum Status {
    wait = 1,   // trans
    inventoryted= 2,   // trans 
    gatherChecked = 3,  // gather
    gatherSend = 4,   // gather 
    gatherPassGatherCheck = 5,  // another gather
    gatherSendTrans = 6,  // another gather
    gatherPassTransCheck = 7,  // another trans
    transSendUser = 8, // another trans
    transporting = 9,  // user
    done = 10,  // user 
    paynot = 11, // user
    cancel = 12,// user
    notdone = 13,
    forget = 14, // user
    
    
}

export enum PointPass {
    none = 1,
    trans = 2,
    gather = 3,
}


export enum Career {
    employeeTrans = "EmTrans",
    employeeGather = "EmGather",
    managerTrans = "MaTrans",
    magegerGather = "MaGather",
    owner = "owner"
}

export enum TypeAdd {
    new = 1,
    old = 0,
}

export enum SelectPoint {
    trans = "trans",
    gather = "gather",
}

export enum Company {
    managerTrans = "MaTran",
    managerGather = "MaGather",
    employeeGather = "EmGather",
    employeeTrans = "EmTrans",
    owner = "own",
    customer = "",
}

export enum SearchColumns {
    description = "description",
    name = "name"
    
}
