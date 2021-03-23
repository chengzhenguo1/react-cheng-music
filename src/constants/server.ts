const serverAddr = import.meta.env.MODE === 'development' ? 'localhost' : '47.115.57.59'

export const SERVER = `http://${serverAddr}:3000`
