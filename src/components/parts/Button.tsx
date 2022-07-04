type Color = 'primary' | 'secondary'
interface Props extends React.ComponentPropsWithoutRef<'button'> {
  color?: Color
  styles?: string
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const baseStyle = 'h-8 rounded mx-2 bg-blue-400 text-white text-sm font-light'

const Button = ({
  color,
  styles,
  disabled,
  onClick,
  style,
  children,
  ...props
}: Props) => {
  console.log(typeof children === 'string' ? children.length : 0)
  return (
    <button
      type="button"
      className={[
        baseStyle,
        `w-[calc(16px*8)]`,
        styles,
        `${color ? 'text-blue-300' : ''}`,
        `${disabled ? 'disabled:bg-gray-200 disabled:text-gray-400' : ''}`,
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
