// "use client"
// // import Image from "next/image";
// import { motion } from 'framer-motion';

// const phrases = [
//   "MODA MASCULINA PREMIUM",
//   "ESTILO • ELEGÂNCIA • PRESENÇA",
//   "NOVA COLEÇÃO DISPONÍVEL",
//   "QUALIDADE QUE IMPRESSIONA",
//   "LOOKS PARA HOMENS DE ATITUDE",
//   "CONFORTO E SOFISTICAÇÃO",
// ]

// export default function Home() {
//   const goldGradient = "linear-gradient(to right, transparent, #D4AF37, transparent)";
//   return (

//     <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden">


//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.6 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="uppercase tracking-[0.5em] text-sm mb-4 block font-light"
//       >Em breve
//       </motion.span>


//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//         className="text-center"
//       >

//         <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-[#D4AF37]">
//           Mr. <br /> Madoda
//         </h1>

//         {/* Linha Dourada Animada */}
//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           animate={{ width: "100%", opacity: 1 }}
//           transition={{ delay: 0.8, duration: 1.5 }}
//           className="h-[1px] mt-6"
//           style={{ background: goldGradient }}
//         />
//       </motion.div>

//       {/* Glow Dourado de fundo */}
//       <div className="absolute w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] -z-10" />

//       <div className="absolute bottom-5 left-0 w-full overflow-hidden bg-black py-4">

//         {/* Fade lateral esquerdo */}
//         <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />

//         {/* Fade lateral direito */}
//         <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

//         <motion.div
//           className="flex gap-10 whitespace-nowrap"
//           animate={{ x: [0, -1000] }}
//           transition={{
//             repeat: Infinity,
//             duration: 25,
//             ease: "linear",
//           }}
//         >
//           {[...phrases, ...phrases, ...phrases].map((text, index) => (
//             <span
//               key={index}
//               className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-light"
//             >
//               {text}
//             </span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReceiptItem, ReceiptData } from './types/receipt';

export default function CheckoutPage() {
  const router = useRouter();
  
  const [operator, setOperator] = useState('Caixa 01');
  const [paymentMethod, setPaymentMethod] = useState('M-Pesa');
  const [items, setItems] = useState<ReceiptItem[]>([]);
  
  const [itemName, setItemName] = useState('');
  const [itemQty, setItemQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemName || itemPrice <= 0 || itemQty <= 0) return;

    const newItem: ReceiptItem = {
      id: Date.now().toString(),
      name: itemName,
      qty: itemQty,
      price: itemPrice,
    };

    setItems([...items, newItem]);
    setItemName('');
    setItemQty(1);
    setItemPrice(0);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleConfirm = () => {
    if (items.length === 0) {
      alert("Adicione pelo menos um item para gerar o recibo.");
      return;
    }

    // Salva os dados no localStorage para a página de impressão ler
    const receiptData: ReceiptData = {
      operator,
      paymentMethod,
      items,
      total,
      date: new Date().toISOString(),
    };
    
    localStorage.setItem('madoda_receipt', JSON.stringify(receiptData));
    
    // Redireciona para a página de impressão
    router.push('/recibo');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-black border-b pb-2">Nova Venda - Madoda Fashion</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Operador</label>
            <input 
              type="text" 
              className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm border p-2"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Pagamento</label>
            <select 
              className="mt-1 text-black block w-full rounded-md border-gray-300 shadow-sm border p-2"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="M-Pesa">M-Pesa</option>
              <option value="Cartão">Cartão</option>
              <option value="Numerário">Numerário</option>
            </select>
          </div>
        </div>

        <form onSubmit={handleAddItem} className="bg-gray-50 p-4 rounded-md border mb-6">
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-6">
              <input 
                type="text" 
                placeholder="Produto" 
                className="w-full border p-2 rounded-md text-black"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="col-span-2">
              <input 
                type="number" 
                className="w-full border p-2 rounded-md text-black"
                value={itemQty}
                min="1"
                onChange={(e) => setItemQty(Number(e.target.value))}
              />
            </div>
            <div className="col-span-4">
              <input 
                type="number" 
                placeholder="Preço (MT)" 
                className="w-full border p-2 rounded-md text-black"
                value={itemPrice}
                min="0"
                onChange={(e) => setItemPrice(Number(e.target.value))}
              />
            </div>
          </div>
          <button type="submit" className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Adicionar Produto
          </button>
        </form>

        {/* Lista Resumo */}
        <div className="mb-6 max-h-40 overflow-y-auto">
          {items.map(item => (
            <div key={item.id} className="flex justify-between p-2 border-b text-black">
              <span>{item.qty}x {item.name}</span>
              <div className="flex items-center gap-4 text-black">
                <span>{(item.price * item.qty).toLocaleString('pt-MZ')} MT</span>
                <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 text-black font-bold">X</button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-lg mt-2">
            Total: {total.toLocaleString('pt-MZ')} MT
          </div>
        </div>

        <button 
          onClick={handleConfirm}
          className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700"
        >
          CONFIRMAR E GERAR RECIBO
        </button>
      </div>
    </div>
  );
}