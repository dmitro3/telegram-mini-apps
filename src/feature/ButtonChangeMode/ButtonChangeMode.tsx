import { Button } from '../../shared'
import classNames from 'classnames/bind'
import styles from './ButtonChangeMode.module.scss'

const cx = classNames.bind(styles)

interface Props {
	isOpen: boolean,
	onClick: () => void,
	className?: string
}

export const ButtonChangeMode = ({
	isOpen = false,
	onClick,
	className,
}: Props) => {
	const text = "$BTC, 30s";

	return (
		<Button
			className={cx('button', className)}
			type='gray'
			iconLeftName="bitcoin"
			iconRightName={isOpen ? "arrow-up" : "arrow-down"}
			sizeIcons='small'
			sizeRightIcon='small'
			onClick={onClick}
		>
			{text}
		</Button>
	)
}