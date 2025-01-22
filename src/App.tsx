import React from "react";
import { Clock, Wallet } from "lucide-react";
export function App() {
  return <div className="w-full min-h-screen bg-[#f8f9ff] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-6 mb-8">
          <button className="px-16 py-4 rounded-[32px] bg-white text-[#4267B2] font-medium text-xl border-2 border-[#4267B2]">
            Куплю
          </button>
          <button className="px-16 py-4 rounded-[32px] bg-white text-[#4CAF50] font-medium text-xl border-2 border-[#4CAF50]">
            Скупаю
          </button>
        </div>
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 leading-tight">
              Лучшая оптовая скупка
              <br />
              <span className="text-[#4267B2] bg-gradient-to-r from-[#4267B2] to-[#5B7EC6] bg-clip-text text-transparent">
                цифровых товаров
              </span>
            </h1>
            <p className="text-gray-800 text-xl sm:text-2xl mt-6">
              Быстро, выгодно и надежно скупаем{" "}
              <span className="font-semibold">Xbox Game Pass Ultimate</span> и
              коды с пачек <span className="font-semibold">Doritos</span>.
            </p>
          </div>
          <img src="/pasted-image-1737571340343.png" alt="Telegram Logo" className="w-16 h-16" />
        </div>
        <div className="bg-white rounded-xl p-6 mb-8 flex items-center justify-center gap-4 shadow-sm">
          <img src="https://www.doritos.com/sites/doritos.com/files/2018-08/new-doritos-logo.png" alt="Doritos" className="h-8" />
          <div className="text-2xl font-bold">Doritos</div>
          <div className="mx-4 text-gray-300">|</div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Xbox_logo_%282019%29.svg" alt="Xbox" className="h-8" />
          <div className="text-2xl font-bold">Xbox</div>
        </div>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span role="img" aria-label="money">
                  💸
                </span>{" "}
                Быстрые выплаты
              </h3>
              <p className="text-gray-600 text-lg">
                Выплаты быстро и без задержек, на удобный для вас способ!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span role="img" aria-label="money bag">
                  💰
                </span>{" "}
                Большой бюджет
              </h3>
              <p className="text-gray-600 text-lg">
                Всегда готовы купить ваш товар по лучшей цене на рынке!
              </p>
            </div>
          </div>
          <div className="bg-white rounded-[24px] p-6 shadow-sm">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <span role="img" aria-label="robot">
                  🤖
                </span>{" "}
                Работаем 24/7
              </h3>
              <p className="text-gray-600 text-lg">
                Поддержка всегда на связи и готова помочь с решением любого
                вопроса!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-white rounded-[24px] p-6 w-[280px] h-[280px] flex items-center justify-center shadow-sm">
            <div className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://t.me/universebuyer')] bg-contain bg-no-repeat bg-center" />
          </div>
          <div className="bg-white rounded-[24px] p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Связь с нами:</h2>
            <div className="space-y-3">
              <button className="w-full bg-[#EEF3FF] text-[#4267B2] px-8 py-3 rounded-2xl text-lg">
                @universebuyer
              </button>
              <button className="w-full bg-white text-[#4267B2] px-8 py-3 rounded-2xl border-2 border-[#4267B2] text-lg">
                Написать
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
}