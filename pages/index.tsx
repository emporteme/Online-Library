import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import MainLayout from '../components/MainLayout'
import BestSellers from '../components/BestSellers'
import mockBooks from '../mock/mockAPI'

const inter = Montserrat({ subsets: ['latin'] })

export default function Home() {
	return (
		<MainLayout>
			<div className={styles.home}>
				<BestSellers books={mockBooks} />
			</div>
		</MainLayout>
	)
}
