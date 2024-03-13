type Props = {
    params: {
          productId: string,
          reviewsId: String
    }
  }
  
  export default function ReviewsDetails({ params }: Props) {
    return (
          <h1>Details about product {params.productId}
           and Reviews {params.reviewsId} </h1>
    )
  }