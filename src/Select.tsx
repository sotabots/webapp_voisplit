import { MouseEventHandler } from "react"
import Header from './kit/Header'

type TSelect = {
  onBack?: MouseEventHandler<HTMLButtonElement>
}

function Select({ onBack }: TSelect) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-bg">
      <Header onBack={onBack} />
      <div className="px-4">
        <h2>Выберете человека</h2>
      </div>
    </div>
  )
}

export default Select