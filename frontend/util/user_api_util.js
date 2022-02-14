export const fetchUser = id =>{
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
}

export const updateUser = user => {
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: { user }
  })
}