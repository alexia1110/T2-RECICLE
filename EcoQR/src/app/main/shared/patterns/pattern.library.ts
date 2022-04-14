
export const listPatterns = {
  // tslint:disable-next-line: max-line-length
  email: new RegExp(/^[a-zA-Z0-9]+((?:\.[a-zA-Z0-9]+)|(?:\_[a-zA-Z0-9]+)|(?:\-[a-zA-Z0-9]+))*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z-\-0-9]+\.)+[a-zA-Z-]{2,}))$/),
  serialNumber: new RegExp(/(^-?\d{3}\.{1}\d{3}\.{1}\d{3}$)|(^A\d{9}$)/),
  serialNumber2: new RegExp(/(^A\d{13}$)/),
  alphaNumeric: new RegExp(/^[0-9a-zA-Z]+$/),
  rutValidator: new RegExp(/[^0-9kK]+/g),
  cellPhone: new RegExp(/^[0-9]*$/),
  onlyNumber: new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g),
  noSpecialCharacter: new RegExp(/^[a-zA-Z0-9_ ]*$/),
  withSpecialCharacter: new RegExp('^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ \s]*$'),
};
