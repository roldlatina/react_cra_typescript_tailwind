import {
  PropsWithChildren,
  useContext,
  createContext,
  useCallback,
} from 'react'
import { LOGGER_TEXT } from '../constants/logger'

interface ILoggerContext {
  logger: (componentName: string) => void
}

export const LoggerContext = createContext<ILoggerContext>({
  logger: () => {
    //
  },
})

const LoggerProvider = ({ children }: PropsWithChildren<{}>) => {
  const logger = useCallback((componentName: string) => {
    console.log(`${LOGGER_TEXT} ${componentName}`)
  }, [])

  return (
    <LoggerContext.Provider
      value={{
        logger: logger,
      }}>
      {children}
    </LoggerContext.Provider>
  )
}

export default LoggerProvider
export const useLogger = (): ILoggerContext => useContext(LoggerContext)
