import classNames from 'classnames/bind'
import styles from './Icon.module.scss'

import { IIcon } from './types'

const cx = classNames.bind(styles)

export const Icon = ({
  className,
  name,
  size = 'medium',
}: IIcon) => {
  return (
    <span className={cx('icon', className)}>
      <svg role='image' className={cx(size)} >
        <use xlinkHref={`/telegram-mini-apps/images/icons.svg#${name}`} />
      </svg>
    </span>
  );
}
