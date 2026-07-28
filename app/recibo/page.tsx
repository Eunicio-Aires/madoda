// import React from 'react';

// const ThermalReceipt = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 print:bg-white print:p-0">
//       {/* 
//         Contêiner do Recibo 
//         A largura de 300px simula bem uma bobina de 80mm. 
//         As classes 'print:*' removem sombras e ajustam para a impressora.
//       */}
//       <div 
//         id="receipt-content"
//         className="w-[300px] bg-white p-4 text-black font-mono text-xs shadow-md print:shadow-none print:w-full print:max-w-[80mm] print:m-0 print:p-0"
//       >
        
//         {/* Cabeçalho da Loja */}
//         <div className="text-center mb-4">
//           <h1 className="text-lg font-bold">MADODA FASHION STORE</h1>
//           <p>Av. Principal, Centro - Maputo</p>
//           <p>Tel: +258 84 000 0000</p>
//           <p>NUIT: 123456789</p>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         {/* Informações da Transação */}
//         <div className="mb-2">
//           <p>Data: {new Date().toLocaleDateString('pt-MZ')} {new Date().toLocaleTimeString('pt-MZ')}</p>
//           <p>Recibo Nº: 004592</p>
//           <p>Operador: Caixa 01</p>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         {/* Tabela de Itens */}
//         <div className="flex justify-between font-bold mb-1">
//           <span className="w-1/2">Item</span>
//           <span className="w-1/4 text-center">Qtd</span>
//           <span className="w-1/4 text-right">Total</span>
//         </div>

//         {/* Lista de Produtos */}
//         <div className="space-y-1 mb-2">
//           <div className="flex justify-between">
//             <span className="w-1/2 truncate">Camisa Social</span>
//             <span className="w-1/4 text-center">2</span>
//             <span className="w-1/4 text-right">1.800</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="w-1/2 truncate">Calça Jeans</span>
//             <span className="w-1/4 text-center">1</span>
//             <span className="w-1/4 text-right">2.500</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="w-1/2 truncate">Tênis Casual</span>
//             <span className="w-1/4 text-center">1</span>
//             <span className="w-1/4 text-right">3.200</span>
//           </div>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         {/* Área de Totais */}
//         <div className="space-y-1">
//           <div className="flex justify-between">
//             <span>Subtotal:</span>
//             <span>7.500,00 MT</span>
//           </div>
//           <div className="flex justify-between font-bold text-sm mt-1">
//             <span>TOTAL:</span>
//             <span>7.500,00 MT</span>
//           </div>
//           <div className="flex justify-between mt-2">
//             <span>M-Pesa / Cartão:</span>
//             <span>7.500,00 MT</span>
//           </div>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         {/* Rodapé */}
//         <div className="text-center mt-4 space-y-1">
//           <p>Obrigado pela preferência!</p>
//           <p>Trocas apenas em até 7 dias</p>
//           <p>com a apresentação deste recibo.</p>
//           <p className="mt-4">----------------------</p>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ThermalReceipt;

'use client';

// import React, { useState } from 'react';

// // Tipagem dos itens do recibo
// interface ReceiptItem {
//   id: string;
//   name: string;
//   qty: number;
//   price: number;
// }

// const ReceiptGenerator = () => {
//   // Estados do formulário
//   const [operator, setOperator] = useState('Caixa 01');
//   const [paymentMethod, setPaymentMethod] = useState('M-Pesa');
//   const [items, setItems] = useState<ReceiptItem[]>([]);
  
//   // Estados temporários para adicionar um novo item
//   const [itemName, setItemName] = useState('');
//   const [itemQty, setItemQty] = useState(1);
//   const [itemPrice, setItemPrice] = useState(0);

//   // Função para adicionar item à lista
//   const handleAddItem = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!itemName || itemPrice <= 0 || itemQty <= 0) return;

//     const newItem: ReceiptItem = {
//       id: Date.now().toString(),
//       name: itemName,
//       qty: itemQty,
//       price: itemPrice,
//     };

//     setItems([...items, newItem]);
//     // Limpar campos após adicionar
//     setItemName('');
//     setItemQty(1);
//     setItemPrice(0);
//   };

