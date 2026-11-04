export function local(path = '') {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export const email = 'abdelrahmanfawaz18@gmail.com';
export const github = 'https://github.com/abdelrahman-fawaz18';
export const linkedin = 'https://www.linkedin.com/in/abdelrahmanfawaz/';
