import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import MainLayout from '../components/MainLayout'


const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
	return (
		<MainLayout>
			<div className={styles.home}>
				<div className={styles.discount}>

				</div>
			</div>
		</MainLayout>
	)
}
