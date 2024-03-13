type Props = {
    params: {
          reviewsId: string
    }
  }
  
  export default function ReviewsDetails({ params }: Props) {
    return (
          <h1>Details about Reviews {params.reviewsId}</h1>
    )
  }