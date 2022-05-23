export const checkIdentityNumber = (value) => {
  return [
    { type: "required" ,},
    { type: "text" },
    // { type: "min", value: 9 },
    // { type: "max", value: 44 },
  ]
}
