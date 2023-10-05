import bcrypt from "bcrypt";

export const hashpassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (eer) {
    console.log(eer);
  }
};

export const comparePasscode = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
