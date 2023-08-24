export const getUrl = (port: 9001 | 9002) => {
  const urls = {
    9001: '/vue-page/',
    9002: '/react-page/',
  }
  return process.env.NODE_ENV === 'development' ? `//localhost:${port}/` : urls[port]
}
