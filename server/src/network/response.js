/**
 * @param {Object} args
 * @param {import('express').Response} args.response
 * @param {Boolean} args.error
 * @param {Object} args.message
 * @param {Number|undefined} args.status
 */
const response = ({
  response,
  error = true,
  message = 'Internal server error',
  status = 500
}) => {
  response.status(status).send({ error, message })
}

export { response }
