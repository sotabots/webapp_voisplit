type TAvatar = {
  url?: string,
  name?: string,
  size?: number
}

const getLetters = (name?: string) => {
  const letterParts = name ? name.split(' ') : []
  const letters = `${letterParts[0] ? letterParts[0][0] : ''}${letterParts[1] ? letterParts[1][0] : ''}`
  return letters
}

const getColor = (name?: string) => {
  return '#0452C8' // todo: generate
}

function Avatar({ url, name, size = 40 }: TAvatar) {
  const color = getColor(name)
  const backgroundColor = (!url && name) ? color + '22' : '#EEF0F2'
  const letters = (!url && name) ? getLetters(name) : null

  return (
    <div
      className="flex items-center justify-center rounded-full bg-cover bg-center"
      style={{
        width: size,
        height: size,
        backgroundColor,
        backgroundImage: `url(${url})`
      }}
    >
      {letters &&
        <div
          className="uppercase font-semibold text-main"
          style={{
            fontSize: 0.35 * size + 'px',
            lineHeight: 0.6 * size + 'px',
            color
          }}
        >
          {letters}
        </div>
      }
    </div>
  )
}

export default Avatar
