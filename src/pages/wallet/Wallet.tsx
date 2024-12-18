import { useSelector } from 'react-redux'
import classNames from 'classnames/bind'

import styles from './Wallet.module.scss'
import {
  Button,
  Icon,
  Select, sourceAltinbit, sourceBitobmen, sourceCryptoBot,
  sourceKotleta, sourceOnemoment, sourcePaybis, sourceWallet
} from '../../shared'
import sendIcon from '../../shared/assets/send.png'
import walletIcon from '../../shared/assets/wallet.png'
import { useDisconnect, useGetPhrases } from "../../hooks";
import { useTonAddress } from "@tonconnect/ui-react";
import { motion } from "framer-motion";
import { useState } from "react";

const cx = classNames.bind(styles)

const marketData = [
  {
    name: 'P2PMarket',
    icon: 'market',
  },
  {
    name: 'send',
    icon: sendIcon,
    blockSelect: true,
    onClick: () => window.location.href = sourceCryptoBot,
  },
  {
    name: 'wallet',
    icon: walletIcon,
    blockSelect: true,
    onClick: () => window.location.href = sourceWallet,
  }
]
const TopUpByCardCIS = [
  {
    name: 'TopUpByCardCIS',
    icon: 'card',
  },
  {
    name: 'kotleta',
    icon: 'kotleta',
    blockSelect: true,
    onClick: () => window.location.href = sourceKotleta,
  },
  {
    name: 'oneMoment',
    icon: 'oneMoment',
    blockSelect: true,
    onClick: () => window.location.href = sourceOnemoment,
  },
  {
    name: 'altinBit',
    icon: 'altinBit',
    blockSelect: true,
    onClick: () => window.location.href = sourceAltinbit,
  },
  {
    name: 'bitObmen',
    icon: 'bitObmen',
    blockSelect: true,
    onClick: () => window.location.href = sourceBitobmen,
  }
]
const TopUpByCard = [
  {
    name: 'TopUpByCard',
    icon: 'card',
  },
  {
    name: 'paybis',
    icon: 'paybis',
    blockSelect: true,
    onClick: () => window.location.href = sourcePaybis,
  },
  {
    name: 'TopUpByCard',
    icon: 'card',
  },
  {
    name: 'paybis',
    icon: 'paybis',
    blockSelect: true,
    onClick: () => window.location.href = sourcePaybis,
  },
  {
    name: 'TopUpByCard',
    icon: 'card',
  },
  {
    name: 'paybis',
    icon: 'paybis',
    blockSelect: true,
    onClick: () => window.location.href = sourcePaybis,
  },
]

export const Wallet = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const { balance: balanseUser } = useSelector((state: any) => state.userDataWallet)
  const { topUp, copied, balance } = useGetPhrases(['topUp', 'copied', 'balance'])
  const address = useTonAddress()
  const handlerDisconnect = useDisconnect()

  const handlerCopyAddress = () => {
    navigator.clipboard
    .writeText(address)
    .then(() => {
      setIsCopied(true);
      const timer = setTimeout(() => {
        setIsCopied(false)
        clearTimeout(timer)
      }, 3000);
    })
    .catch((error) => {
      console.error("Error copying address to clipboard:", error);
    })
  }

  return (
    <div className={cx('page', 'page-wallet')}>
      <header className={cx('page-wallet__header')}>
        <h2 className='h2-big'>{balance}</h2>
        <div className={cx('page-wallet__balance')}>
          <Icon name='ton-medium' />
          <h1>{balanseUser}</h1>
        </div>
      </header>
      <main className={cx('page__main')}>
        <div className={cx('container', 'container__buttons')}>
          <Button
            className={cx('button__address')}
            iconLeftName='wallet'
            iconRightName='copy'
            sizeIcons='big'
            type='light'
            onClick={handlerCopyAddress}
          >
            <motion.h2
              className={cx('copy_text')}
              initial={{opacity: 0}}
              animate={isCopied ? {opacity: 1} : {opacity: 0}}
            >
              {copied}
            </motion.h2>
            <p>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</p>
          </Button>
          <Button onClick={handlerDisconnect} iconLeftName='disconnect' sizeIcons='big' />
        </div>
        <div className={cx('container')}>
          <header>
            <p>{topUp}</p>
          </header>
          <div className={cx('content')}>
            <Select data={marketData} typeStyle='light'/>
            <Select data={TopUpByCardCIS} typeStyle='light'/>
            <Select data={TopUpByCard} typeStyle='light'/>
          </div>
        </div>
      </main>
    </div>
  )
}
