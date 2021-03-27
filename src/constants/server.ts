const serverAddr = import.meta.env.MODE === 'development' ? 'localhost' : '47.115.57.59'

// eslint-disable-next-line import/prefer-default-export
export const SERVER = `http://${serverAddr}:3000`
