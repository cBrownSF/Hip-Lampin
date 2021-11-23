export const demoUser = (component) => {
  let user = Object.assign({},component.state.user)
  user.email ="demo@email",
  user.password ='123456'
  
  }
