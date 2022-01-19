import ProductDetails from "../../components/Products/ProductDetails";
import { MongoClient, ObjectId } from "mongodb";

const ProductPage = (props) => {
  return (
    <ProductDetails
      product={props.productData}
    ></ProductDetails>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Butter:LGkpqYGJ29csKSj7@cluster0.rbyd9.mongodb.net/Shop?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: 'blocking',
    paths: products.map((product) => ({
      params: { productId: product._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const productId = context.params.productId;

  const client = await MongoClient.connect(
    "mongodb+srv://Butter:LGkpqYGJ29csKSj7@cluster0.rbyd9.mongodb.net/Shop?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productCollection = db.collection("products");

  const selectedProduct = await productCollection.findOne({
    _id: ObjectId(productId),
  });

  return {
    props: {
      productData: {
        id: selectedProduct._id.toString(),
        title: selectedProduct.title,
        price: selectedProduct.price,
        description: selectedProduct.description,
        category: selectedProduct.category,
        image: selectedProduct.image,
        rating: selectedProduct.rating,
      },
    },
  };
}
