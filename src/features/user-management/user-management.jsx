import React from 'react'
import { RolesRightsTable } from './components/roles-and-right/roles-and-right'
import { ClientsTable } from './components/clients/clients'
import { UsersTable } from './components/users/users'
import { UserAccessTable } from './components/user-access-control/user-access-control'
import { ClientsModal } from './components/clients/client-modal/client-modal'

const UserManagement = () => {
  return (
    <div>
        <ClientsTable />
    </div>
  )
}

export default UserManagement