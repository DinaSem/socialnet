export const required = value => {
    if (value) return "";
  return 'Field is required'
}

export const maxLenghtCreator = (maxLength) => (value) =>{
    if (value.length > maxLength) return `Max lenght is ${maxLength} symbols`;
    return ""
}
