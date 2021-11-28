import jwt_decode from 'jwt-decode';

function decodeToken(token) {
  const decoded = jwt_decode(token);
  const userName = decoded.name.includes(' ')
    ? decoded.name.substr(0, decoded.name.indexOf(' '))
    : decoded.name;
  return { userId: decoded.id, userName };
}

export default decodeToken;
