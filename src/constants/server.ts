const serverAddr = import.meta.env.MODE == 'development' ? '123.207.32.32' : '123.207.32.32'

export const SERVER = `http://${serverAddr}:9001`