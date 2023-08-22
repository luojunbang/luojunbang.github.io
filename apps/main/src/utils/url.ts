export const getUrl = port => {
  const urls = {
    9001: '/vue-page/',
    9002: '/react-page/',
  }
  return process.env.NODE_ENV === 'development' ? `//localhost:${port}` : urls[port]
}
