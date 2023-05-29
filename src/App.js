import './App.scss';
import UserManagements from './pages/user-managements';
import BasicInformationForm from './features/user-management/components/basic-information/BasicInformationForm'
import AddUser from './components/input-form/AddUser'

function App() {
  return (
    <div className="App">
      {/* <UserManagements/> */}
      {/* <BasicInformationForm/> */}
      <AddUser/>
    </div>
  );
}

export default App;
