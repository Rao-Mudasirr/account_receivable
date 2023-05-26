import React from 'react'
import UserManagement from '../features/user-management/user-management'
import Manager from '../features/user-management/components/role_rights_manager/Manager'

const UserManagements = () => {
  return (
    <div>
        {/* <UserManagement/> */}
        <Manager/>
    </div>
  )
}

export default UserManagements