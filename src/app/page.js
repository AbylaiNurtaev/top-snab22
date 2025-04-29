import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Stroke from "@/components/Stroke/Stroke";
import Stats from "@/components/Stats/Stats";
import Advantages from "@/components/Advantages/Advantages";
import Promotions from "@/components/Promotions/Promotions";
import Reviews from "@/components/Reviews/Reviews";
import Contacts from "@/components/Contacts/Contacts";
import PaymentDelivery from "@/components/PaymentDelivery/PaymentDelivery";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="hero-background">
        <Header />
        <Stroke />
        <Stats />
      </div>

      <Advantages />
      <Promotions />
      <Reviews />
      <PaymentDelivery />
      <Contacts />
      <Footer />
    </div>
  );
}

