import ProductDetails from "../../components/Products/ProductDetails";
import { MongoClient, ObjectId } from "mongodb";

const ProductPage = (props) => {
  return <ProductDetails product={props.product}></ProductDetails>;
};

export default ProductPage;

export async function getStaticProps(context) {
  const productId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Butter:LGkpqYGJ29csKSj7@cluster0.rbyd9.mongodb.net/Shop?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productCollection = db.collection("products");

  const product = productCollection.findOne({ _id: ObjectId(productId) });

  return {
    props: {
      product: {
        id: product._id.toString(),
        title: product.title,
        address: product.address,
        image: product.image,
        description: product.description,
      },
    },
  };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
