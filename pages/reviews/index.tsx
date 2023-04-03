import MainLayout from "@/components/MainLayout"
import reviews from "@/data/reviews"
import styles from "../../styles/review.module.scss"


export default function Reviews() {
    return (
        <MainLayout>
            <div className="subHeader">Reviews:</div>
            <div className={styles.wrapper}>
                {reviews.map((review) => {
                    return (
                        <div key={review.id} className={styles.review}>
                            <div> <b>{review.username}</b> </div>
                            <div> <i>{review.comment}</i> </div>
                            <div>rating: {review.rating}</div>
                            <div>{review.date}</div>
                        </div>
                    )
                })}
            </div>
        </MainLayout>
    )
}