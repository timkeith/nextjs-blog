/* API example: visit /api/hello
  req is an instance of http.IncomingMessage, plus some pre-built middlewares
  res is an instance of http.ServerResponse, plus some helper functions
*/
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' })
}
