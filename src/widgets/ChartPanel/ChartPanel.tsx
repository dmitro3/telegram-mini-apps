import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import classNames from 'classnames/bind'
import { useGetPhrases } from '../../hooks'
import { differenceInSeconds } from '../../shared'

import styles from './ChartPanel.module.scss'

const cx = classNames.bind(styles)

export const ChartPanel = () => {
  const {
    gamePhase,
    phaseTimeUntil,
    winPercent: { downPercent, upPercent }
  } = useSelector((state: any) => state.gameStatus)

  const { gameInProcess, upWins, downWins } = useGetPhrases(['gameInProcess', 'upWins', 'downWins'])

  return (
    <div className={cx('panel')}>
      <div className={cx('panel__bet-type')}>
        <h2>{upWins}</h2>
        <p className={cx('panel__bet-percent', 'up')}>{upPercent}%</p>
      </div>
      <div className={cx('panel__bet-type', 'time')}>
        <motion.h2
          initial={{ opacity: 1 }}
          animate={(gamePhase === 2 || gamePhase === 4) ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
          transition={(gamePhase === 2 || gamePhase === 4) ? { duration: 1, repeat: Infinity } : {}}
        >
          {gameInProcess[gamePhase]}
        </motion.h2>
        {(gamePhase !== 2 && gamePhase !== 4) && <h1>{differenceInSeconds(phaseTimeUntil)}</h1>
        }
      </div>
      <div className={cx('panel__bet-type', 'down')}>
        <h2>{downWins}</h2>
        <p className={cx('panel__bet-percent', 'down')}>{downPercent}%</p>
      </div>
    </div>
  )
}
