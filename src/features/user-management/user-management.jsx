import React from 'react'
import { RolesRightsTable } from './components/roles-and-right/roles-and-right'
import { ClientsTable } from './components/clients/clients'
import { UsersTable } from './components/users/users'
import { UserAccessTable } from './components/user-access-control/user-access-control'
import { ClientsModal } from './components/clients/client-modal/client-modal'
import { BasicInformationForm } from './components/basic-information'

const UserManagement = () => {
  return (
    <div>
        <RolesRightsTable />
        {/* <BasicInformationForm/> */}
    </div>
  )
}

export default UserManagement