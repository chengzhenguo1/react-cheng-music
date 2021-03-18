const serverAddr = import.meta.env.MODE == 'development' ? '47.115.57.59' : '47.115.57.59'

export const SERVER = `http://${serverAddr}:3000`