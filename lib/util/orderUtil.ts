
export const passOrderToClient = (listOrder: any[]) => {
    const order = listOrder.map((
        {
          description,
          receiverName,
          city,
          district,
          ward,
          phone,
    
        } : {
          description: any,
          receiverName: any,
          city: any,
          district: any,
          ward: any,
          phone: any,
        })=> ({
          description,
          receiverName,
          city,
          district,
          ward,
          phone,
        })
      )

      return order

}