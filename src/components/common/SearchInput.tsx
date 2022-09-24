import { FC } from 'react'
import { useLogger } from '../../context/LoggerContext'

const namespace = 'SearchInput'
const SearchInput: FC<{ onChange: (value: string) => void; value: string }> = ({
  onChange,
  value,
}) => {
  const { logger } = useLogger()
  logger(namespace)

  return (
    <input
      value={value}
      placeholder='Search...'
      type='text'
      className='w-full rounded-md px-2 py-3 border border-black/30'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchInput
