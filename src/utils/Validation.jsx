export const Validation=(name,email,password)=>{
   const Isname=name!==''
   const IsEmail=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && email!=="")
   const IsPassword=(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password) && password!=="")
  if(!Isname) return "Enter Valid name here"
  if(!IsEmail) return 'Enter valid Email id'
  if(!IsPassword) return "Enter valid password"
  return null
}

export const Validation1=(email,password)=>{
   
   const IsEmail=(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && email!=="")
   const IsPassword=(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password) && password!=="")
   if(!IsEmail) return 'Enter valid Email id'
   if(!IsPassword) return "Enter valid password"

   return null
}

