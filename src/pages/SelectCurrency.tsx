import { useHapticFeedback } from '@vkruglikov/react-telegram-web-app'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import Divider from '../kit/Divider'
import Header from '../kit/Header'
import RadioButton from '../kit/RadioButton'
import Screen from '../kit/Screen'

import { useInit } from '../hooks'
import { TCurrencyId } from '../types'
import { useStore } from '../store'

function SelectCurrency() {
  useInit()
  const navigate = useNavigate()
  const { currencies, transaction, setCurrency } = useStore()
  const [impactOccurred, , selectionChanged] = useHapticFeedback()

  const onChange = useCallback((currencyId: TCurrencyId) => {
    setCurrency(currencyId)
    console.log('SelectCurrency change vibro')
    selectionChanged()
    impactOccurred('medium')
    navigate('/check')
    // history.back()
  }, [impactOccurred, selectionChanged, navigate, setCurrency])

  return (
    <Screen className="!bg-bg">
      <Header onBack={() => { history.back() }} />

      <div className="px-4">
        <h2>Выберите валюту</h2>
      </div>
      <div className="mt-4 overflow-y-auto">
        {currencies.map((currencyItem, i) => (
          <div key={`currencies-${currencyItem.id}`}>
            <RadioButton
              group="currencies"
              label={(
                <>
                  <span className="font-semibold">{currencyItem.symbol}</span>
                  {' '}
                  <span>{currencyItem.title}</span>
                </>
              )}
              key={`currencies-${currencyItem.id}`}
              value={currencyItem.id}
              checked={transaction?.currency_id === currencyItem.id}
              onChange={onChange}
            />
            {i < currencies.length - 1 && <Divider key={`Divider-${i}`} />}
          </div>
        ))}
      </div>
    </Screen>
  )
}

export default SelectCurrency
