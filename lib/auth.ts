import bcrypt from "bcrypt"


export const hashPassword = (password) => {
  bcrypt.hash(password , 10)
}

const comparePassowords = (plainTextPassword , hashedPassword) => {
    bcrypt.compare(plainTextPassword , hashedPassword)

}
