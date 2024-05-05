"use server";

export const newVerification = async (token: any) => {
  console.log(token);
  return { success: "Email sent!", error: "Error" };
};
