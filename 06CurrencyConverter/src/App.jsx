import { useState } from 'react'
import './App.css'
import { InputBox } from './components' 
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmt] = useState("")

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmt(amount)
    setAmount(convertedAmt)
  }

  const convert = () => {
    setConvertedAmt(amount * currencyInfo[to])
  }

  const BackgroundImage = "https://images.pexels.com/photos/6985260/pexels-photo-6985260.jpeg"

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <h1 className='text-white text-center pt-2 pb-4 text-2xl font-bold'>Currency Converter</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(curr) => setFrom(curr)}
                                selectCurr={from}
                                onAmountChange={(amt) => setAmount(amt)}
                                place={`Enter ${from.toUpperCase()} value`}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-500 active:bg-blue-600 hover:scale-105 active:scale-100"   
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmt}
                                currencyOptions={options}
                                onCurrencyChange={(curr) => setTo(curr)}
                                selectCurr={to}
                                place={`${to.toUpperCase()} value will be shown`}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-500 active:bg-blue-600 hover:scale-102 active:scale-100">
                            Convert {from.toUpperCase()} to {to.toUpperCase()} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
