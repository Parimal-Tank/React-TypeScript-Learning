// type ListProps = {
//     // Example of Passing the string or number type array
//      items: string[] | number[]
//      onClick : (value: string | number) => void
// }

// This is For Dynamic  let's Data type Type is T It is also get the object as parameter
type itemT = {
    id: number,
    first: string,
    last : string
}

type ListProps = {
    // Example of Passing the string or number type array
     items: Array<itemT>
     onClick : (value: any) => void
}

const List = ({ items , onClick } : ListProps) => {
  return (
    <div>
        <h2>List of Items</h2>
        { items.map((item:itemT , index:number) => {
                 return(
                    <div key={item.id} onClick={() => onClick(item) }>
                        {item.first}
                    </div>
                 )
        }) }
    </div>
  )
}

export default List