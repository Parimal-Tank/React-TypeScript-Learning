import { names } from "./Person.types"

type PersonListProps = {
    names : names[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
       {
          props.names.map(person => {
             return (
                <h2>{person.first} {person.last}</h2>
             )
          })
       }
    </div>
  )
}

export default PersonList