//   // Função para remover item
//   const handleRemoveItem = (id: string) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   // Cálculo do Total
//   const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-4 gap-6 print:bg-white print:p-0 print:block">
      
//       {/* 
//         =========================================
//         ÁREA DO FORMULÁRIO (Oculta na impressão)
//         =========================================
//       */}
    

//       {/* 
//         =========================================
//         ÁREA DO RECIBO (Formato Bobina Térmica)
//         =========================================
//       */}
//       <div className="flex-1 flex justify-center items-start print:justify-start">
//         <div 
//           className="w-[300px] bg-white p-4 text-black font-mono text-xs shadow-md print:shadow-none print:w-full print:max-w-[80mm] print:m-0 print:p-0"
//         >
//           {/* Cabeçalho */}
//           <div className="text-center mb-4">
//             <h1 className="text-lg font-bold">MADODA FASHION STORE</h1>
//             <p>Av. Principal, Centro - Maputo</p>
//             <p>Tel: +258 84 000 0000</p>
//             <p>NUIT: 123456789</p>
//           </div>

//           <div className="border-t border-dashed border-black my-2"></div>

//           {/* Info */}
//           <div className="mb-2">
//             <p>Data: {new Date().toLocaleDateString('pt-MZ')} {new Date().toLocaleTimeString('pt-MZ')}</p>
//             <p>Recibo Nº: {Math.floor(Math.random() * 10000).toString().padStart(5, '0')}</p>
//             <p>Operador: {operator}</p>
//           </div>

//           <div className="border-t border-dashed border-black my-2"></div>

//           {/* Tabela de Itens */}
//           <div className="flex justify-between font-bold mb-1">
//             <span className="w-1/2">Item</span>
//             <span className="w-1/4 text-center">Qtd</span>
//             <span className="w-1/4 text-right">Total</span>
//           </div>

//           <div className="space-y-1 mb-2 min-h-[50px]">
//             {items.length === 0 ? (
//               <p className="text-center italic text-gray-500 py-2 print:hidden">Nenhum item adicionado</p>
//             ) : (
//               items.map((item) => (
//                 <div key={item.id} className="flex justify-between items-center group">
//                   <span className="w-1/2 truncate pr-1">{item.name}</span>
//                   <span className="w-1/4 text-center">{item.qty}</span>
//                   <span className="w-1/4 text-right">{(item.price * item.qty).toLocaleString('pt-MZ')}</span>
                  
//                   {/* Botão de excluir item (aparece ao passar o mouse e some na impressão) */}
//                   <button 
//                     onClick={() => handleRemoveItem(item.id)}
//                     className="hidden group-hover:block ml-2 text-red-500 print:hidden absolute -right-6"
//                     title="Remover item"
//                   >
//                     X
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>

//           <div className="border-t border-dashed border-black my-2"></div>

//           {/* Totais */}
//           <div className="space-y-1">
//             <div className="flex justify-between font-bold text-sm mt-1">
//               <span>TOTAL:</span>
//               <span>{total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
//             </div>
//             <div className="flex justify-between mt-2">
//               <span>{paymentMethod}:</span>
//               <span>{total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
//             </div>
//           </div>

//           <div className="border-t border-dashed border-black my-2"></div>

//           {/* Rodapé */}
//           <div className="text-center mt-4 space-y-1">
//             <p>Obrigado pela preferência!</p>
//             <p>Trocas apenas em até 7 dias</p>
//             <p>com a apresentação deste recibo.</p>
//             <p className="mt-4">----------------------</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ReceiptGenerator;


// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { ReceiptData } from '../types/receipt';

// export default function ReceiptPage() {
//   const router = useRouter();
//   const [data, setData] = useState<ReceiptData | null>(null);

//   useEffect(() => {
//     // Busca os dados passados pela página anterior
//     const storedData = localStorage.getItem('madoda_receipt');
//     if (storedData) {
//       setData(JSON.parse(storedData));
      
//       // Opcional: Aciona a impressão automaticamente após 1 segundo
//       // setTimeout(() => { window.print() }, 1000);
//     } else {
//       // Se não tiver dados, volta para a tela inicial
//       router.push('/');
//     }
//   }, [router]);

