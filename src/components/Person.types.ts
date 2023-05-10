export type names = {
    first : string
    last : string
}

type Name = {
    firstName : string
    lastName : string
}


// we can define the Types into a Separate File so that we can easy to modify 
export type PersonProps = {
    name : Name
}
