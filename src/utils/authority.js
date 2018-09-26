const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNTM3OTQxMjY0LCJzdWIiOiJEWjAwMDAxMTMwIn0.Lyqn1p5LO7wbxFSR4KeUQ_zJCxKbQWYPwquIGDhcyds' ;
export function getAccessToken() {
  return localStorage.getItem('accessToken') || token;
}

export function setAccessToken(authority) {
  return localStorage.setItem('accessToken', authority);
}