//   if (!data) return <div className="p-10 text-center">Carregando recibo...</div>;

//   const dateObj = new Date(data.date);

//   return (
//     <div className="flex justify-center bg-gray-200 min-h-screen p-4 print:p-0 print:bg-white">
      
//       {/* Botões de Ação (Não saem na impressão) */}
//       <div className="absolute top-4 right-4 space-x-2 print:hidden">
//         <button 
//           onClick={() => router.push('/')}
//           className="bg-gray-600 text-white px-4 py-2 rounded-md"
//         >
//           Voltar
//         </button>
//         <button 
//           onClick={() => window.print()}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold"
//         >
//           Imprimir Agora
//         </button>
//       </div>

//       {/* Conteúdo do Recibo (80mm) */}
//       <div className="w-[300px] bg-white p-4 text-black font-mono text-xs shadow-md print:shadow-none print:w-full print:max-w-[80mm] print:m-0 print:p-0">
        
//         <div className="text-center mb-4">
//           <h1 className="text-lg font-bold">MADODA FASHION STORE</h1>
//           <p>Av. Mocambique, 25 de Junho - Maputo</p>
//           <p>Tel: +258 86 890 82 84</p>
//           <p>NUIT: 265183</p>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         <div className="mb-2">
//           <p>Data: {dateObj.toLocaleDateString('pt-MZ')} {dateObj.toLocaleTimeString('pt-MZ')}</p>
//           <p>Recibo Nº: {Math.floor(Math.random() * 10000).toString().padStart(5, '0')}</p>
//           <p>Operador: {data.operator}</p>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         <div className="flex justify-between font-bold mb-1">
//           <span className="w-1/2">Item</span>
//           <span className="w-1/4 text-center">Qtd</span>
//           <span className="w-1/4 text-right">Total</span>
//         </div>

//         <div className="space-y-1 mb-2">
//           {data.items.map((item) => (
//             <div key={item.id} className="flex justify-between">
//               <span className="w-1/2 truncate pr-1">{item.name}</span>
//               <span className="w-1/4 text-center">{item.qty}</span>
//               <span className="w-1/4 text-right">{(item.price * item.qty).toLocaleString('pt-MZ')}</span>
//             </div>
//           ))}
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         <div className="space-y-1">
//           <div className="flex justify-between font-bold text-sm mt-1">
//             <span>TOTAL:</span>
//             <span>{data.total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
//           </div>
//           <div className="flex justify-between mt-2">
//             <span>{data.paymentMethod}:</span>
//             <span>{data.total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
//           </div>
//         </div>

//         <div className="border-t border-dashed border-black my-2"></div>

//         <div className="text-center mt-4 space-y-1">
//           <p>Obrigado pela preferência!</p>
//           <p>Trocas apenas em até 7 dias</p>
//           <p>com a apresentação deste recibo.</p>
//           <p className="mt-4">----------------------</p>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReceiptData } from '../types/receipt';

