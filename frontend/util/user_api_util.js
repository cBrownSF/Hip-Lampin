export const fetchUser = id =>{
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
}

export const updateUser = user => {
  debugger;
  return $.ajax({
    url: `/api/users/${user.get('user[id]')}`,
    method: 'PATCH',
    data:  user,
    contentType: false,
    processData: false
  })
}