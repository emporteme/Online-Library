// import Head from 'next/head'
// import Image from 'next/image'
// import { Montserrat } from 'next/font/google'
// import style
import styles from '@/styles/Home.module.scss'
// import components
import MainLayout from '../components/MainLayout'
import BestSellers from '../components/BestSellers'
import Discount from '../components/Discount'
import Reviews from '../components/Reviews'
// import mock API
import mockBooks from '../data/books'
import reviews from '../data/reviews'

export default function Home() {
	return (
		<MainLayout>
			<div className={styles.home}>
				<Discount />
				<BestSellers books={mockBooks} />
				<Reviews reviews={reviews} />
			</div>
		</MainLayout>
	)
}