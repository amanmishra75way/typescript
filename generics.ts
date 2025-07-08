//This fn will be returning value of type that will be of input but use unios
function identify(val: string | boolean | number): string | boolean | number {
  return val;
}

// although it will return any time but there may be chances that maybe input would be a no but return type would be string or vice-versa so not prefer any
function identifyTwo(val: any): any {
  return val;
}

function identifyThree<Type>(val: Type): Type {
  return val;
}
