
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Carousel } from "@/components/ui/carousel";
import { ShoppingCart, MessageCircle } from "lucide-react";

const sarees = [
  {
    name: "Banarasi Silk Saree",
    price: "₹1299",
    image: "/saree1.jpg",
  },
  {
    name: "Cotton Printed Saree",
    price: "₹499",
    image: "/saree2.jpg",
  },
  {
    name: "Zari Border Saree",
    price: "₹899",
    image: "/saree3.jpg",
  },
];

const whatsappNumber = "919876543210"; // Change to your number

export default function Home() {
  const handleWhatsAppOrder = (saree) => {
    const message = `હેલ્લો, હું આ સાડી ખરીદવા ઇચ્છું છું:\n📌 ${saree.name}\n💰 કિંમત: ${saree.price}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-pink-100 to-rose-200 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-rose-700 drop-shadow mb-6 animate-fade-in">
        સાડીની દુનિયા (Saree World)
      </h1>

      <div className="max-w-2xl mx-auto">
        <Input
          placeholder="🔍 શોધો: Banarasi, Cotton, Bridal..."
          className="mb-4 rounded-full border-pink-400 shadow-md"
        />
      </div>

      <Carousel className="my-6">
        {sarees.map((saree, i) => (
          <Card
            key={i}
            className="min-w-[280px] mx-3 bg-white rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={saree.image}
              alt={saree.name}
              className="w-full h-56 object-cover rounded-t-2xl"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-bold text-rose-600 mb-2">
                {saree.name}
              </h2>
              <p className="text-green-700 font-bold text-lg">
                {saree.price}
              </p>
              <div className="flex gap-2 mt-4">
                <Button
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                  onClick={() => handleWhatsAppOrder(saree)}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp ઓર્ડર
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </Carousel>

      <div className="text-center mt-10 text-sm text-gray-600">
        © 2025 સાડીની દુનિયા | 💫 Powered by Mahmadavad Women Entrepreneurs
      </div>
    </div>
  );
}