export default function ReceiptPage() {
  const router = useRouter();
  const [data, setData] = useState<ReceiptData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('madoda_receipt');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!data) return <div className="p-10 text-center">Carregando recibo...</div>;

  const dateObj = new Date(data.date);

  return (
    /* 
      Container Externo:
      w-full e min-h-screen garantem que a página ocupe 100% da tela.
    */
    // <div className="w-full min-h-screen bg-white relative print:bg-white">
      
    //   {/* Botões Flutuantes (Fixos para não ocupar espaço no documento) */}
    //   {/* <div className="fixed top-4 right-4 flex gap-2 print:hidden z-10">
    //     <button 
    //       onClick={() => router.push('/')}
    //       className="bg-gray-600 text-white px-4 py-2 rounded-md opacity-80"
    //     >
    //       Voltar
    //     </button>
    //     <button 
    //       onClick={() => window.print()}
    //       className="bg-blue-600 text-white px-4 py-2 rounded-md font-bold shadow-lg"
    //     >
    //       Imprimir
    //     </button>
    //   </div> */}

    //   {/* 
    //     Conteúdo do Recibo:
    //     Transformado em flex flex-col para esticar a altura.
    //     Aumentei a fonte para text-base para melhorar a leitura na tela cheia.
    //   */}
    //   <div className="w-full min-h-screen mt-6 flex flex-col bg-white p-4 pt-20 text-black font-mono text-base print:text-sm print:p-0 print:block print:min-h-0">
        
    //     {/* Cabeçalho */}
    //     <div className="text-center mb-4">
    //     <h1 className="text-3xl font-extrabold font-italic">Expresso</h1>
    //       <h1 className="text-3xl font-bold">Electro Ferragens, Lda.</h1>
    //       <p>Av. Filipe Samuel Magaia N-261</p>
    //       <p>Tel: 21322081 / 21305406 / 21300842 - Fax: 21324074</p>
    //       <p>Maputo - Moçambique</p>
    //       <p>NUIT: 265183</p>
    //     </div>

    //     <div className="border-t-2 border-dashed border-black my-4"></div>

    //     {/* Informações da Venda */}
    //     <div className="mb-4 space-y-2 text-md">
    //       <p>Data: {dateObj.toLocaleDateString('pt-MZ')} {dateObj.toLocaleTimeString('pt-MZ')}</p>
    //       <p>Recibo Nº: {Math.floor(Math.random() * 10000).toString().padStart(5, '0')}</p>
    //       <p>Operador: {data.operator}</p>
    //       <p>Cliente: {data.customer || 'N/A'}</p>
    //     </div>

    //     <div className="border-t-2 border-dashed border-black my-4"></div>

    //     {/* Cabeçalho da Tabela */}
    //     <div className="flex justify-between font-bold mb-3 text-lg">
    //       <span className="w-1/2">Item</span>
    //       <span className="w-1/4 text-center">Qtd</span>
    //       <span className="w-1/4 text-right">Total</span>
    //     </div>

    //     {/* Lista de Itens (Esta área cresce conforme os itens) */}
    //     <div className="space-y-3 mb-4">
    //       {data.items.map((item) => (
    //         <div key={item.id} className="flex justify-between items-center">
    //           <span className="w-1/2 pr-2 leading-tight">{item.name}</span>
    //           <span className="w-1/4 text-center">{item.qty}</span>
    //           <span className="w-1/4 text-right">{(item.price * item.qty).toLocaleString('pt-MZ')}</span>
    //         </div>
    //       ))}
    //     </div>

    //     <div className="border-t-2 border-dashed border-black my-4"></div>

    //     {/* Totais */}
    //     <div className="space-y-3">
    //       <div className="flex justify-between font-bold text-xl mt-2">
    //         <span>TOTAL:</span>
    //         <span>{data.total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
    //       </div>
    //       <div className="flex justify-between mt-3 text-lg">
    //         <span>{data.paymentMethod}:</span>
    //         <span>{data.total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
    //       </div>
    //     </div>

    //     {/* 
    //       Rodapé:
    //       mt-auto empurra esta div para o extremo inferior da tela, 
    //       fazendo com que o recibo ocupe o espaço vertical completo.
    //     */}
    //     <div className="mt-auto pt-8">
    //       <div className="border-t-2 border-dashed border-black mb-4 print:hidden"></div>
    //       <div className="text-center space-y-2">
    //         <p className="font-bold text-lg">Obrigado pela preferência!</p>
    //         {/* <p>Trocas apenas em até 2 dias</p> */}
    //         <p>Processado por Computador</p>
    //         <p className="mt-4">----------------------</p>
    //       </div>
    //     </div>

    //   </div>
    // </div>


    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center print:bg-white print:block print:min-h-0">
  
  {/* Botões Flutuantes (Descomente quando precisar) */}
  {/* <div className="fixed top-4 right-4 flex gap-2 print:hidden z-10">...</div> */}

  {/* 
    Container Principal: 
    Foi adicionado um max-w-md para que na tela do computador não fique largo demais, 
    imitando o formato de um talão. No mobile ou na impressão, ele ajusta-se perfeitamente.
  */}
  <div className="w-full max-w-md bg-white p-6 pt-12 flex flex-col flex-1 shadow-sm text-black font-mono print:shadow-none print:w-full print:max-w-none print:p-0 print:m-0">
    
    {/* Cabeçalho */}
    <div className="text-center mb-6">
      <h1 className="text-3xl font-black uppercase tracking-widest mb-1">Expresso</h1>
      <h2 className="text-xl font-bold uppercase leading-tight mb-2">Electro Ferragens, Lda.</h2>
      <div className="text-sm text-gray-700 print:text-black leading-relaxed">
        <p>Av. Filipe Samuel Magaia N-261</p>
        <p>Maputo - Moçambique</p>
        <p>Tel: 21322081 / 21305406</p>
        <p className="mt-1">NUIT: <span className="font-bold">265183</span></p>
      </div>
    </div>

    <div className="border-t border-dashed border-gray-400 print:border-black my-4"></div>

    {/* Informações da Venda (Transformado em Grid para melhor alinhamento) */}
    <div className="mb-4 text-sm grid grid-cols-2 gap-y-2">
      <p><span className="font-semibold">Data:</span> {dateObj.toLocaleDateString('pt-MZ')}</p>
      <p className="text-right"><span className="font-semibold">Hora:</span> {dateObj.toLocaleTimeString('pt-MZ')}</p>
      <p><span className="font-semibold">Recibo:</span> #{Math.floor(Math.random() * 10000).toString().padStart(5, '0')}</p>
      <p className="text-right"><span className="font-semibold">Op:</span> {data.operator}</p>
      <p className="col-span-2 mt-1 truncate"><span className="font-semibold">Cliente:</span> {data.customer || 'Júlio'}</p>
    </div>

    <div className="border-t border-dashed border-gray-400 print:border-black my-4"></div>

    {/* Cabeçalho da Tabela */}
    <div className="flex justify-between font-bold text-sm mb-3 uppercase border-b border-gray-300 print:border-black pb-2">
      <span className="w-3/5 text-left">Artigo</span>
      <span className="w-1/5 text-center">Qtd</span>
      <span className="w-1/5 text-right">Total</span>
    </div>

    {/* Lista de Itens */}
    <div className="space-y-3 mb-6 text-sm">
      {data.items.map((item) => (
        <div key={item.id} className="flex justify-between items-start">
          <span className="w-3/5 pr-2 leading-tight break-words">{item.name}</span>
          <span className="w-1/5 text-center">{item.qty}</span>
          <span className="w-1/5 text-right font-medium">{(item.price * item.qty).toLocaleString('pt-MZ')}</span>
        </div>
      ))}
    </div>

    <div className="border-t border-dashed border-gray-400 print:border-black my-4"></div>

    {/* Totais */}
    <div className="space-y-2 mb-6">
      <div className="flex justify-between font-bold text-xl">
        <span>TOTAL A PAGAR:</span>
        <span>{data.total.toLocaleString('pt-MZ', { minimumFractionDigits: 2 })} MT</span>
      </div>
      <div className="flex justify-between text-sm text-gray-600 print:text-black">
        <span>Método de Pagamento:</span>
        <span className="uppercase font-semibold">{data.paymentMethod}</span>
      </div>
    </div>

    {/* Rodapé Dinâmico (Empurrado para o fim com mt-auto) */}
    <div className="mt-auto pt-8 text-center">
      
      {/* Etiqueta de Isenção de IVA */}
      <div className="mb-6">
        <span className="font-bold text-sm border-2 border-black print:border-black px-4 py-1 uppercase tracking-wider inline-block">
          * Isento de IVA *
        </span>
      </div>
      
      <div className="space-y-1 text-sm text-gray-700 print:text-black">
        <p className="font-bold text-base text-black">Obrigado pela preferência!</p>
        <p className="text-xs">Conserve este talão como prova de compra.</p>
        <p className="text-xs mt-3 pt-3 border-t border-gray-200 print:border-transparent inline-block">
          Processado por Computador
        </p>
      </div>
      <div className="mt-54 border-t border-dashed border-gray-400 print:border-black"></div>
    </div>

  </div>
  
</div>
  );
}