import jwt_decode from "jwt-decode";

export function getUserByToken(token) {
  let decoded = jwt_decode(token)["name"];
  return decoded;
}

export function getRoles(token) {
  let decoded = jwt_decode(token);
  let result = [];

  if (!decoded.role) {
    return [];
  }

  //push role ลง array(fix bug role --> "r","o","l","e")
  if (Array.isArray(decoded.role)) {
    result = decoded.role;
  } else {
    result.push(decoded.role);
  }

  return result;
}
