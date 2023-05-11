import './App.css';
import Container from './components/Container';
import Events from './components/Events';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import Box from './components/context/Box';
import ThemeContextProvider from './components/context/ThemeContext';
import User from './components/context/User';
import { UserContextProvider } from './components/context/UserContext';
import List from './components/generics/List';
import CustomButton from './components/html/Button';
import Text from './components/polymorphic/Text';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import { RandomNumber } from './components/restriction/RandomNumber';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import Toast from './components/templateliteral/Toast';

// import User from './components/state/User';

function App() {
 
   const personName = {
      firstName : 'Parimal',
      lastName : 'Tank',
   }  

   const personList = [
      {
         first : 'Parimal',
         last : 'Tank'
      },
      {
         first: 'Dhrumil',
         last : 'Amrutiya'
      },
      {
         first: 'Kartik',
         last: 'Rana'
      },
      {
         first: 'Jaydeep',
         last: 'Patel'
      }
   ]
   
  return (
    <div className="App">

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' size='sm'>Lable</Text>


      <CustomButton variant='primary' onClick={() => console.log('Clicked')} >
         Primary Button
      </CustomButton>

      <Toast position='center' />


       {/* Example of Generic :  */}
         {/* <List items={['Batman' , 'Superman' , 'Wonder Woman']} onClick={(item) => console.log(item)} />

         <List items={[1 , 2,3]} onClick={(item) => console.log(item)} /> */}
   
         <List items= { [
             {
               id: 1,
               first: 'Bruce',
               last : 'Wayne'
             },
             {
               id: 2,
               first: 'Clark',
               last : 'Kent'
             },
             {
               id: 3,
               first: 'Princess',
               last : 'Diana'
             }
         ]} 
         onClick={(item) => console.log(item)}
         />

         <RandomNumber value={10} isPositive />

        <LoggedIn />
        <br />

        {/* <User /> */}
        <br />

        <Counter />
        <br />

        <Private isLoggedIn={true} component={Profile} />

       {/* Example of Passing a Props */}
       <Greet name='Parimal' messageCount={10} isLogin={false} />

       {/* Pass Object into a Component Example */}
       <Person name={personName} />

       {/* Example of Passing a Array of Object into a Components */}
       <PersonList names={personList} />

       <Status status='success' />

       <Heading>PlaceHolder Text</Heading>

       {/* Example of Passing the text one Component to Children Components */}
       <Oscar><Heading>Oscar Goes to Leonardo Dicpario!</Heading></Oscar>

       <Events handleClick={ (event , id) => {
           console.log('button Click',event)
       }} />

       <Input value='' handleChange={(event) => console.log(event)} />

       {/* Passing the Specific Style to The Component */}
       <Container  style={{ border: '1px solid black' , padding  : '1rem' }} />


       <ThemeContextProvider>
          <Box />
       </ThemeContextProvider>

       <UserContextProvider>
          <User />
       </UserContextProvider>

       <DomRef />
       <MutableRef />

    </div>
  );
}

export default App;
