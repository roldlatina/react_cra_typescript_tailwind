import { useLogger } from '../../context/LoggerContext'

const namespace = 'Loading'
const Loading = () => {
  const { logger } = useLogger()
  logger(namespace)

  return <div>Loading...</div>
}

export default Loading
