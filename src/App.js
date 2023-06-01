import './App.scss';
import UserManagements from './pages/user-managements';
import BasicInformationForm from './features/user-management/components/basic-information/BasicInformationForm'
import AddUser from './components/input-form/AddUser'
import { AddNote } from './components/add-note/AddNote';

function App() {
  return (
    <div className="App">
      {/* <UserManagements/> */}
      {/* <BasicInformationForm/> */}
      {/* <AddUser/> */}
      <AddNote/>
    </div>
  );
}

export default App;
