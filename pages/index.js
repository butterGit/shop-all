import ProductsList from '../components/Products/ProductsList'
import { MongoClient } from "mongodb";

export default function Home(props) {
  return (
          <ProductsList products = {props.products} ></ProductsList>
  )
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Butter:LGkpqYGJ29csKSj7@cluster0.rbyd9.mongodb.net/Shop?retryWrites=true&w=majority"
  );
  const db = client.db();

  const productsCollection = db.collection("products");

  const products = await productsCollection.find().toArray();
  
  client.close();

  return {
    props: {
      products: products.map((product) => ({
        id: product._id.toString(),
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating
        
      })),
    },
    revalidate: 10,
  };
}

